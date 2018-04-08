import React, { Component } from 'react';
import './App.css';
import { iframeResizer } from 'iframe-resizer';

class VoteOrgForm extends Component {
  componentDidMount() {
    iframeResizer({ log: false, checkOrigin: false }, this.refs.voteorg);
    this.refs.voteorg.onload = () => {
      this.onFrameLoad(this.refs.voteorg.src);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  onFrameLoad(src) {
    console.log(src);
  }

  render() {

    const campaignCode = this.props.campaign
      ? `&campaign=${this.props.campaign}`
      : ""

    const url = `https://${this.props.kind}.vote.org/?partner=194963${campaignCode}`

    return (
      <iframe
        ref="voteorg"
        title="Vote.org"
        src={url}
        width="100%"
        marginHeight="0"
        frameBorder="0"
        scrollable="no" >
      </iframe>
    );
  }
}

export default VoteOrgForm;
