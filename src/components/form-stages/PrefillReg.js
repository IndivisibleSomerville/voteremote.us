import React from 'react';
import prefillRegFields from '../iframe-templates/register';
import IframeDisplayer from '../form-helpers/IframeDisplayer';

const PrefillReg = (props) => (
    <IframeDisplayer
        form={prefillRegFields}
        {...props}
    />
)

export default PrefillReg;