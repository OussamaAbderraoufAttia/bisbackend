from flask import Flask, render_template, request, jsonify
# ... (rest of your code)

import cv2
import numpy as np
from tensorflow.keras.models import load_model
import base64
from io import BytesIO

app = Flask(__name__)

ImgHeight = 224  # Set your desired image height
ImgWidth = 224  # Set your desired image width

# Load the model (you'll need to define or load your model here)
model = load_model("model-brain-mri.h5")  # Replace with loading your model


@app.route('/', methods=['GET'])
def hello_word():
    return render_template('bis.html')


@app.route('/predict', methods=['POST'])
def predict_from_image():
    # Get the image file from the POST request
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'})

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No file selected'})

    # Read the image file
    image = cv2.imdecode(np.fromstring(file.read(), np.uint8), cv2.IMREAD_COLOR)

    # Resize the image
    resized_image = cv2.resize(image, (ImgHeight, ImgWidth))

    # Preprocess the image for prediction (normalize if required)
    input_image = resized_image / 255
    input_image = input_image[np.newaxis, :, :, :]  # Add batch dimension

    # Perform prediction
    prediction = model.predict(input_image)

    # Create visualizations
    fig, axes = plt.subplots(1, 3, figsize=(12, 6))

    # Original image
    axes[0].imshow(resized_image)
    axes[0].set_title('Original Image')
    axes[0].axis('off')

    # Prediction
    axes[1].imshow(np.squeeze(prediction))
    axes[1].set_title('Raw Prediction')
    axes[1].axis('off')

    # Binary prediction (based on a threshold, e.g., 0.5)
    binary_prediction = (prediction > 0.5).astype(np.uint8)  # Applying threshold
    axes[2].imshow(np.squeeze(binary_prediction))
    axes[2].set_title('Binary Prediction')
    axes[2].axis('off')

    plt.tight_layout()

    # Convert the binary prediction to a TIFF format and save it
    save_path = 'result.tif'
    cv2.imwrite(save_path, cv2.cvtColor(np.squeeze(binary_prediction) * 255, cv2.COLOR_GRAY2BGR))

    # Return the saved file path or any other response
    return jsonify({'result': 'Prediction completed and saved as result.tif'})

if __name__ == '__main__':
    app.run(port=3000, debug=True)
