const fs = require("fs");
const path = require("path");
const uploadFile = require("./uploader");

const testUpload = () => {
  const filePath = path.resolve(__dirname, "love_that_.gif");
  const fileStream = fs.createReadStream(filePath);
  const now = new Date();
  const fileName = `test-image-${now.toISOString()}.jpg`;
  uploadFile(fileStream, fileName)
    .then(response => {
      console.log(":)");
      console.log(response);
    })
    .catch(err => {
      console.log(":|");
      console.log(err);
    });
};

testUpload();
