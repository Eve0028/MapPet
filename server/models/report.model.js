module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      publisherName: {type: String, required: true},
      ownerName: {type: String, required: false},
      phoneNumber: {type: String, required: false},
      emailAddress: {type: String, required: true},
      imageUrl: {type: String, required: false},
      petType: {type: String, required: true},
      petName: {type: String, required: false},
      microchip: {type: String, required: false},
      registrationNumber: {type: String, required: false},
      reportType: {type: String, required: true},
      lastSeen: {type: String, required: false},
      timeOfReport: {type: Date, required: true},
      timeOfLastSeen: {type: Date, required: false},
      details: {type: String, required: false},
      published: {type: Boolean, required: true, default: true},
    },
    { collection: 'reports' },
    {timestamps: true}
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("Report", schema);
};