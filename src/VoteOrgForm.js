import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { iframeResizer } from 'iframe-resizer';

class VoteOrgForm extends Component {
  componentDidMount() {
    iframeResizer({ log: true, checkOrigin: false }, this.refs.voteorg)
  }

  render() {
    return (
      <iframe
        ref="voteorg"
        title="Vote.org"
        src={`https://${this.props.kind}.vote.org/?partner=194963`}
        width="100%"
        marginheight="0"
        frameborder="0"
        id="frame1"
        scrollable="no"></iframe>
    );
  }
}

export default VoteOrgForm;
