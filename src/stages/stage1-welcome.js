import Joi from 'joi-browser';

export default {
  firstName: {
    validation: Joi.string().min(1).max(30)
  },
  lastName: {
    validation: Joi.string().min(1).max(30)
  },
  email: {
    validation: Joi.string().email()
  },
  school: {
    validation: Joi.string().min(1).max(30)
  },
  phone: {
    validation: Joi.string().regex(/^([0-9]){3}(-)?([0-9]){3}(-)?([0-9]){4}$/),
    errorMsg: "Not a valid phone number! Should be in xxx-xxx-xxxx format!"
  }
}
