import Joi from 'joi-browser';

/*
Phone number is not required.
Regex will match empty string or properly formatted phone number.
Improperly formatted phone number will throw error.
*/

export default {
  firstName: {
    validation: Joi.string().required(),
    errorMsg: "First name is required"
  },
  lastName: {
    validation: Joi.string().required(),
    errorMsg: "Last name is required"
  },
  email: {
    validation: Joi.string().email(),
    errorMsg: "Valid email is required"
  },
  school: {
    validation: Joi.string().required(),
    errorMsg: "School is required"
  },
  phone: {
    validation: Joi.string().allow('').regex(/^(?:[0-9]){3}(?:-)?(?:[0-9]){3}(?:-)?(?:[0-9]){4}$/),
    errorMsg: "Please enter a valid phone number (10 digits)."
  }
}