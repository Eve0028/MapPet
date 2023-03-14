module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      //TODO
      // Add all attributes
      title: String,
      description: String,
      published: Boolean
    },
    {timestamps: true}
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Report = mongoose.model("report", schema);
  return Report;
};