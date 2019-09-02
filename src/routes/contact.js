const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send({
            email: "prabhakarkevat0pk@gmail.com"
            , phone: 9987461170
            , skype: "prabhakar.kevat"
            , twitter: "prabhakar_kevat"
            , instagram: "prabhakar_kevat"
        });
    })
    

module.exports = router;