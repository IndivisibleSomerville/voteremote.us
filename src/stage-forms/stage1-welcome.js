import React from 'react';
import { Input, Form } from 'semantic-ui-react';

const WelcomeForm = (props) => (
    <Form>
        <Form.Field>
            <label>Your Name</label>
            <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={props.state["firstName"]}
                onChange={props.onChange}
            />
            <div className={props.state.errorMsgs["firstName"] === null ? "" : "ui red message"}>
                <span>{props.state.errorMsgs["firstName"]}</span>
            </div>
        </Form.Field>
        <Form.Field>
            <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={props.state["lastName"]}
                onChange={props.onChange}
            />
            <div className={props.state.errorMsgs["lastName"] === null ? "" : "ui red message"}>
                <span>{props.state.errorMsgs["lastName"]}</span>
            </div>
        </Form.Field>
        <Form.Field>
            <label>Your Email</label>
            <Input
                type="text"
                name="email"
                placeholder="your@email.com"
                value={props.state["email"]}
                onChange={props.onChange}
            />
            <div className={props.state.errorMsgs["email"] === null ? "" : "ui red message"}>
                <span>{props.state.errorMsgs["email"]}</span>
            </div>
        </Form.Field>
        <Form.Field>
            <label>What school do you attend?</label>
            //TODO: Make this a dropdown
            <Input
                type="text"
                name="school"
                placeholder="School"
                value={props.state["school"]}
                onChange={props.onChange}
            />
            <div className={props.state.errorMsgs["school"] === null ? "" : "ui red message"}>
                <span>{props.state.errorMsgs["school"]}</span>
            </div>
        </Form.Field>
        <Form.Field>
            <label>Your phone number <span>Why do we need this?</span></label>
            <Input
                type="text"
                name="phone"
                placeholder="xxx-xxx-xxxx"
                value={props.state["phone"]}
                onChange={props.onChange}
            />
            <div className={props.state.errorMsgs["phone"] === null ? "" : "ui red message"}>
                <span>{props.state.errorMsgs["phone"]}</span>
            </div>
        </Form.Field>
    </Form>
);

export default WelcomeForm;