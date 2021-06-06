export type Providers = "mailchimp" | "sendgrid";

export interface EmailState {
    disabled: boolean,
    state: {[name: string]: string},
    setField: (field: string) => (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
    changeProvider: (provider: Providers) => (event: React.MouseEvent<HTMLButtonElement>) => void,
    sendEmail: (event?: React.MouseEvent<HTMLButtonElement>) => void,
}


export interface DataApi {
    provider: Providers,
    to: string[],
    cc?: string[],
    bcc?: string[],
    subject: string,
    body: string
}

export interface SGResult {
    message: {
        statusCode: number,
        body: string
    } | string,
    success: boolean
}

export interface MCResult {
    message: {
        email: string,
        status: string,
        _id: string,
        reject_reason:string | null
    }[] | string,
    success: boolean
}