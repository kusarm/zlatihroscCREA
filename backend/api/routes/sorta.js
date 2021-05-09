const express = require('express');
const router = express.Router();
var cors = require('cors');
var pgp = require('pg-promise')();    // kinda include
var db = pgp("postgres://postgres:postgres@62.171.164.252:5458/postgres"); // database instance;
router.use(cors());
router.post('/all', async function (req, res, next) {

let id_posest = req.body.id_posest;

    const query = "SELECT * FROM sorta where id_posest =" + id_posest + ";";
    db.any(query).then(sorta => {
        console.log(sorta);
        res.status(200).json
        ({
            message: sorta
        });
    });

});

router.post('/insert', async function (req, res, next) {

    console.log(req.body);

    let name = "'" + req.body.name + "'"; // NOT NULL
    let id_posest = req.body.id_posest;   // NOT NULL
    let sharp = req.body.sharp ? req.body.sharp : "''";
    let namedate = "'" + req.body.namedate + "'";
    let kategorija = "'" + req.body.kategorija + "'";
    let kolicina = "'" + req.body.kolicina + "'"  ;

  
    const query ="insert into sorta (id_posest, sharp, opis, kategorija, kolicina, posajeno) values (" + id_posest + ", " + sharp + ", " + name + ", " + kategorija + ", " + kolicina+ ", " + namedate + ");";
    

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