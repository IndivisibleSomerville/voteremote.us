import React from 'react';
import ReactTooltip from 'react-tooltip';
import SearchBox from '../form-helpers/SearchBox';

const Name = (props) => (
    <div>
        <ReactTooltip place='bottom' type='info' effect='solid' multiline={true} />
        <div className="form_header_progress_bar">
            <img src="./images/form-header-your-info.png" alt="Your Info" />
        </div>
        <div className="form_header_box">
            <h1>Your Info</h1>
        </div>
        <form onSubmit={props.handleSubmit} name="Name">
            <div className="form_group">
                <label for="firstName">Your Full Legal Name</label>
                <input
                    autoComplete="never"
                    type="text"
                    name="firstName"
                    placeholder="Legal First Name"
                    value={props.state["firstName"]}
                    onChange={props.handleChange}
                />
                <div className={props.state.errorMsgs["firstName"] === null ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["firstName"]}</span>
                </div>

                <label for="lastName">Last Name</label>
                <input
                    autoComplete="never"
                    type="text"
                    name="lastName"
                    placeholder="Legal Last Name"
                    value={props.state["lastName"]}
                    onChange={props.handleChange}
                />
                <div className={props.state.errorMsgs["lastName"] === null ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["lastName"]}</span>
                </div>
            </div>

            <label for="email">Your Email</label>
            <input
                autoComplete="never"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={props.state["email"]}
                onChange={props.handleChange}
            />
            <div className={props.state.errorMsgs["email"] === null ? "" : "ui red message"}>
                <span>{props.state.errorMsgs["email"]}</span>
            </div>

            <label>Your School (type at least 3 letters of the name to search)</label>
            <SearchBox 
                name="school"
                onSchoolSelect={props.handleChange}
                value={props.state["school"]}
            />
            <div className={props.state.errorMsgs["school"] === null ? "" : "ui red message"}>
                <span>{props.state.errorMsgs["school"]}</span>
            </div>

            <label for="email">Your Cell Phone Number <span data-tip="Having your phone number will help us to remind you<br />to take critical actions before deadlines expire.<br />We promise to send you no more than a few messages,<br />and will do our best to make them fun!" className="form_label_explanation_link">(Why do we need this?)</span></label>
            <input
                autoComplete="never"
                type="text"
                name="phone"
                placeholder="xxx-xxx-xxxx"
                value={props.state["phone"]}
                onChange={props.handleChange}
            />
            <div className={props.state.errorMsgs["phone"] === null ? "" : "ui red message"}>
                <span>{props.state.errorMsgs["phone"]}</span>
            </div>

            <div className="buttons">
                <button type="submit" className="button form_button_solid_background form_button">
                    Next
                </button>
            </div>
        </form>
    </div>
);

export default Name;