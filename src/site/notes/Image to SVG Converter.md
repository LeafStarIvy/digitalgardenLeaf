---
{"dg-publish":true,"permalink":"/image-to-svg-converter/","noteIcon":"","created":"2025-04-21T13:40:25.463+02:00","updated":"2025-04-21T16:30:53.233+02:00"}
---


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image to SVG Converter</title>
    <style>
        :root {
            --primary: #7b68ee;
            --primary-dark: #5a4ec9;
            --bg-color: #f8f9fa;
            --card-bg: #ffffff;
            --text-color: #333333;
            --border-color: #e0e0e0;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --accent: #50c878;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: all 0.3s ease;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: var(--card-bg);
            border-radius: 12px;
            box-shadow: var(--shadow);
        }

        h1 {
            text-align: center;
            color: var(--primary);
            margin-bottom: 24px;
            font-weight: 700;
        }

        .upload-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 2px dashed var(--border-color);
            border-radius: 8px;
            padding: 40px 20px;
            text-align: center;
            margin-bottom: 24px;
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
        }

        .upload-container:hover {
            border-color: var(--primary);
            background-color: rgba(123, 104, 238, 0.05);
        }

        .upload-container input {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0;
            cursor: pointer;
        }

        .upload-icon {
            font-size: 48px;
            color: var(--primary);
            margin-bottom: 16px;
        }

        .settings {
            margin-bottom: 24px;
            padding: 16px;
            border-radius: 8px;
            background-color: rgba(123, 104, 238, 0.05);
            border: 1px solid var(--border-color);
        }

        .settings-title {
            font-weight: 600;
            margin-bottom: 12px;
            color: var(--primary);
        }

        .settings-group {
            margin-bottom: 16px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
        }

        input[type="range"] {
            width: 100%;
            margin: 8px 0;
            -webkit-appearance: none;
            appearance: none;
            height: 6px;
            background: #d7d7d7;
            outline: none;
            border-radius: 3px;
        }

        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            background: var(--primary);
            border-radius: 50%;
            cursor: pointer;
        }

        input[type="checkbox"] {
            margin-right: 8px;
        }

        .value-display {
            display: inline-block;
            margin-left: 8px;
            font-weight: 500;
            min-width: 40px;
            text-align: center;
        }

        .button {
            display: block;
            width: 100%;
            padding: 12px;
            background-color: var(--primary);
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            margin-bottom: 16px;
        }

        .button:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .button:active {
            transform: translateY(0);
            box-shadow: none;
        }

        .button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        .preview-container {
            display: none;
            margin-top: 24px;
            padding: 16px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
            background-color: white;
            overflow: hidden;
        }

        .preview-heading {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

        .preview-title {
            font-weight: 600;
            color: var(--primary);
        }

        .preview-controls a {
            margin-left: 16px;
            color: var(--primary);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease;
        }

        .preview-controls a:hover {
            color: var(--primary-dark);
            text-decoration: underline;
        }

        .preview-image {
            max-width: 100%;
            max-height: 400px;
            display: block;
            margin: 0 auto;
            border: 1px solid var(--border-color);
            border-radius: 4px;
        }

        .file-info {
            margin-top: 16px;
            padding: 12px;
            border-radius: 6px;
            background-color: rgba(123, 104, 238, 0.05);
            font-size: 14px;
        }

        .info-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 4px;
        }

        .info-label {
            font-weight: 500;
        }

        .success-message {
            display: none;
            margin-top: 16px;
            padding: 12px;
            border-radius: 6px;
            background-color: rgba(80, 200, 120, 0.2);
            color: #2c7a44;
            text-align: center;
            font-weight: 500;
        }

        .spinner {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(123, 104, 238, 0.3);
            border-radius: 50%;
            border-top-color: var(--primary);
            animation: spin 1s ease-in-out infinite;
            margin-right: 8px;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .loading {
            display: none;
            align-items: center;
            justify-content: center;
            margin-top: 16px;
            color: var(--primary);
            font-weight: 500;
        }

        .error-message {
            display: none;
            margin-top: 16px;
            padding: 12px;
            border-radius: 6px;
            background-color: rgba(255, 76, 76, 0.1);
            color: #e03131;
            text-align: center;
            font-weight: 500;
        }

        @media (max-width: 600px) {
            .container {
                padding: 16px;
            }
            .upload-container {
                padding: 20px 10px;
            }
            .button {
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Image to SVG Converter</h1>
        
        <div class="upload-container" id="upload-container">
            <div class="upload-icon">⬆️</div>
            <p>Click or drag & drop a PNG or JPG image</p>
            <input type="file" id="imageInput" accept=".jpg,.jpeg,.png" />
        </div>
        
        <div class="settings">
            <div class="settings-title">Conversion Settings</div>
            
            <div class="settings-group">
                <label for="colorThreshold">Color Threshold <span class="value-display" id="colorThresholdValue">128</span></label>
                <input type="range" id="colorThreshold" min="0" max="255" value="128">
            </div>
            
            <div class="settings-group">
                <label for="smoothing">Path Smoothing <span class="value-display" id="smoothingValue">1</span></label>
                <input type="range" id="smoothing" min="0" max="5" step="0.1" value="1">
            </div>
            
            <div class="settings-group">
                <label for="fillColor">Fill Color</label>
                <input type="color" id="fillColor" value="#000000">
            </div>
            
            <div class="settings-group">
                <label>
                    <input type="checkbox" id="reduceColors" checked>
                    Reduce Colors (better for simple images)
                </label>
            </div>
        </div>
        
        <button id="convertButton" class="button" disabled>Convert to SVG</button>
        
        <div class="loading" id="loading">
            <div class="spinner"></div>
            <span>Converting image...</span>
        </div>
        
        <div class="error-message" id="errorMessage"></div>
        
        <div class="success-message" id="successMessage">
            SVG created successfully!
        </div>
        
        <div class="preview-container" id="previewContainer">
            <div class="preview-heading">
                <div class="preview-title">SVG Preview</div>
                <div class="preview-controls">
                    <a href="#" id="downloadLink" download="converted.svg">Download SVG</a>
                </div>
            </div>
            
            <div id="svgPreview"></div>
            
            <div class="file-info">
                <div class="info-row">
                    <span class="info-label">Original Size:</span>
                    <span id="originalSize">-</span>
                </div>
                <div class="info-row">
                    <span class="info-label">SVG Size:</span>
                    <span id="svgSize">-</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Compression:</span>
                    <span id="compression">-</span>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/potrace/1.16.0/potrace.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const imageInput = document.getElementById('imageInput');
            const convertButton = document.getElementById('convertButton');
            const uploadContainer = document.getElementById('upload-container');
            const colorThreshold = document.getElementById('colorThreshold');
            const colorThresholdValue = document.getElementById('colorThresholdValue');
            const smoothing = document.getElementById('smoothing');
            const smoothingValue = document.getElementById('smoothingValue');
            const fillColor = document.getElementById('fillColor');
            const reduceColors = document.getElementById('reduceColors');
            const previewContainer = document.getElementById('previewContainer');
            const svgPreview = document.getElementById('svgPreview');
            const downloadLink = document.getElementById('downloadLink');
            const originalSize = document.getElementById('originalSize');
            const svgSize = document.getElementById('svgSize');
            const compression = document.getElementById('compression');
            const loading = document.getElementById('loading');
            const errorMessage = document.getElementById('errorMessage');
            const successMessage = document.getElementById('successMessage');
            
            let originalFile = null;
            let imageLoaded = false;
            
            // Update range input displays
            colorThreshold.addEventListener('input', () => {
                colorThresholdValue.textContent = colorThreshold.value;
            });
            
            smoothing.addEventListener('input', () => {
                smoothingValue.textContent = smoothing.value;
            });
            
            // Handle file selection
            imageInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;
                
                const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
                if (!validTypes.includes(file.type)) {
                    showError('Please select a JPG or PNG file.');
                    return;
                }
                
                originalFile = file;
                originalSize.textContent = formatFileSize(file.size);
                convertButton.disabled = false;
                imageLoaded = true;
                uploadContainer.style.borderColor = '#50c878';
                
                // Show filename in upload area
                const fileNameElement = document.createElement('p');
                fileNameElement.textContent = `Selected: ${file.name}`;
                fileNameElement.style.marginTop = '8px';
                fileNameElement.style.fontWeight = '500';
                
                // Remove any previous filename
                const previousFilename = uploadContainer.querySelector('p:not(:first-of-type)');
                if (previousFilename) {
                    uploadContainer.removeChild(previousFilename);
                }
                
                uploadContainer.appendChild(fileNameElement);
                
                hideError();
                hideSuccess();
            });
            
            // Handle drag and drop
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                uploadContainer.addEventListener(eventName, preventDefaults, false);
            });
            
            function preventDefaults(e) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            ['dragenter', 'dragover'].forEach(eventName => {
                uploadContainer.addEventListener(eventName, highlight, false);
            });
            
            ['dragleave', 'drop'].forEach(eventName => {
                uploadContainer.addEventListener(eventName, unhighlight, false);
            });
            
            function highlight() {
                uploadContainer.style.borderColor = var(--primary);
                uploadContainer.style.backgroundColor = 'rgba(123, 104, 238, 0.1)';
            }
            
            function unhighlight() {
                uploadContainer.style.borderColor = imageLoaded ? '#50c878' : var(--border-color);
                uploadContainer.style.backgroundColor = '';
            }
            
            uploadContainer.addEventListener('drop', handleDrop, false);
            
            function handleDrop(e) {
                const dt = e.dataTransfer;
                const file = dt.files[0];
                
                if (!file) return;
                
                const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
                if (!validTypes.includes(file.type)) {
                    showError('Please select a JPG or PNG file.');
                    return;
                }
                
                // Update the file input
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                imageInput.files = dataTransfer.files;
                
                // Trigger the change event
                const event = new Event('change', { bubbles: true });
                imageInput.dispatchEvent(event);
            }
            
            // Convert button click handler
            convertButton.addEventListener('click', () => {
                if (!originalFile) return;
                
                showLoading();
                hideError();
                hideSuccess();
                
                setTimeout(() => {
                    convertToSVG(originalFile);
                }, 100);
            });
            
            function convertToSVG(file) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    const img = new Image();
                    img.onload = function() {
                        try {
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');
                            
                            // Set canvas dimensions
                            canvas.width = img.width;
                            canvas.height = img.height;
                            
                            // Draw the image on canvas
                            ctx.drawImage(img, 0, 0);
                            
                            // Get image data
                            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                            
                            // Apply color reduction if checked
                            if (reduceColors.checked) {
                                applyThreshold(imageData.data, parseInt(colorThreshold.value));
                            }
                            
                            // Put processed image data back to canvas
                            ctx.putImageData(imageData, 0, 0);
                            
                            // Convert to SVG using Potrace
                            const darkMode = false; // For future dark mode support
                            const fill = fillColor.value;
                            const threshold = darkMode ? 255 - parseInt(colorThreshold.value) : parseInt(colorThreshold.value);
                            
                            // Configure Potrace
                            const parameters = {
                                turdSize: 2,
                                alphaMax: 1,
                                optCurve: true,
                                optTolerance: 0.2,
                                threshold: threshold,
                                blackOnWhite: true,
                                color: fill,
                                background: 'transparent',
                                turnPolicy: Potrace.TURNPOLICY_MINORITY,
                                turdSize: 5, // Minimum area of black pixel to be considered a feature
                                optCurve: true, // Whether to optimize curves
                                optTolerance: parseFloat(smoothing.value) // Curve smoothing
                            };
                            
                            // Trace the image
                            const potrace = new Potrace(parameters);
                            potrace.loadImageFromCanvas(canvas);
                            
                            // Process the image
                            potrace.process(() => {
                                // Get SVG string
                                const svgString = potrace.getSVG(1);
                                
                                // Display SVG
                                svgPreview.innerHTML = svgString;
                                
                                // Adjust the SVG for display
                                const svgElement = svgPreview.querySelector('svg');
                                svgElement.setAttribute('class', 'preview-image');
                                svgElement.setAttribute('width', '100%');
                                svgElement.setAttribute('height', 'auto');
                                
                                // Create download link
                                const svgBlob = new Blob([svgString], {type: 'image/svg+xml'});
                                const svgUrl = URL.createObjectURL(svgBlob);
                                downloadLink.href = svgUrl;
                                downloadLink.download = `${file.name.split('.')[0]}.svg`;
                                
                                // Calculate file sizes
                                const svgBytesSize = svgString.length;
                                svgSize.textContent = formatFileSize(svgBytesSize);
                                
                                // Calculate compression ratio
                                const compressionRatio = (file.size / svgBytesSize).toFixed(2);
                                compression.textContent = compressionRatio > 1 
                                    ? `${compressionRatio}× smaller` 
                                    : `${(1/compressionRatio).toFixed(2)}× larger`;
                                
                                // Show preview container
                                previewContainer.style.display = 'block';
                                showSuccess();
                                hideLoading();
                                
                                // Scroll to preview
                                previewContainer.scrollIntoView({ behavior: 'smooth' });
                            });
                        } catch (error) {
                            console.error('Error converting image:', error);
                            showError('Error converting image. Please try a different image or adjust settings.');
                            hideLoading();
                        }
                    };
                    
                    img.onerror = function() {
                        showError('Failed to load image. Please try a different file.');
                        hideLoading();
                    };
                    
                    img.src = e.target.result;
                };
                
                reader.onerror = function() {
                    showError('Failed to read file. Please try again.');
                    hideLoading();
                };
                
                reader.readAsDataURL(file);
            }
            
            // Apply threshold to image data (simple color reduction)
            function applyThreshold(data, threshold) {
                for (let i = 0; i < data.length; i += 4) {
                    // Calculate grayscale value using luminance formula
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];
                    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
                    
                    // Apply threshold
                    const value = luminance < threshold ? 0 : 255;
                    
                    // Set RGB to the value
                    data[i] = value;
                    data[i + 1] = value;
                    data[i + 2] = value;
                    // Keep alpha channel (i + 3) unchanged
                }
            }
            
            // Format file size with appropriate units
            function formatFileSize(bytes) {
                if (bytes < 1024) {
                    return bytes + ' B';
                } else if (bytes < 1024 * 1024) {
                    return (bytes / 1024).toFixed(2) + ' KB';
                } else {
                    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
                }
            }
            
            // Utility functions for UI feedback
            function showLoading() {
                loading.style.display = 'flex';
            }
            
            function hideLoading() {
                loading.style.display = 'none';
            }
            
            function showError(message) {
                errorMessage.textContent = message;
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
            }
            
            function hideError() {
                errorMessage.style.display = 'none';
            }
            
            function showSuccess() {
                successMessage.style.display = 'block';
            }
            
            function hideSuccess() {
                successMessage.style.display = 'none';
            }
        });
    </script>
</body>
</html>
