const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send({about: "Wandering in the unknown streets!"})
    })
    

module.exports = router;