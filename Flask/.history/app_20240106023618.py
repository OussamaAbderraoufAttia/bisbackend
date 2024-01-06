from flask import Flask, jsonify, request
import cv2
import numpy as np
from tensorflow.keras.models import load_model

app = Flask(__name__)

ImgHeight = 256  # Set your desired image height
ImgWidth = 256  # Set your desired image width

# Path to your saved model
model_path = 'model-brain-mri.h5'

# Load the model
model = load_model(model_path)

def predict_and_return_tif(image_data, save_path):
    # Convert the received image data to a numpy array
    nparr = np.frombuffer(image_data.read(), np.uint8)
    image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Resize and preprocess the image for prediction
    resized_image = cv2.resize(image, (ImgHeight, ImgWidth))
    input_image = resized_image / 255
    input_image = input_image[np.newaxis, :, :, :]  # Add batch dimension

    # Perform prediction
    prediction = model.predict(input_image)
    
    # Binary prediction (based on a threshold, e.g., 0.5)
    binary_prediction = (prediction > 0.5).astype(np.uint8)  # Applying threshold

    # Save the visualization as a TIFF image using OpenCV
    cv2.imwrite(save_path, cv2.cvtColor(np.squeeze(binary_prediction) * 255, cv2.COLOR_GRAY2BGR))

@app.route('/predict_image', methods=['POST'])
def predict_image():
    # Check if an image file is included in the request
    if 'image' not in request.files:
        return jsonify({'error': 'No image part in the request'})

    image_file = request.files['image']

    # Replace 'path_to_save_result.tif' with your specific path to save the result
    save_path = 'path_to_save_result.tif'

    # Call the function to predict and save the TIFF image
    predict_and_return_tif(image_file, save_path)

    return jsonify({'message': 'Prediction completed and saved as TIFF image'})

if __name__ == '__main__':
    app.run(port=3000, debug=True)
