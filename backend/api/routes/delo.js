const express = require('express');
const router = express.Router();
var cors = require('cors');
var pgp = require('pg-promise')();    // kinda include
var db = pgp("postgres://postgres:postgres@62.171.164.252:5458/postgres"); // database instance;
router.use(cors());
router.get('/all', async function (req, res, next) {

    const query = 'SELECT * FROM delo';
    db.any(query).then(posest => {
        console.log(posest);
        res.status(200).json
        ({
            message: posest
        });
    });

});

router.post('/insert', async function (req, res, next) {

    let name = req.body.name;
    let id_sorta = req.body.id_sorta;

    const query  = "insert into delo (id_sorta, opis) values (" + id_sorta + "," + "'" + name + "'" + ");";
    db.any(query).then(delo => {
        console.log(delo);
        res.status(200).json
        ({
            message: delo
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