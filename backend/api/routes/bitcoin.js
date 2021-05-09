const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(cors());
const blockchain = require('./bitcoinsv-logic');

let finalHash;

router.post('/findById', async function (req, res, next) {
    console.log("/findbyid/" + req.body["hex"]);
    blockchain.decodeRawTransaction(req.body["hex"]);
    setTimeout(()=>{
        const result = blockchain.getDecodedMsg();
        res.status(200).json({
            message: JSON.parse(result)
        });
    }, 2000);
});

router.post('/', async function (req, res, next) {
    console.log(req.body);
    // blockchain.getBlockCount();

    let temp = ascii_to_hexa(JSON.stringify(req.body));
    console.log(temp);
    blockchain.createRawTransaction(temp);
    setTimeout(() => {
        let result = blockchain.getResult();
        blockchain.fundRawTransaction(result);
        setTimeout(()=>{
            let result = blockchain.getResult();
            blockchain.signRawTransaction(result);
            setTimeout(()=>{
                let result = blockchain.getResult();
                blockchain.sendRawTransaction(result);
                setTimeout(()=>{
                    let result = blockchain.getResult();
                    console.log("result: " + result);
                    finalHash = result;
                    res.status(200).json({
                        message: result
                    });
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);

});

function ascii_to_hexa(str)
{
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n ++)
    {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    return arr1.join('');
}


module.exports = router;