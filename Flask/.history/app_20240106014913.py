from flask import Flask, render_template, request, jsonify
import cv2
import numpy as np
from tensorflow.keras.models import load_model

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

    # Get the predicted class or value (modify based on your model)
    predicted_class = np.argmax(prediction)  # Example for classification, modify based on your model output

    # Return the prediction result
    return jsonify({'result': f'Predicted class: {predicted_class}'})  # Modify the response as needed

if __name__ == '__main__':
    app.run(port=3000, debug=True)
