const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(cors());

// Mock email API
server.post("/email", (req, res) => {
    const {body} = req;

    if (body.provider === 'mailchimp') {
        return res.send({
            success: true,
            message: [
                {
                    "email": "foo@foo.com",
                    "status": "sent",
                    "_id": "123456",
                    "reject_reason": null
                }
            ]
        });
    } else {
        return res.send({
            "message": {
                "statusCode": 202,
                "body": ""
            },
            "success": true
        })
    }
});

 
// Use default router
// server.use(router)

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});