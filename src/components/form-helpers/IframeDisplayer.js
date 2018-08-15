import React from 'react';
import IframeTopper from './IframeTopper';
import IframeBody from './IframeBody';

const IframeDisplayer = (props) => (
    <div>
        <IframeTopper 
            {...props}
        />
        <IframeBody 
            {...props}
        />
    </div>
);

export default IframeDisplayer;