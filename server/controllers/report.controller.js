const db = require("../models");
const Report = db.reports;

// Create and Save a new Report
exports.create = (req, res) => {
  // Validate request
  if (!req.body.publisherName
    || !req.body.emailAddress
    || !req.body.petType
    || !req.body.reportType
    || !req.body.published) {
    res.status(400).send({message: "Content can not be empty!"});
    return;
  }

  // Create a Report
  const report = new Report({
    publisherName: req.body.publisherName,
    ownerName: req.body.ownerName,
    phoneNumber: req.body.phoneNumber,
    emailAddress: req.body.emailAddress,
    imageUrl: req.body.imageUrl,
    petType: req.body.petType,
    petName: req.body.petName,
    microchip: req.body.microchip,
    registrationNumber: req.body.registrationNumber,
    reportType: req.body.reportType,
    lastSeen: req.body.lastSeen,
    timeOfReport: new Date(),
    timeOfLastSeen: req.body.timeOfLastSeen,
    details: req.body.details,
    published: req.body.published
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
  const petName = req.query.petName;
  const condition = petName ? {title: {$regex: new RegExp(petName), $options: "i"}} : {};

  Report.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reports."
      });
    });
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