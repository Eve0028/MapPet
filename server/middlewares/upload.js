const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const dbConfig = require("../config/db.config");

const storage = new GridFsStorage({
  url: dbConfig.url,
  options: {useNewUrlParser: true, useUnifiedTopology: true},
  file: (req, file) => {
    const match = ["image/jpeg", "image/jpg", "image/png"];

    if (match.indexOf(file.mimetype) === -1) {
      return `${Date.now()}-mappet-${file.originalname}`;
    }

    return {
      bucketName: dbConfig.imgBucket,
      filename: `${Date.now()}-mappet-${file.originalname}`
    };
  }
});

const uploadFiles = multer({storage: storage}).single("file");
const uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;