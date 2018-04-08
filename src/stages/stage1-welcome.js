import React, { Component } from 'react';
import { Input, Form } from 'semantic-ui-react'
import StageForm from '../components/StageForm'
import Joi from 'joi'

export default {
  firstName: {
    placeholder: "First Name",
    label: "What is your first name?"
  },
  lastName: {
    placeholder: "Last Name",
    label: "What is your last name?"
  },
  email: {
    placeholder: "me@example.com",
    label: "What is your email address?",
    validation: Joi.string().email()
  },
  phone: {
    placeholder: "555-555-5555",
    label: "What is your phone number?"
  }
}

