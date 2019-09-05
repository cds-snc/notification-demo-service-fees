const Schema = {
  firstname: {
    isLength: {
      errorMessage: "steve.catname.length",
      options: { min: 3, max: 200 }
    }
  }
};

module.exports = {
  Schema
};
