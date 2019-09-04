const isEmail = require("validator/lib/isEmail");
const isMobilePhone = require("validator/lib/isMobilePhone").default;

const Schema = {
  fullname: {
    isLength: {
      errorMessage: "errors.fullname.length",
      options: { min: 3, max: 200 }
    }
  },
  email: {
    custom: {
      options: (value, { req }) => {
        return isEmail(value);
      },
      errorMessage: "errors.email.valid"
    }
  },
  phone: {
    custom: {
      options: (value, { req }) => {
        return isMobilePhone(value);
      },
      errorMessage: "errors.phone.valid"
    }
  },
  passport_number: {
    isLength: {
      errorMessage: "errors.login.length",
      options: { min: 9, max: 9 }
    },
    isAlphanumeric: {
      errorMessage: "errors.login.alphanumeric"
    },
    customSanitizer: {
      options: value => {
        return value ? value.toUpperCase() : value;
      }
    }
  }
};

module.exports = {
  Schema
};
