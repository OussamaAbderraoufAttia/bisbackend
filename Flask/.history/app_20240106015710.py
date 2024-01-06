from flask import Flask, jsonify
import cv2
import numpy as np
from tensorflow.keras.models import load_model

app = Flask(__name__)

ImgHeight = 224  # Set your desired image height
ImgWidth = 224  # Set your desired image width

# Load the model (you'll need to define or load your model here)
model = load_model("model-brain-mri.h5")  # Replace with loading your model

@app.route('/predict_image', methods=['GET'])
def predict_image():
    # Replace this path with your image file path
    image_path = 'TCGA_CS_4941_19960909_9.tif'

    # Read the image
    image = cv2.imread(image_path)

    # Resize the image
    resized_image = cv2.resize(image, (ImgHeight, ImgWidth))

    # Preprocess the image for prediction (normalize if required)
    input_image = resized_image.astype(np.float32) / 255.0  # Normalization (assuming 0-255 scale)
    input_image = np.expand_dims(input_image, axis=0)  # Add batch dimension

    # Perform prediction
    prediction = model.predict(input_image)

    # Get the predicted class or value (modify based on your model)
    predicted_class = np.argmax(prediction)  # Example for classification, modify based on your model output

    # Return the prediction result
    return jsonify({'result': f'Predicted class: {predicted_class}'})  # Modify the response as needed
    
    # Save the visualization as a TIFF image using OpenCV
    cv2.imwrite(save_path, cv2.cvtColor(np.squeeze(binary_prediction) * 255, cv2.COLOR_GRAY2BGR))
    
if __name__ == '__main__':
    app.run(port=3000, debug=True)
