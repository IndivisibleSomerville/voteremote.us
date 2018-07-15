export default {
  url: 'https://absentee.vote.org',
  id: 'vote-absentee-iframe',
  firstName: 'user[first_name]',
  lastName: 'user[last_name]',
  streetAddressLine1: 'user[given_street_address]',
  streetAddressLine2: 'user[unit_number]',
  city: 'user[city]',
  state: 'user[state]',
  zipCode: 'user[zip_5]',
  email: 'user[email]',
  phone: 'user[digits]',
  birthDate: ['user[date_of_birth_month]', 'user[date_of_birth_day]', 'user[date_of_birth_year]']
};
