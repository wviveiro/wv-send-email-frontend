import styled, { css } from "styled-components";
import mailchimp_logo from 'images/mailchimp.png';
import sendgrid_logo from 'images/sendgrid.png';

const color_inputs = '#EFEFEF';

export const HomeContainer = styled.div`

    .provider-containers {
        display: flex;
    }

    .form-email {
        .form-group {
            label {
                display: block;
                margin-bottom: 2px;
            }

            .form-input {
                width: 100%;
                padding: 10px;
                margin-bottom: 15px;
                background-color: ${color_inputs};
                border: 0;
                border-radius: 5px;

                &:disabled {
                    opacity: .5;
                }
            }

            textarea.form-input {
                min-height: 100px;
            }
        }
    }

    .inner-wrap {
        width: 90%;
        margin: 0 auto;
        margin-top: 50px;
        max-width: 700px;
    }
`;


interface ButtonProviderInterface {
    provider: "mailchimp" | "sendgrid",
    active?: boolean
}

/** Button to select provider */
export const ButtonProvider = styled.button<ButtonProviderInterface>`

    cursor: pointer;
    background-color: ${color_inputs};
    border: 0;
    border-radius: 10px;
    margin: 10px;
    height: 150px;
    width: 150px;

    background-image: ${props => props.provider === 'mailchimp' ? `url(${mailchimp_logo})` : `url(${sendgrid_logo})`};
    background-repeat: no-repeat;
    background-size: 100px;
    background-position: center;
    opacity: 0.7;

    ${props => props.active && css`
        opacity: 1;

        border: solid 3px #000;
    `}
`;

export const ButtonConfirm = styled.button`
    background-color: #000;
    color: #FFF;
    width: 100%;
    padding: 30px;
    margin: 10px 0;
    border: 0;
    border-radius: 5px;;

    &:disabled {
        opacity: .5;
    }
`;