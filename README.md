# Send Email Project

Send emails using Mailchimp API and Sendgrid. The API that integrates to this frontend can be found here https://github.com/wviveiro/wv-send-email

## How to install

After cloning this project, just install the npm modules
```
    npm install
```

To run locally in your machine, just run `npm start`

## Environment File

Applications uses the file `.env` to get the backend url. Copy the file `.env.SAMPLE` and paste as `.env.development` if you want to test it locally. In order to deploy you will need to have a `.env` file set

## Mock Server

In order to test this project locally, I have created a mock server which runs a little express application. To start the mock server, just run `npm run mock:server`


## TODO

- Create more in-depth testing
- Upload application to S3 bucket