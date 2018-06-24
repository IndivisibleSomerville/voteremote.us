import Joi from 'joi';

export default {
  streetAddressLine1: {
    placeholder: "Street address, P.O. box, c/o",
    label: "What is your street address?",
    validation: Joi.string().min(1).max(100)
  },
  streetAddressLine2: {
    placeholder: "Apartment, suite, unit, building, floor, etc.",
    label: "",
    validation: Joi.string().min(1).max(100)
  },
  city: {
    placeholder: "Boston",
    label: "City:",
    validation: Joi.string().min(1).max(30)
  },
  state: {
    placeholder: "MA",
    label: "State:",
    validation: Joi.string().min(1).max(30)
  },
  zipCode: {
    placeholder: "02111",
    label: "Zip Code:",
    validation: Joi.string().min(5).max(9)
  }
}
