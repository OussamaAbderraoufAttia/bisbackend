from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

import cv2
import numpy as np
from tensorflow.keras.models import load_model


app = Flask(__name__)
CORS(app, resources={r"/predict_image": {"origins": "*"}})  # Set CORS for specific route


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
    return save_path

def detect_tumor_color(image_path, color_threshold):
    # Load the image
    img = cv2.imread(image_path)

    # Define the lower and upper threshold for white color (RGB format)
    lower_white = np.array([200, 200, 200], dtype=np.uint8)
    upper_white = np.array([255, 255, 255], dtype=np.uint8)

    # Create a mask to identify pixels within the white color range
    mask = cv2.inRange(img, lower_white, upper_white)

    # Calculate the proportion of white-colored pixels
    proportion_white_pixels = np.sum(mask == 255) / (img.shape[0] * img.shape[1])

    # Compare the proportion with the color threshold
    if proportion_white_pixels > color_threshold:
        return "Tumor Detected"
    else:
        return "No Tumor"


def calculate_tumor_size(image_path):
    # Load the segmented tumor image
    tumor_image = cv2.imread(image_path)

    # Convert the image to grayscale
    gray_image = cv2.cvtColor(tumor_image, cv2.COLOR_BGR2GRAY)

    # Apply thresholding to create a binary mask of the tumor
    _, binary_mask = cv2.threshold(gray_image, 1, 255, cv2.THRESH_BINARY)

    # Find contours of the tumor
    contours, _ = cv2.findContours(binary_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Calculate the area of the contours (tumor size)
    tumor_area = cv2.contourArea(contours[0]) if contours else 0

    return tumor_area

def analyze_tumor_shape(image_path):
    # Load the segmented tumor image
    tumor_image = cv2.imread(image_path)

    # Convert the image to grayscale
    gray_image = cv2.cvtColor(tumor_image, cv2.COLOR_BGR2GRAY)

    # Apply thresholding to create a binary mask of the tumor
    _, binary_mask = cv2.threshold(gray_image, 1, 255, cv2.THRESH_BINARY)

    # Find contours of the tumor
    contours, _ = cv2.findContours(binary_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Calculate the area of the contours (tumor size)
    tumor_area = cv2.contourArea(contours[0]) if contours else 0

    # Calculate the perimeter of the tumor
    tumor_perimeter = cv2.arcLength(contours[0], True) if contours else 0

    # Calculate the solidity (ratio of contour area to convex hull area)
    hull = cv2.convexHull(contours[0])
    hull_area = cv2.contourArea(hull)
    solidity = float(tumor_area) / hull_area if hull_area > 0 else 0

    # Calculate the circularity
    circularity = 0
    if contours:
        area = cv2.contourArea(contours[0])
        if area > 0:
            perimeter = cv2.arcLength(contours[0], True)
            circularity = (4 * np.pi * area) / (perimeter * perimeter)

    return {
        'tumor_area': tumor_area,
        'tumor_perimeter': tumor_perimeter,
        'solidity': solidity,
        'circularity': circularity
    }


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Check if an image file is included in the request
        if 'image' not in request.files:
            return jsonify({'error': 'No image part in the request'})

        image_file = request.files['image']
        save_path = "path_to_save_result.tif"

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
    save_path = "../Client/src/assets/results.tif"
    saved_image_path = predict_and_return_tif(image_file, save_path)
    color_threshold = 0.00001  
    result = detect_tumor_color(save_path, color_threshold)
    size = calculate_tumor_size(save_path)
    shape_properties = analyze_tumor_shape(save_path)
    
    response = {
        'message': 'Prediction completed and saved as TIFF image',
        'image_path': saved_image_path,
        'result': result,
        'size': size,  # Assuming 'size' is a variable holding the tumor size
        'shape_properties': shape_properties  # Adding the shape properties here
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(port=3000, debug=True)
