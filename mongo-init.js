db.createCollection('reports');

db.reports.insertMany([
  {
    publisherName: "publisherName_1",
    ownerName: "ownerName_1",
    phoneNumber: "phoneNumber_1",
    emailAddress: "emailAddress_1",
    imageUrl: "imageUrl_1",
    petType: "petType_1",
    petName: "petName_1",
    microchip: "microchip_1",
    registrationNumber: "registrationNumber_1",
    reportType: "reportType_1",
    lastSeen: "lastSeen_1",
    timeOfReport: ISODate("2023-02-10T12:33:34Z"),
    timeOfLastSeen: ISODate("2023-01-10T16:26:00Z"),
    details: "details_1",
    published: true
  }
]);
