const express = require('express');
const router = express.Router();
var cors = require('cors');
var pgp = require('pg-promise')();    // kinda include
var db = pgp("postgres://postgres:postgres@62.171.164.252:5458/postgres"); // database instance;
router.use(cors());
router.get('/all', async function (req, res, next) {

    const query = 'SELECT * FROM posest';
    db.any(query).then(posest => {
        console.log(posest);
        res.status(200).json
        ({
            message: posest
        });
    });

});

router.post('/findById', async function (req, res, next) {

    let id = req.body.idPosest;
    const query =` SELECT s.opis FROM sorta s INNER JOIN posest ON s.id_posest = posest.id_posest WHERE posest.opis='${id}'`;
    console.log(query);
    db.any(query).then(posest => {
        console.log(posest);
        res.status(200).json
        ({
            message: posest
        });
    });
});

router.post('/insert', async function (req, res, next) {

    let name = "'" + req.body.name + "'";
    let sharp = req.body.sharp || "''";

    let query = "insert into posest (opis, sharp) values (" + name + "," + sharp +");";
    console.log(query);
    db.any(query).then(rispons => {
        console.log(rispons);
        res.status(200).json
        ({
            message: rispons
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