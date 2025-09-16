const fs = require("fs");
const path = require("path");

//! Define a folder and file path

const folderPath = path.join(__dirname, "studentsFolder");
const filePath = path.join(folderPath, "studentList.txt");

//! Create a diretory if it doesn't exists

if (!fs.existsSync(folderPath)) {
  //! Create the folder
  fs.mkdirSync(folderPath);
  console.log("Folder created");
}
