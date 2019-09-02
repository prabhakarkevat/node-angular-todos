const express = require('express');
const bodyParser = require('body-parser');
const api = require('./src/routes/index.js');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/", api);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
