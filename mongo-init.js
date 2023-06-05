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
    published: true,
    authorId: "SAF3w4DFS34wq34DFSDRerRT"
  }
]);

db.users.insertMany([
  {
    username: "eddmma",
    email: "asd@gmail.com",
    password: "SAFFS45345dfs45SDFSDF",
    name: "Adam",
    phoneNumber: "340000000",
    roles: ["RAfseFSER454DFSDRer44Y"]
  }
]);

db.userRoles.insertMany([
  {
    name: "user",
  },
  {
    name: "admin"
  },
  {
    name: "moderator"
  }
]);

db.chats.insertMany([
  {
    name: "Chat"
  }
])

db.messages.insertMany([
  {
    content: "Hello",
    date: ISODate("2023-02-10T12:33:34Z"),
    authorId: "SAF3w4DFS34wq34DFSDRerRT",
    chatId: "SAF3w4DFS34wq34DFSDRerRT"
  }
])
