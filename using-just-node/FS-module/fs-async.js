const fs = require("fs").promises;
const path = require("path");

//! Define a folder and file path

const folderPath = path.join(__dirname, "ProductsFolder");
const filePath = path.join(folderPath, "Products.txt");

//! 1. Create a diretory if it doesn't exists
async function createFolder() {
  try {
    await fs.access(folderPath);
  } catch (error) {
    await fs.mkdir(folderPath);
    console.log("folder Created!");
  }
}

// createFolder();

async function writeFile() {
  try {
    await fs.writeFile(filePath, "This is for products lists.\n");
    console.log("File created");
  } catch (error) {
    console.log(error);
  }
}

// writeFile();

async function appendToFile() {
  try {
    await fs.appendFile(filePath, "Goods Sold.\n");
    console.log("File created");
  } catch (error) {
    console.log(error);
  }
}

// appendToFile();

async function readFile() {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    console.log(content);
  } catch (error) {
    console.log(error);
  }
}

// readFile();

async function deleteFile() {
  try {
    const content = await fs.unlink(filePath);
    console.log("File removed");
  } catch (error) {
    console.log(error);
  }
}

deleteFile();
