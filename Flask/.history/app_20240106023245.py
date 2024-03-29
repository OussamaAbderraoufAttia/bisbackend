from flask import Flask, jsonify, request, render_template
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

def predict_and_return_tif(image_path, save_path):
    # Load and preprocess the image
    image = cv2.imread(image_path)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # Convert to RGB if needed
    resized_image = cv2.resize(image, (ImgHeight, ImgWidth))

    # Preprocess the image for prediction (normalize if required)
    input_image = resized_image / 255
    input_image = input_image[np.newaxis, :, :, :]  # Add batch dimension

    # Perform prediction
    prediction = model.predict(input_image)
    
    # Binary prediction (based on a threshold, e.g., 0.5)
    binary_prediction = (prediction > 0.5).astype(np.uint8)  # Applying threshold

    # Save the visualization as a TIFF image using OpenCV
    cv2.imwrite(save_path, cv2.cvtColor(np.squeeze(binary_prediction) * 255, cv2.COLOR_GRAY2BGR))

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Check if an image file is included in the request
        if 'image' not in request.files:
            return jsonify({'error': 'No image part in the request'})

        image_file = request.files['image']
        save_path= "path_to_save_result.tif"
        

        # Call the function to predict and save the TIFF image
        saved_image_path = predict_and_return_tif(image_file, save_path)

        return jsonify({'message': 'Prediction completed and saved as TIFF image', 'image_path': saved_image_path})

    return render_template('index.html')

@app.route('/predict_image', methods=['POST'])
def predict_image():
    # For internal use: trigger the prediction directly from this endpoint
    if 'image' not in request.files:
        return jsonify({'error': 'No image part in the request'})

    image_file = request.files['image']

    saved_image_path = predict_and_return_tif(image_file)

    return jsonify({'message': 'Prediction completed and saved as TIFF image', 'image_path': saved_image_path})

if __name__ == '__main__':
    app.run(port=3000, debug=True)
