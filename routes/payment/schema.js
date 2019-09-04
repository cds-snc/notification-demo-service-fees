const Schema = {
  card_type: {
    isIn: {
      errorMessage: "errors.card_type.valid",
      options: [["Visa", "MasterCard"]]
    }
  },
  expiry: {
    isLength: {
      errorMessage: "errors.expiry.length",
      options: { min: 5, max: 5 }
    }
  },
  ccv: {
    isLength: {
      errorMessage: "errors.ccv.length",
      options: { min: 3, max: 3 }
    }
  }
};

module.exports = {
  Schema
};
