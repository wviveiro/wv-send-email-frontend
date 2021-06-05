export interface RequestType {
    url: string,
    method?: "get" | "post",
    data?: BodyInit | null | undefined,
    headers?: {
        [x: string] : string
    }
}
