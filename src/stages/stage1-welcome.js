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
    validation: Joi.string().min(1).max(30)
  }
}
