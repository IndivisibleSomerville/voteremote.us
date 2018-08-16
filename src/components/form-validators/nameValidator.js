import Joi from 'joi-browser';

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
    validation: Joi.string().regex(/^([0-9]){3}(-)?([0-9]){3}(-)?([0-9]){4}$/),
    errorMsg: "Valid phone number (10 digits) is required"
  }
}