import React from 'react';
import { Input, Button, Form, Dropdown } from 'semantic-ui-react';
import ReactTooltip from 'react-tooltip';
import SearchBox from './SearchBox';

import schoolList from './schoolList';

// "/your-info/address"

const WelcomeForm = (props) => (
    <div>
        <ReactTooltip place='bottom' type='info' effect='solid' multiline={true} />
        <div className="form_header_progress_bar">
            <img src="./images/form-header-your-info.png" alt="Your Info" />
        </div>
        <div className="form_header_box">
            <h1>Your Info</h1>
        </div>
        <Form onSubmit={props.handleSubmit} name="Welcome Form">
            <Form.Group widths='equal'>
                <Form.Field>
                    <label className="form_label">Your Full Legal Name</label>
                    <Input
                        autoComplete="never"
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
                    <label className="transparent">Last Name</label>
                    <Input
                        autoComplete="never"
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
            </Form.Group>
            <Form.Field>
                <label className="form_label">Your Email</label>
                <Input
                    autoComplete="never"
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
                <label className="form_label">Your School (type at least 3 letters of the name to search)</label>
                <SearchBox 
                    name="school"
                    onSchoolSelect={props.onChange}
                    value={props.state["school"]}
                />
                <div className={props.state.errorMsgs["school"] === null ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["school"]}</span>
                </div>
            </Form.Field>
            <Form.Field>
                <label className="form_label">Your phone number <span data-tip="Having your phone number will help us to remind you<br />to take critical actions before deadlines expire.<br />We promise to send you no more than a few messages,<br />and will do our best to make them fun!" className="form_label_explanation_link">(Why do we need this?)</span></label>
                <Input
                    autoComplete="never"
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
            <div className="buttons">
                <div className="button form_button_solid_background form_button" style={{height: "50px"}} >
                    <Button
                        style={{
                            color: "white", 
                            display: "inline-block", 
                            width: "100%", 
                            height: "100%", 
                            textAlign: "center", 
                            backgroundColor: "#FB3B3E",
                            fontSize: "22px"
                        }}
                        content="Next"  
                    />
                </div>
            </div>
        </Form>
    </div>
);

export default WelcomeForm;
