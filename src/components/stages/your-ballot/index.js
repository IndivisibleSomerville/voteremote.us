import React, { Component } from 'react';
import Iframe from 'react-iframe';
import IframeTopper from './IframeTopper';

export default class YourBallot extends Component {
  constructor(props) {
    super(props);

    this.buildUrl = this.buildUrl.bind(this);
  }

  buildUrl() {
    let store = this.props.getStore();
    let form = this.props.form;
    let loc = store.districtSelector;
    let url = form.url + '/?';
    
    url += form.firstName + '=' + store.firstName.replace(/ /g, '%20');
    url += '&' + form.lastName + '=' + store.lastName.replace(/ /g, '%20');
    url += '&' + form.streetLine1 + '=' + store[loc + '[streetLine1]'].replace(/ /g, '%20') ;
    url += ' ' + store[loc + '[streetLine2]'].replace(/ /g, '%20');
    url += '&' + form.city + '=' + store[loc + '[city]'].replace(/ /g, '%20');
    url += '&' + form.state + '=' + store[loc + '[state]'].replace(/ /g, '%20');
    url += '&' + form.zipCode + '=' + store[loc + '[zipCode]'].replace(/ /g, '%20');
      // Month MM;
    url += '&' + form.birthMonth + '=' + parseInt(store.birthMonth, 10);
      // Day DD;
    url += '&' + form.birthDay + '=' + parseInt(store.birthDay, 10);
      // Year YYYY;
    url += '&' + form.birthYear + '=' + parseInt(store.birthYear, 10);
    url += '&' + form.phone + '=' + store.phone.replace(/ /g, '%20').replace(/-/g, '');
    url += '&' + form.email + '=' + store.email.replace(/ /g, '%20');
    return url;
  }

  handleNextClick = (step, subStep) => {
    this.props.changeSubStep(step, subStep);
    this.props.jumpToStep(4);
    console.log("Theoretically I'm in handleNextClick");
  }

  render() {
    if (this.props.formName !== 'Done') {
      return (
        <div>
          {<IframeTopper
            formName={this.props.formName}
            handleNextClick={this.handleNextClick}
          />}
          <Iframe
            className="iframe_before_load"
            url={this.buildUrl()}
            width="100%"
            height="50vh"
            id={this.props.form.id}
            display="initial"
            position="relative"
            allowFullScreen
          />
        </div>
      );
    }
    else {
      return (
        <div>
          <h1>All done!</h1>
          <p>You have completed the VoteRemote process. Give yourself a high five!</p>
        </div>
      )
    }

  }
}
