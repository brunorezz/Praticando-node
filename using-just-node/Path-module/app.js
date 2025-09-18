const path = require("path");

// Get file name
console.log(path.basename("/users/files/test.txt"));

// Get dir name
console.log(path.dirname("/users/files/test.txt"));

// Get file extension
console.log(path.extname("/users/files/test.txt"));

// Join paths
console.log(path.join("/users", "files", "test.txt"));

// Get absolute
console.log(path.resolve("test.txt"));

