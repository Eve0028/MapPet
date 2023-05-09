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
  const { petName, lastSeen } = req.query;
  const filter = {}
  if (petName) {
    filter.petName = petName
  }
  if (lastSeen) {
    filter.lastSeen = lastSeen
  }

  Report.find(filter)
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
  const id = req.params.id;

  Report.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Report with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Report with id=" + id });
    });
};

// Update a Report by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Report.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Report with id=${id}. Maybe Report was not found!`
        });
      } else res.send({ message: "Report was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Report with id=" + id
      });
    });
};

// Delete a Report with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Report.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Report with id=${id}. Maybe Report was not found!`
        });
      } else {
        res.send({
          message: "Report was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Report with id=" + id
      });
    });
};

// Delete all Reports from the database.
exports.deleteAll = (req, res) => {
  Report.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Report were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all reports."
      });
    });
};

// Find all published Reports
exports.findAllPublished = (req, res) => {
  Report.find({ published: true })
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

// Find all Reports with pet name
exports.findByPetName = (req, res) => {
  const petNameT = req.query.petName;

  let query = {};
  let criteria = "petName";
  query[criteria] = petNameT;
  // console.log(query);

  Report.find(query)
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