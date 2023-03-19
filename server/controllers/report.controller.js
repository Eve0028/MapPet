const db = require("../models");
const Report = db.reports;

// Create and Save a new Report
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Report
  const report = new Report({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save Report in the database
  report
    .save(report)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Report."
      });
    });
};

// Retrieve all Reports from the database.
exports.findAll = (req, res) => {

};

// Find a single Report with an id
exports.findOne = (req, res) => {

};

// Update a Report by the id in the request
exports.update = (req, res) => {

};

// Delete a Report with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Reports from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Reports
exports.findAllPublished = (req, res) => {

};