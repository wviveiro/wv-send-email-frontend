import ajax from 'components/ajax';
import React from 'react';
import useCreateState from 'react-hook-setstate';
import env from 'components/constants';
import type { EmailState, Providers } from './interface';
import { alert_float } from 'components/alert';

/**
 * Hook to control email form
 */
export const useEmailState = (): EmailState => {

    /** use creact-hook-setstate to avoid using multiple useState */
    const [state, setState] = useCreateState({
        status: 'loaded',
        provider: "mailchimp",
        to: '',
        cc: '',
        bcc: '',
        subject: '',
        text: ''
    });

    // if page is not loaded, the status of the fields will be disabled
    const disabled = state.status !== 'loaded';

    // Handler function when input field is changed
    const setField = (field: string) => (ev: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        setState({[field]: ev.target.value});
    }

    // Handler to toggle between providers
    const changeProvider = (provider: Providers) => (ev: React.MouseEvent<HTMLButtonElement>): void => {
        ev.preventDefault();

        setState({provider});
    }

    const sendEmail = (): void => {
        if (!state.to.trim()) return alert_float("danger", "Recipient (To) is required");
        if (!state.subject.trim()) return alert_float("danger", "Subject is required");
        if (!state.body.trim()) return alert_float("danger", "Content is required");

        const to = state.to.trim().split(" ");
        const cc = (state.cc.trim()) ? state.cc.trim().split(" ") : null;
        const bcc = (state.bcc.trim()) ? state.bcc.trim().split(" ") : null;

        setState({status: 'sending'});

        ajax.post({
            url: `${env.REACT_APP_BACKEND_URL}/email`,
            data: JSON.stringify({
                provider: state.provider,
                to,
                cc,
                bcc,
                subject: state.subject,
                body: state.body
            })
        }).then((result) => {
            setState({status: 'loaded'});
            alert_float('success', "E-mail sent successfully");
        }).catch((reason) => {
            setState({status: 'loaded'});
            alert_float('danger', reason.message);
        });
    }

    return {
        disabled,
        state,
        setField,
        changeProvider,
        sendEmail
    }
}