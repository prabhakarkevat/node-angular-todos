const router = require('express').Router();

const homeRoute = require('./home');
const aboutRoute = require('./about');
const contactRoute = require('./contact');
const todoRoute = require('./todo');

router.use("/", homeRoute);
router.use("/about", aboutRoute);
router.use("/contact", contactRoute);
router.use("/todos", todoRoute);

module.exports = router;