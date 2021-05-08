const express = require('express');
const router = express.Router();
var cors = require('cors');
var pgp = require('pg-promise')();    // kinda include
var db = pgp("postgres://postgres:postgres@62.171.164.252:5458/postgres"); // database instance;
router.use(cors());
router.get('/all', async function (req, res, next) {

    const query = 'SELECT * FROM sadje';
    db.any(query).then(sadje => {
        console.log(sadje);
        res.status(200).json
        ({
            message: sadje
        });
    });

});

router.post('/insert', async function (req, res, next) {


    let name = "'" + req.body.name + "'";
    let id_sorta = req.body.id_sorta;
    let kolicina = "'" + req.body.kolicina + "'";
    let sharp = req.body.sharp ? req.body.sharp : "''";



    let query ="insert into sadje (id_sorta, sharp, opis, kolicina) values (" + id_sorta + "," + sharp + "," + name + "," + kolicina + ");";


    db.any(query).then(sadje => {
        console.log(sadje);
        res.status(200).json
        ({
            message: sadje
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