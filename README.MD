# Multi-Form Data Parser

## Description
This project provides a simple API endpoint for uploading profile pictures using multi-form data. It utilizes Express.js for handling HTTP requests and Busboy for parsing multi-form data.

## Why?
GCP Cloud Functions have limitations regarding file uploads. Specifically, they do not support libraries like Multer for parsing multi-part forms directly. And since Node.js does not have inbuild libraries to support parsing multipart/form-data we use Busboy for fast and efficient parsing.

## Prerequisites
- Node.js installed
- Express.js library
- Busboy library

## Installation
1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running:
    ```
    npm install
    ```

## Usage
1. Run the project by executing:
    ```
    npm start
    ```
2. Send a POST request to the `/upload` endpoint with multi-form data containing a profile picture.
3. Upon successful upload, the API will respond with a JSON object containing a success message.

## API Endpoints

### 1. `/upload`
- **Method:** POST
- **Description:** Endpoint for uploading profile pictures.
- **Request Body:** Multi-form data containing a profile image file.
    - `profileImage`: File field containing the profile picture.
    - `uid`: Unique identifier for the user.
- **Response:**
    - Status Code: 200 OK
    - Body: JSON object with success message if upload is successful.
        ```json
        {
            "message": "image successfully uploaded"
        }
        ```
    - Status Code: 500 Internal Server Error
    - Body: JSON object with error message if an error occurs during upload.
        ```json
        {
            "message": "internal server error"
        }
        ```

## Code Structure
- **`index.ts`**: Main entry point of the application. Defines the Express app and the `/upload` endpoint.
- **`service/parserService.ts`**: Contains the `ParserService` class responsible for handling file uploads and other related operations.
    - `uploadProfilePicture`: Method for uploading profile pictures.
    - `getProfilePictureUrl`: Method for retrieving profile picture URLs (not implemented).

## Notes
- This project is a basic implementation for handling multi-form data uploads. Ensure to replace placeholder comments with actual implementations for storage and file handling logic.
- Additional error handling and validation can be added based on specific requirements.

## Made by
- Devansh Soni
	### Links
	- 🐥[Twitter/X](https://twitter.com/dvanshdev)
