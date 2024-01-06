from flask import Flask, request
import cv2
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras.models import load_model

app = Flask(__name__)

ImgHeight = 224  # Set your desired image height
ImgWidth = 224  # Set your desired image width

@app.route('/predict', methods=['GET'])
def predict_from_image():
    # Get the image path from the query parameters in the GET request
    image_path = request.args.get('image_path')

    # Check if the image_path is provided
    if not image_path:
        return "Error: Please provide the 'image_path' parameter in the request."

    # Load the model (you'll need to define or load your model here)
    model = load_model()  # Replace with loading your model

    # Define a save path for the result (modify this as needed)
    save_path = 'result.tif'

    # Call your prediction function
    predict_and_return_tif(image_path, model, save_path)

    return "Prediction completed and saved as result.tif"
def predict_and_return_tif(image_path, model, save_path):
    # Load the image
    image = cv2.imread(image_path)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # Convert to RGB if needed
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

    # Save the visualization as a TIFF image using OpenCV
    cv2.imwrite(save_path, cv2.cvtColor(np.squeeze(binary_prediction) * 255, cv2.COLOR_GRAY2BGR))


if __name__ == '__main__':
    app.run(port=3000, debug=True)
