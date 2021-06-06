import { Layout } from 'components/layout';
import { History } from 'components/context/interface';
import { AppContext } from 'components/context';
import React, { useContext } from 'react';
import { HistoryContainer } from './style';

const HistoryView = () => {
    const { history } = useContext(AppContext);

    return (
        <Layout>
            <HistoryContainer>
                <div className="inner-wrap">
                    <h1>History of sent emails</h1>
                    <p>List of all sent messages before browser is refreshed</p>
                    <div className="history-cards">
                        {history && history.map((h: History, i: number) => (
                            <div className="history-card" key={i}>
                                <h4>Email to: {h.email}</h4>
                                <span className={`status-card status-${h.status}`}>{h.message}</span>
                                <div className="email-history">
                                    <p className="subject">
                                        <label>Subject:</label>&nbsp;{h.data.subject}
                                    </p>
                                    <p>
                                        <label>Message:</label><br />
                                        <span>{h.data.body}</span>
                                    </p>
                                    <br />
                                    <p>
                                        <label>Provider</label> {h.provider}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </HistoryContainer>
        </Layout>
    );
};

export default HistoryView;