import styled from "styled-components";

export const HistoryContainer = styled.div`
    .history-cards {
        margin: 10px;

        .history-card {
            margin-top: 10px;
            padding: 15px;
            border-radius: 10px;
            background-color: #EFEFEF;

            h4 {
                font-size: 18px;
                margin-bottom: 5px;
            }

            .status-card {
                background-color: #fff;
                padding: 3px 15px;
                border-radius: 15px;
                margin: 10px 0;
                display: inline-block;

                &.status-sent {
                    background-color: rgba(52, 235, 98, 0.5); 
                }

                &.status-not_sent {
                    background-color: rgba(235, 55, 52, 0.5); 
                }
            }

            .email-history {
                .subject {
                    padding: 10px 0;
                    border-bottom: solid 1px rgba(0,0,0,.1);
                    margin-bottom: 10px;
                }

                label {
                    font-weight: bold;
                }
            }
        }
    }
`;