import Joi from 'joi-browser';

export default {
  firstName: {
    placeholder: "First Name",
    label: "What is your first name?",
    validation: Joi.string().min(1).max(30)
  },
  lastName: {
    placeholder: "Last Name",
    label: "What is your last name?",
    validation: Joi.string().min(1).max(30)
  },
  email: {
    placeholder: "me@example.com",
    label: "What is your email address?",
    validation: Joi.string().email()
  },
  phone: {
    placeholder: "555-555-5555",
    label: "What is your phone number?",
    validation: Joi.string().regex(/^([0-9]){3}(-)?([0-9]){3}(-)?([0-9]){4}$/),
    errorMsg: "Not a valid phone number! Should be in xxx-xxx-xxxx format!"
  },
  birthMonth: {
    placeholder: "MM",
    label: "When is your birth month?",
    validation: Joi.string().regex(/^(0[1-9]|1[012])$/),
    errorMsg: "Birth month must be in MM format!"
  },
  birthDay: {
    placeholder: "DD",
    label: "When is your birth day?",
    validation: Joi.string().regex(/^(0[1-9]|[12][0-9]|3[01])$/),
    errorMsg: "Birth day must be in DD format!"
  },
  birthYear: {
    placeholder: "YYYY",
    label: "When is your birth year?",
    validation: Joi.string().regex(/^(19|20)\d\d$/),
    errorMsg: "Birth year must be in 19YY or 20YY format!"
  }
}
