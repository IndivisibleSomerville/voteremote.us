import React from 'react';
import { Input, Form, Dropdown } from 'semantic-ui-react';
import ReactTooltip from 'react-tooltip';


const AddressForm = (props) => (
    <div>
        <ReactTooltip place='bottom' type='info' effect='solid' multiline={true} />
        <div className="form_header_progress_bar">
            <img src="./images/form-header-your-info.png" alt="Your Info" />
        </div>
        <div className="form_header_box">
            <h1>Your Info</h1>
        </div>
        <Form>
            <Form.Field>
                <label>Your address at school <span data-tip="If you live in a dorm, use the dorm's physical street address,<br />even if it's different than the mailing address your school gives you." className="form_label_explanation_link">(What if I'm in a dorm?)</span></label>
                <Input
                    type="text"
                    name="school[streetLine1]"
                    placeholder="Street Address (no P.O. boxes)"
                    value={props.state["school[streetLine1]"]}
                    onChange={props.onChange}
                />
                <div className={props.state.errorMsgs["school[streetLine1]"] === null ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["school[streetLine1]"]}</span>
                </div>
            </Form.Field>
            <Form.Field>
                <Input
                    type="text"
                    name="school[streetLine2]"
                    placeholder="Apartment number, etc."
                    value={props.state["school[streetLine2]"]}
                    onChange={props.onChange}
                />
                <div className={props.state.errorMsgs["school[streetLine2]"] === null ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["school[streetLine2]"]}</span>
                </div>
            </Form.Field>
            <Form.Group>
                <Form.Field>
                    <Input
                        type="text"
                        name="school[city]"
                        placeholder="City"
                        value={props.state["school[city]"]}
                        onChange={props.onChange}
                    />
                    <div className={props.state.errorMsgs["school[city]"] === null ? "" : "ui red message"}>
                        <span>{props.state.errorMsgs["school[city]"]}</span>
                    </div>
                </Form.Field>
                <Form.Field>
                    <select name="school[state]" className="ui dropdown" value={props.state["school[state]"]} onChange={props.onChange}>
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
                    <div className={props.state.errorMsgs["school[state]"] === null ? "" : "ui red message"}>
                        <span>{props.state.errorMsgs["school[state]"]}</span>
                    </div>
                </Form.Field>
                <Form.Field>
                    <Input
                        type="text"
                        name="school[zipCode]"
                        placeholder="Zip"
                        value={props.state["school[zipCode]"]}
                        onChange={props.onChange}
                    />
                    <div className={props.state.errorMsgs["school[zipCode]"] === null ? "" : "ui red message"}>
                        <span>{props.state.errorMsgs["school[zipCode]"]}</span>
                    </div>
                </Form.Field>
            </Form.Group>
            <Form.Field>
                <label>Your address at home</label>
                <Input
                    type="text"
                    name="home[streetLine1]"
                    placeholder="Street Address (no P.O. boxes)"
                    value={props.state["home[streetLine1]"]}
                    onChange={props.onChange}
                />
                <div className={props.state.errorMsgs["home[streetLine1]"] === null ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["home[streetLine1]"]}</span>
                </div>
            </Form.Field>
            <Form.Field>
                <Input
                    type="text"
                    name="home[streetLine2]"
                    placeholder="Apartment number, etc."
                    value={props.state["home[streetLine2]"]}
                    onChange={props.onChange}
                />
                <div className={props.state.errorMsgs["home[streetLine2]"] === null ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["home[streetLine2]"]}</span>
                </div>
            </Form.Field>
            <Form.Group>
                <Form.Field>
                    <Input
                        type="text"
                        name="home[city]"
                        placeholder="City"
                        value={props.state["home[city]"]}
                        onChange={props.onChange}
                    />
                    <div className={props.state.errorMsgs["home[city]"] === null ? "" : "ui red message"}>
                        <span>{props.state.errorMsgs["home[city]"]}</span>
                    </div>
                </Form.Field>
                <Form.Field>
                    <select name="home[state]" className="ui dropdown" value={props.state["home[state]"]} onChange={props.onChange}>
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
                    <div className={props.state.errorMsgs["home[state]"] === null ? "" : "ui red message"}>
                        <span>{props.state.errorMsgs["home[state]"]}</span>
                    </div>
                </Form.Field>
                <Form.Field>
                    <Input
                        type="text"
                        name="home[zipCode]"
                        placeholder="Zip"
                        value={props.state["home[zipCode]"]}
                        onChange={props.onChange}
                    />
                    <div className={props.state.errorMsgs["home[zipCode]"] === null ? "" : "ui red message"}>
                        <span>{props.state.errorMsgs["home[zipCode]"]}</span>
                    </div>
                </Form.Field>
            </Form.Group>
        </Form>
    </div>
);

export default AddressForm;