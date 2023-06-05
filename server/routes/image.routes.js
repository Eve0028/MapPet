const uploadController = require("../controllers/upload.controller");

module.exports = function(app) {
  app.post("/api/reports/upload", uploadController.uploadFiles);
  app.get("/api/reports/files", uploadController.getListFiles);
  app.get("/api/reports/files/:name", uploadController.download);
};
