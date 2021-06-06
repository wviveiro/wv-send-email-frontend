interface Env {
    REACT_APP_BACKEND_URL: string | undefined,
    NODE_ENV: string | undefined,
}

const env:Env = {
    REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
    NODE_ENV: process.env.NODE_ENV,
}

export default env;