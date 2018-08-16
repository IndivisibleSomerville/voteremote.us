import React from 'react';
import ReactTooltip from 'react-tooltip';
import '../../styles/form-inputs.css';

const Address = (props) => (
    <div>
        <ReactTooltip place='bottom' type='info' effect='solid' multiline={true} />
        <div className="form_header_progress_bar">
            <img src="./images/form-header-your-info.png" alt="Your Info" />
        </div>
        <div className="form_header_box">
            <h1>Your Info</h1>
        </div>
        <form onSubmit={props.handleSubmit} name="Address">
            <div className="form_field">
                <label>Your address at school <span data-tip="If you live in a dorm, use the dorm's physical street address,<br />even if it's different than the mailing address your school gives you." className="form_label_explanation_link">(What if I'm in a dorm?)</span></label>
                <input
                    type="text"
                    name="schoolAddress_streetLine1"
                    placeholder="Street Address (no P.O. boxes)"
                    value={props.state["schoolAddress_streetLine1"]}
                    onChange={props.handleChange}
                />
                <div className={props.state.errorMsgs["schoolAddress_streetLine1"] === undefined ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["schoolAddress_streetLine1"]}</span>
                </div>
            </div>
            <div className="form_field">
                <input
                    type="text"
                    name="schoolAddress_streetLine2"
                    placeholder="Apartment number, etc."
                    value={props.state["schoolAddress_streetLine2"]}
                    onChange={props.handleChange}
                />
                <div className={props.state.errorMsgs["schoolAddress_streetLine2"] === undefined ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["schoolAddress_streetLine2"]}</span>
                </div>
            </div>
            <div className="form_group">
                <div className="form_field">
                    <input
                        type="text"
                        name="schoolAddress_city"
                        placeholder="City"
                        value={props.state["schoolAddress_city"]}
                        onChange={props.handleChange}
                    />
                    <div className={props.state.errorMsgs["schoolAddress_city"] === undefined ? "" : "ui red message"}>
                        <span>{props.state.errorMsgs["schoolAddress_city"]}</span>
                    </div>
                </div>
                <div className="form_field">
                    <select name="schoolAddress_state" className="ui dropdown" value={props.state["schoolAddress_state"]} onChange={props.handleChange}>
                        <option value="">State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    <div className={props.state.errorMsgs["schoolAddress_state"] === undefined ? "" : "ui red message"}>
                        <span>{props.state.errorMsgs["schoolAddress_state"]}</span>
                    </div>
                </div>
                <div className="form_field">
                    <input
                        type="text"
                        name="schoolAddress_zipCode"
                        placeholder="Zip"
                        value={props.state["schoolAddress_zipCode"]}
                        onChange={props.handleChange}
                    />
                    <div className={props.state.errorMsgs["schoolAddress_zipCode"] === undefined ? "" : "ui red message"}>
                        <span>{props.state.errorMsgs["schoolAddress_zipCode"]}</span>
                    </div>
                </div>
            </div>
            <div className="form_field">
                <label>Your address at home</label>
                <input
                    type="text"
                    name="homeAddress_streetLine1"
                    placeholder="Street Address (no P.O. boxes)"
                    value={props.state["homeAddress_streetLine1"]}
                    onChange={props.handleChange}
                />
                <div className={props.state.errorMsgs["homeAddress_streetLine1"] === undefined ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["homeAddress_streetLine1"]}</span>
                </div>
            </div>
            <div className="form_field">
                <input
                    type="text"
                    name="homeAddress_streetLine2"
                    placeholder="Apartment number, etc."
                    value={props.state["homeAddress_streetLine2"]}
                    onChange={props.handleChange}
                />
                <div className={props.state.errorMsgs["homeAddress_streetLine2"] === undefined ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["homeAddress_streetLine2"]}</span>
                </div>
            </div>
            <div className="form_group">
                <div className="form_field">
                    <input
                        type="text"
                        name="homeAddress_city"
                        placeholder="City"
                        value={props.state["homeAddress_city"]}
                        onChange={props.handleChange}
                    />
                    <div className={props.state.errorMsgs["homeAddress_city"] === undefined ? "" : "ui red message"}>
                        <span>{props.state.errorMsgs["homeAddress_city"]}</span>
                    </div>
                </div>
                <div className="form_field">
                    <select name="homeAddress_state" className="ui dropdown" value={props.state["homeAddress_state"]} onChange={props.handleChange}>
                        <option value="">State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    <div className={props.state.errorMsgs["homeAddress_state"] === undefined ? "" : "ui red message"}>
                        <span>{props.state.errorMsgs["homeAddress_state"]}</span>
                    </div>
                </div>
                <div className="form_field">
                    <input
                        type="text"
                        name="homeAddress_zipCode"
                        placeholder="Zip"
                        value={props.state["homeAddress_zipCode"]}
                        onChange={props.handleChange}
                    />
                    <div className={props.state.errorMsgs["homeAddress_zipCode"] === undefined ? "" : "ui red message"}>
                        <span>{props.state.errorMsgs["homeAddress_zipCode"]}</span>
                    </div>
                </div>
            </div>
            
            <div className="buttons">
                <button className="button form_button_solid_background form_button">
                    Next
                </button>
            </div>
        </form>
    </div>
)

export default Address;