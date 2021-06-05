interface Env {
    REACT_APP_BACKEND_URL: string | undefined
}

const env:Env = {
    REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL
}

export default env;