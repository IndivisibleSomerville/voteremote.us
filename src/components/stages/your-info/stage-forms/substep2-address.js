import React from 'react';
import { Input, Form } from 'semantic-ui-react';

const AddressForm = (props) => (
    <Form>
        <Form.Field>
            <label>Your address at school</label>
            <Input
                type="text"
                name="school[streetLine1]"
                placeholder="Street 1 (no P.O. boxes)"
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
            {/*TODO: Make this a dropdown*/}
            <Input
                type="text"
                name="school[state]"
                placeholder="State"
                value={props.state["school[state]"]}
                onChange={props.onChange}
            />
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
        <Form.Field>
            <label>Your address at home</label>
            <Input
                type="text"
                name="home[streetLine1]"
                placeholder="Street 1 (no P.O. boxes)"
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
                value={props.state["school[streetLine2]"]}
                onChange={props.onChange}
            />
            <div className={props.state.errorMsgs["home[streetLine2]"] === null ? "" : "ui red message"}>
                <span>{props.state.errorMsgs["home[streetLine2]"]}</span>
            </div>
        </Form.Field>
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
            {/*TODO: Make this a dropdown*/}
            <Input
                type="text"
                name="home[state]"
                placeholder="State"
                value={props.state["home[state]"]}
                onChange={props.onChange}
            />
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
    </Form>
);

export default AddressForm;