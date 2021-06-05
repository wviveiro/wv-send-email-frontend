import { RequestType } from "./interface";


/** Ajax function to call API */
const request = async (args: RequestType) => {
    const default_args = {
        url: args.url,
        method: 'get',
    }

    if (args.method) default_args.method = args.method;

    const aux:RequestInit = {
        method: args.method,
        body: args.data || null,
        headers: args.headers || {
            'Content-Type': 'application/json'
        }
    }

    return new Promise(async (resolve, reject) => {
        try {
            const response = await (await fetch(args.url, aux)).json();
            
            if (!response.success) return reject(response);

            return resolve(response);
        } catch (error) {
            return reject({message: `Request Failed - ${error}`});
        }
    });
}

const post = async (args: RequestType) => {
    args.method = 'post';
    return request(args);
}

const get = async (args: RequestType) => {
    args.method = 'get';
    return request(args);
}

const ajax = {
    request,
    post,
    get
}

export default ajax;