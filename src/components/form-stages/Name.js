import React from 'react';
import ReactTooltip from 'react-tooltip';
import SearchBox from '../form-helpers/SearchBox';
import '../../styles/form-inputs.css';

// Note: <Search /> itself has the "required" tag (re HTML validation)
// which is why <SearchBox /> doesn't have a "required" tag
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
                <div className="form_field">
                    <label htmlFor="firstName">Your Full Legal Name</label>
                    <input
                        autoComplete="never"
                        type="text"
                        name="firstName"
                        placeholder="Legal First Name"
                        value={props.state["firstName"]}
                        onChange={props.handleChange}
                    />
                    <div className={props.state.errorMsgs["firstName"] === undefined ? "" : "ui red message"}>
                        <span>{props.state.errorMsgs["firstName"]}</span>
                    </div>
                </div>
                <div className="form_field">
                    <label htmlFor="lastName" className="hidden">Last Name</label>
                    <input
                        autoComplete="never"
                        type="text"
                        name="lastName"
                        placeholder="Legal Last Name"
                        value={props.state["lastName"]}
                        onChange={props.handleChange}
                    />
                    <div className={props.state.errorMsgs["lastName"] === undefined ? "" : "ui red message"}>
                        <span>{props.state.errorMsgs["lastName"]}</span>
                    </div>                
                </div>
            </div>
            <div className="form_field">
                <label htmlFor="email">Your Email</label>
                <input
                    autoComplete="never"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={props.state["email"]}
                    onChange={props.handleChange}
                />
                <div className={props.state.errorMsgs["email"] === undefined ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["email"]}</span>
                </div>            
            </div>
            <div className="form_field">
                <label htmlFor="school">Your School (type at least 3 letters of the name to search)</label>
                <SearchBox 
                    name="school"
                    onSchoolSelect={props.handleChange}
                    value={props.state["school"]}
                />
                <div className={props.state.errorMsgs["school"] === undefined ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["school"]}</span>
                </div>            
            </div>
            <div className="form_field">
                <label htmlFor="phone">Your Cell Phone Number <span data-tip="Having your phone number will help us to remind you<br />to take critical actions before deadlines expire.<br />We promise to send you no more than a few messages,<br />and will do our best to make them fun!" className="form_label_explanation_link">(Why do we need this?)</span></label>
                <input
                    autoComplete="never"
                    type="text"
                    name="phone"
                    placeholder="xxx-xxx-xxxx"
                    value={props.state["phone"]}
                    onChange={props.handleChange}
                />
                <div className={props.state.errorMsgs["phone"] === undefined ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["phone"]}</span>
                </div>            
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