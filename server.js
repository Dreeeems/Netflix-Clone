const express = require("express");
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
const cors = require("cors");

const getVideosData = require("./fct/videos");
const getUsers = require("./fct/users");
const createUser = require("./fct/createUser");
dotenv.config();

let folderPath = process.env.FOLDER_PATH;
let video = path.join("./video");
let app = express();

app.use(cors());

app.get("/folder-contents", async (req, res) => {
  try {
    const folderContents = await getUsers(folderPath);
    res.json(folderContents);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error reading folder contents.");
  }
});

app.get("/create/:name", (req, res) => {
  console.log(req.params.name);
  const result = createUser(folderPath, req.params.name);
  res.json(result);
});

app.get("/video/:folder/:type/:name", (req, res) => {
  const result =
    req.params.folder + "/" + req.params.type + "/" + req.params.name;
  res.json(result);
});

app.get("/video/:folder", async (req, res) => {
  const videosFolderPath = folderPath + "/" + req.params.folder;
  const videosData = await getVideosData(videosFolderPath);
  res.json(videosData);
});

app.get("/videos/:folder/:type/:name", (req, res) => {
  const { folder, type, name } = req.params;
  const filePath = `${folderPath}/${folder}/${type}/${name}`;

  // check if video exists
  if (fs.existsSync(filePath)) {
    const contentType = getContentType(path.extname(filePath));

    res.setHeader("Content-Type", contentType);

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } else {
    res.status(404).send("Video not found");
  }
});

function getContentType(fileExtension) {
  switch (fileExtension) {
    case ".mp4":
      return "video/mp4";
    case ".avi":
      return "video/x-msvideo";
    default:
      return "video/mp4";
  }
}

app.listen(3000, () => {
  console.log("listening on port 3000......");
});
