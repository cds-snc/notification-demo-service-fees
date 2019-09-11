const Schema = {
  firstname: {
    isLength: {
      errorMessage: "help.firstname.length",
      options: { min: 3, max: 200 }
    }
  }
};

module.exports = {
  Schema
};
