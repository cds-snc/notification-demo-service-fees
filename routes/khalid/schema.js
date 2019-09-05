const Schema = {
  firstname: {
    isLength: {
      errorMessage: "khalid.title.length",
      options: { min: 3, max: 200 }
    }
  }
};

module.exports = {
  Schema
};
