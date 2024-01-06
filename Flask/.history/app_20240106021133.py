from flask import Flask, jsonify
import cv2
import numpy as np
from tensorflow.keras.models import load_model

app = Flask(__name__)

ImgHeight = 256  # Set your desired image height
ImgWidth = 256  # Set your desired image width

# Path to your saved model
model_path = '/content/model-brain-mri.h5'

# Load the model
model = load_model(model_path)

@app.route('/predict_image', methods=['GET'])
def predict_and_return_tif(image_path, model, save_path):
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

# Replace 'image_path' and 'save_path' with your specific paths
image_path = 'TCGA_CS_4941_19960909_9.tif'
save_path = 'result.tif'

predict_and_return_tif(image_path, model, save_path)


if __name__ == '__main__':
    app.run(port=3000, debug=True)
