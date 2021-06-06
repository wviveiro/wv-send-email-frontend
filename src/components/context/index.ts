/**
 * Context is used as a REDUX of the application
 *
 * @author Wellington Viveiro <wviveiro@gmail.com>
 **/


import React from "react";
import useCreateState from 'react-hook-setstate';
import { DataApi, MCResult, SGResult } from "components/views/home/interface";
import { History } from "./interface";


export const AppContext = React.createContext({history: [], addHistory: (a:DataApi,b:SGResult | MCResult) => {}});

/** This state will be the main source of our redux (context) */
export const useHistoryState = () => {

    const [state, setState] = useCreateState({
        history: []
    });

    const addHistory = (dataSent: DataApi, dataReceived: SGResult | MCResult): void => {
        const history: History[] = [
            ...treatResult(dataSent.to, "to", dataSent),
            ...(dataSent.cc ? treatResult(dataSent.cc, "cc", dataSent) : []),
            ...(dataSent.bcc ? treatResult(dataSent.bcc, "bcc", dataSent) : []),
            ...state.history
        ];

        if (dataSent.provider === "mailchimp") {
            // Some emails won't work with mail chimp as they send them separetely
            for (const mc of (dataReceived as MCResult).message) {
                if (typeof mc !== 'string' && mc.reject_reason !== null) {
                    for (const i of history) {
                        if (i.email === mc.email) {
                            i.status = "not_sent";
                            i.message = `Message not sent, reject reason: ${mc.reject_reason}`;
                            break;
                        }
                    }
                }
            }
        }
        
        
        setState({history});
    }

    return {
        state,
        addHistory
    }
}


const treatResult = (list: string[], type: "to" | "cc" | "bcc", dataSent: DataApi) : History[] => list.map(email => ({
    email,
    type,
    provider: dataSent.provider,
    message: "Message Sent",
    status: "sent",
    data: {
        subject: dataSent.subject,
        body: dataSent.body
    }
}));