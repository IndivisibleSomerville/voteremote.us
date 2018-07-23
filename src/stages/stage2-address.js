import Joi from 'joi-browser';

export default {
  streetAddressLine1: {
    placeholder: "Street address, P.O. box, c/o",
    label: "What is your street address?",
    validation: Joi.string().min(1).max(100)
  },
  streetAddressLine2: {
    placeholder: "Apartment, suite, unit, building, floor, etc.",
    label: "",
    validation: Joi.string().min(0).max(50).valid('').optional(),
    errorMsg: "Address entry is too long!"
  },
  city: {
    placeholder: "Boston",
    label: "City:",
    validation: Joi.string().min(1).max(30)
  },
  state: {
    placeholder: "MA",
    label: "State:",
    validation: Joi.string().regex(/^[A-Z]{2}$/),
    errorMsg: "State must be capitalized, and in a two letter abbreviated format!"
  },
  zipCode: {
    placeholder: "02111",
    label: "Zip Code:",
    validation: Joi.string().regex(/^\d{5}$/),
    errorMsg: "Zip code must be in 5 digit format!"
  }
}
