import Joi from 'joi-browser';

export default {
  'homeAddress_streetLine1': {
    validation: Joi.string().required(),
    errorMsg: "Home address is required"
  },
  'homeAddress_city': {
    validation: Joi.string().required(),
    errorMsg: "City is required"
  },
  'homeAddress_state': {
    validation: Joi.string().required(),
    errorMsg: "State is required"
  },
  'homeAddress_zipCode': {
    placeholder: "02111",
    label: "Zip Code:",
    validation: Joi.string().regex(/^\d{5}$/),
    errorMsg: "Zip code must be in 5 digit format"
  },
  'schoolAddress_streetLine1': {
    validation: Joi.string().required(),
    errorMsg: "School address is required"
  },
  'schoolAddress_city': {
    validation: Joi.string().required(),
    errorMsg: "City is required"
  },
  'schoolAddress_state': {
    validation: Joi.string().required(),
    errorMsg: "State is required"
  },
  'schoolAddress_zipCode': {
    placeholder: "02111",
    label: "Zip Code:",
    validation: Joi.string().regex(/^\d{5}$/),
    errorMsg: "Zip code must be in 5 digit format"
  }
}