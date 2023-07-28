# Netflix Clone Express Application - Server

<div align="center">
  <!-- Add some cool Netflix-like banner or logo here -->
  <img src="Dreeeems.png" alt="Dreeeems  Logo" width="300" height="150" />
</div>

## 🚀 Introduction

Welcome to the Netflix Clone Express Application - Server! This server is a part of the Netflix Clone application that allows users to access and stream videos stored in specific folders. The server is built using [Express](https://expressjs.com/), a fast and minimalist web framework for Node.js.

## 📂 Folder Structure

Here's an overview of the folder structure of the Express application:

├── video/
├── fct/
│ ├── users.js
│ ├── createUser.js
│ └── videos.js
├── .env
├── index.js
├── package.json
└── README.md

## 📝 Dependencies

The server uses the following dependencies:

- `express`: Web framework for building the server.
- `path`: Provides utilities for working with file and directory paths.
- `fs`: File system module for file operations.
- `dotenv`: Loads environment variables from a `.env` file.
- `cors`: Middleware to enable Cross-Origin Resource Sharing.

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/netflix-clone-server.git
   cd netflix-clone-server

   ```

2. Install the dependencies :
   npm install
3. Create a .env file in the root directory and set the following environment variable:
   FOLDER_PATH=/your/video/folder/path
   TMBD=YOUR_TMDB_API_KEY

## 🏃 Getting Started

To run the Express server, use the following command:
npm start

## 🛠️ Endpoints

    GET /folder-contents
    Get the contents of the video folder.

    GET /create/:name
    Create a new user folder with the given name.

    GET /video/:folder
    Get the details of videos within a specific folder.

    GET /videos/:folder/:type/:name
    Stream and serve the video with the specified folder, type, and name.

## 🎥 Video Streaming

    The server supports video streaming for .mp4 and .avi formats. It utilizes the fs module to read video files and streams them to clients using the appropriate Content-Type.

## 📝 Note

    Please ensure that you have provided the correct path to the video folder in the .env file. Also, make sure to replace YOUR_TMDB_API_KEY with your actual TMDB API key to enable movie data retrieval.

    Feel free to explore and enhance the Netflix Clone Express Application - Server as per your requirements.

    Happy coding! 🎉
