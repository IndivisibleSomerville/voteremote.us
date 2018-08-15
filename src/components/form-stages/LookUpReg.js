import React from 'react';
import lookupRegFields from '../iframe-templates/verify';
import IframeDisplayer from '../form-helpers/IframeDisplayer';

const LookUpReg = (props) => (
    <IframeDisplayer
        form={lookupRegFields}
        {...props}
    />
)

export default LookUpReg;