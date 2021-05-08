const express = require('express');
const router = express.Router();
var cors = require('cors');
var pgp = require('pg-promise')();    // kinda include
var db = pgp("postgres://postgres:postgres@62.171.164.252:5458/postgres"); // database instance;
router.use(cors());
router.get('/all', async function (req, res, next) {

    const query = 'SELECT * FROM sorta';
    db.any(query).then(sorta => {
        console.log(sorta);
        res.status(200).json
        ({
            message: sorta
        });
    });

});

router.post('/insert', async function (req, res, next) {

    let name = req.body.name;
    let id_posest = req.body.id_posest;
    const query ="insert into sorta (id_posest, opis) values (" + id_posest + "," + "'" + name + "'" + ");";
    db.any(query).then(sorta => {
        console.log(sorta);
        res.status(200).json
        ({
            message: sorta
        });
    });
});


router.post('/', async function (req, res, next) {

    console.log(req.body);
    // var query =
    res.status(200).json({
       message: req.body
    });
});


module.exports = router;