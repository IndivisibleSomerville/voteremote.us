import React, { Component } from 'react';
import Iframe from 'react-iframe';

export default class VoteVerify extends Component {
  constructor(props) {
    super(props);

    this.buildUrl = this.buildUrl.bind(this);
  }

  buildUrl() {
    let store = this.props.getStore();
    let form = this.props.form;
    let url = form.url
      + '/?'
      + form.firstName + '=' + store.firstName.replace(/ /g, '%20')
      + '&' + form.lastName + '=' + store.lastName.replace(/ /g, '%20')
      + '&' + form.streetAddressLine1 + '=' + store.streetAddressLine1.replace(/ /g, '%20') + ' ' + store.streetAddressLine2.replace(/ /g, '%20')
      + '&' + form.city + '=' + store.city.replace(/ /g, '%20')
      + '&' + form.state + '=' + store.state.replace(/ /g, '%20')
      + '&' + form.zipCode + '=' + store.zipCode.replace(/ /g, '%20')
      // Month MM
      + '&' + form.birthDate[0] + '=' + parseInt(store.birthDate.slice(0, 2), 10)
      // Day DD
      + '&' + form.birthDate[1] + '=' + parseInt(store.birthDate.slice(3, 5), 10)
      // Year YYYY
      + '&' + form.birthDate[2] + '=' + parseInt(store.birthDate.slice(6, 11), 10)
      + '&' + form.phone + '=' + store.phone.replace(/ /g, '%20').replace(/-/g, '')
      + '&' + form.email + '=' + store.email.replace(/ /g, '%20')

    return url;
  }

  render() {
    return (
      <Iframe
        url={this.buildUrl()}
        width="100%"
        height="1200px"
        id={this.props.form.id}
        display="initial"
        position="relative"
        allowFullScreen
      />
    );
  }
}
