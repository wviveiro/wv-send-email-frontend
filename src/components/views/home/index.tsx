import Alert from 'components/alert';
import React from 'react';
import { Providers } from './interface';
import { useEmailState } from './state';
import { HomeContainer, ButtonProvider, ButtonConfirm } from './style';

/** List of input fields to display on the form */
const listFields = [
    {field: 'to', placeholder: "Email to, separate by spaces", title: "To"},
    {field: 'cc', placeholder: "CC, separate by spaces", title: "CC"},
    {field: 'bcc', placeholder: "BCC, separate by spaces", title: "BCC"},
    {field: 'subject', placeholder: "Subject of the email", title: "Subject"},
    {field: 'body', placeholder: "Content of the email", title: "Content", type:"textarea"},
]

/** Home page - load email form */
const Home = (): JSX.Element => {
    const {
        disabled,
        state,
        changeProvider,
        setField,
        sendEmail
    } = useEmailState();

    return (
        <HomeContainer>
            <div className="inner-wrap">
                <h1>Ready to send an email?</h1>
                <p>Select a provider and fill the form to send the desired email</p>
                <div className="provider-container">
                    {["mailchimp", "sendgrid"].map((provider, index) => (
                        <ButtonProvider 
                            provider={provider as Providers}
                            active={state.provider === provider}
                            disabled={disabled}
                            onClick={changeProvider(provider as Providers)}
                            key={index}
                        />
                    ))}
                </div>
                <div className="form-email">
                    {listFields.map((f, index) => (
                        <div className="form-group" key={index}>
                            <label>{f.title}</label>
                            {f.type === 'textarea' ? (
                                <textarea
                                    className="form-input"
                                    placeholder={f.placeholder}
                                    disabled={disabled}
                                    onChange={setField(f.field)}
                                />
                            ) : (
                                <input
                                    className="form-input"
                                    placeholder={f.placeholder}
                                    disabled={disabled}
                                    onChange={setField(f.field)}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    <ButtonConfirm
                        disabled={disabled}
                        onClick={sendEmail}
                    >
                        {state.status === 'sending' ? 'Sending' : 'Save'}
                    </ButtonConfirm>
                </div>
            </div>
            <Alert />
        </HomeContainer>
    );
};

export default Home;