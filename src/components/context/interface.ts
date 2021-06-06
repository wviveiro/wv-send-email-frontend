import { Providers } from "components/views/home/interface";

/** History card */
export interface History {
    email: string,
    type: "to" | "cc" | "bcc",
    provider: Providers,
    message: string,
    status: "sent" | "not_sent",
    data: {
        subject: string,
        body: string
    }
}