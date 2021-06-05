export type Providers = "mailchimp" | "sendgrid";

export interface EmailState {
    disabled: boolean,
    state: {
        status: string,
        provider: Providers,
        to: string,
        cc: string,
        bcc: string,
        subject: string,
        text: string
    },
    setField: (field: string) => (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
    changeProvider: (provider: Providers) => (event: React.MouseEvent<HTMLButtonElement>) => void,
    sendEmail: (event?: React.MouseEvent<HTMLButtonElement>) => void,
}