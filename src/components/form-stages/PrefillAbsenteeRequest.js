import React from 'react';
import prefillAbsenteeRequestFields from '../iframe-templates/absentee';
import IframeDisplayer from '../form-helpers/IframeDisplayer';

const PrefillAbsenteeRequest = (props) => (
    <IframeDisplayer
        form={prefillAbsenteeRequestFields}
        {...props}
    />
)

export default PrefillAbsenteeRequest;