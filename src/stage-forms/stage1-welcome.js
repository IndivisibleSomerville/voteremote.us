import React from 'react';

const WelcomeForm = (props) => {
    <Form>
        <Form.Field>
            <label>First Name</label>
            <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={props.state[key] | ""}
                onChange={props.onChange}
            />
            <div className={props.state.errorMsgs[key] === null ? "" : "ui red message"}><span>{props.state.errorMsgs[key]}</span></div>
        </Form.Field>
    </Form>
};

export default WelcomeForm;