import React from 'react';
import { Input, Form } from 'semantic-ui-react';

const WelcomeForm = (props) => (
    <Form>
        <Form.Field>
            <label>First Name</label>
            <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={props.state["firstName"]}
                onChange={props.onChange}
            />
            <div className={props.state.errorMsgs["firstName"] === null ? "" : "ui red message"}><span>{props.state.errorMsgs["firstName"]}</span></div>
        </Form.Field>
    </Form>
);

export default WelcomeForm;