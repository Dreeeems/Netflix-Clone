const fs = require("fs").promises;
const path = require("path");

const getUsers = async (folderPath) => {
  try {
    const files = await fs.readdir(folderPath);

    const folderContents = {
      folders: [],
      files: [],
    };

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const stats = await fs.stat(filePath);
      if (stats.isDirectory()) {
        folderContents.folders.push(file);
      } else {
        folderContents.files.push(file);
      }
    }

    console.log(folderContents);
    return folderContents;
  } catch (err) {
    console.error(err);
    throw new Error("Error reading folder contents.");
  }
};

module.exports = getUsers;
