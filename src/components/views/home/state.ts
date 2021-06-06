import ajax from 'components/ajax';
import React, { useContext } from 'react';
import useCreateState from 'react-hook-setstate';
import env from 'components/constants';
import { alert_float } from 'components/alert';
import { AppContext } from 'components/context';
import type { DataApi, EmailState, MCResult, Providers, SGResult } from './interface';

/**
 * Hook to control email form
 */
export const useEmailState = (): EmailState => {
    const { addHistory } = useContext(AppContext);


    /** use creact-hook-setstate to avoid using multiple useState */
    const [state, setState] = useCreateState({
        status: 'loaded',
        provider: "mailchimp",
        to: '',
        cc: '',
        bcc: '',
        subject: '',
        body: ''
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

        const data:DataApi = {
            provider: state.provider,
            to,
            cc,
            bcc,
            subject: state.subject,
            body: state.body
        }
        ajax.post({
            url: `${env.REACT_APP_BACKEND_URL}/email`,
            data: JSON.stringify(data)
        }).then((result) => {
            setState({
                status: 'loaded',
                to: '',
                cc: '',
                bcc: '',
                subject: '',
                body: ''
            });
            alert_float('success', "E-mail sent successfully");
            addHistory(data, result as SGResult | MCResult);
        }).catch((reason) => {
            setState({status: 'loaded'});
            alert_float('danger', reason.message);
        });
    }

    const s: {[name: string]: string} = {
        status: state.status,
        provider: state.provider,
        to: state.to,
        cc: state.cc,
        bcc: state.bcc,
        subject: state.subject,
        body: state.body,
    }

    return {
        disabled,
        state: s,
        setField,
        changeProvider,
        sendEmail
    }
}