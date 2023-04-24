module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      publisherName: String,
      ownerName: String,
      phoneNumber: String,
      emailAddress: String,
      imageUrl: String,
      petType: String,
      petName: String,
      microchip: String,
      registrationNumber: String,
      reportType: String,
      lastSeen: String,
      timeOfReport: Date,
      timeOfLastSeen: Date,
      details: String,
      published: Boolean
    },
    {timestamps: true}
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("report", schema);
};