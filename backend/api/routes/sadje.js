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

router.post('/getbysharp', async function (req, res, next) {

    if(req.body.sharp.length < 2){
        res.status(401).json
        ({
            message: "sorry"
        });
    }

    let query = 'select s2.opis as "sorta", p.opis as "posest", d.opis as "delo", d.datum as "datumDelo" from sadje s ' + 
    "join sorta s2 on s.id_sorta = s2.id_sorta " +
    "join posest p on p.id_posest = s2.id_posest " + 
    "join delo d on d.id_sorta = s2.id_sorta " +
    "where s.sharp = '" + req.body.sharp + "';";

    console.log(query);

    db.any(query).then(sharpie => {
        console.log(sharpie);
        res.status(200).json
        ({
            message: sharpie
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