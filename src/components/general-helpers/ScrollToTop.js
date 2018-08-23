// From https://reacttraining.com/react-router/web/guides/scroll-restoration
// Tells react-router to scroll to top of page when you visit a new page.

import React from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }
  
    render() {
      return this.props.children;
    }
  }
  
  export default withRouter(ScrollToTop);