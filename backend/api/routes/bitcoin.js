const express = require('express');
const router = express.Router();
const cors = require('cors');
const pgp = require('pg-promise')();    // kinda include
const db = pgp("postgres://postgres:postgres@62.171.164.252:5458/postgres"); // database instance;
router.use(cors());

router.post('/', async function (req, res, next) {

    // client.getBlockchainInformation().then((help) => console.log(help));

    console.log(req.body);
    // var query =
    res.status(200).json({
        message: req.body
    });
});


module.exports = router;