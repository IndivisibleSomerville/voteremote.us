import React, { Component } from 'react';
import './App.css';
import { iframeResizer } from 'iframe-resizer';

class VoteOrgForm extends Component {
  componentDidMount() {
    iframeResizer({ log: true, checkOrigin: false }, this.refs.voteorg)
  }

  render() {

    const campaignCode = this.props.campaign
      ? `&campaign=${this.props.campaign}`
      : ""

    return (
      <iframe
        ref="voteorg"
        title="Vote.org"
        src={`https://${this.props.kind}.vote.org/?partner=194963${campaignCode}`}
        width="100%"
        marginheight="0"
        frameborder="0"
        id="frame1"
        scrollable="no"></iframe>
    );
  }
}

export default VoteOrgForm;
