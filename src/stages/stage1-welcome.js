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
  },
  birthMonth: {
    validation: Joi.string().regex(/^(0[1-9]|1[012])$/),
    errorMsg: "Birth month must be in MM format!"
  },
  birthDay: {
    validation: Joi.string().regex(/^(0[1-9]|[12][0-9]|3[01])$/),
    errorMsg: "Birth day must be in DD format!"
  },
  birthYear: {
    validation: Joi.string().regex(/^(19|20)\d\d$/),
    errorMsg: "Birth year must be in 19YY or 20YY format!"
  }
}
