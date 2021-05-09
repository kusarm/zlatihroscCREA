const {exec, execFile} = require("child_process");

let result;

const getBlockCount = () => exec(".\\bitcoin-cli.exe -datadir=\"./data\" getblockcount", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

// getBlockCount();
const createRawTransaction = () => execFile(String.raw`.\bitcoin-cli.exe`, ['-datadir=./data', 'createrawtransaction', '[]', '{\"data\":\"7a6c61746948726f7363\"}'], (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`create - stdout: ${stdout}`);
    result = stdout;
});

createRawTransaction();

const fundRawTransaction = (hex) => exec(String.raw`.\bitcoin-cli.exe -datadir="./data" fundrawtransaction ${hex}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`fund - stdout: ${JSON.parse(stdout).hex}`);
    result = JSON.parse(stdout).hex;
});

setTimeout(() => fundRawTransaction(result), 2000);
// fundRawTransaction(result);

const signRawTransaction = (hex) => exec(String.raw`.\bitcoin-cli.exe -datadir="./data" signrawtransaction ${hex}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    result = JSON.parse(stdout).hex;
    console.log(`sign - stdout: ${stdout}`);
});

// signRawTransaction(result);
setTimeout(() => signRawTransaction(result), 4500);

const sendRawTransaction = (hex) => exec(String.raw`.\bitcoin-cli.exe -datadir="./data" sendrawtransaction ${hex}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`send - stdout: ${stdout}`);
});

// sendRawTransaction(result);
setTimeout(() => sendRawTransaction(result), 7000);

const decodeRawTransaction = (hex) => exec(String.raw`.\bitcoin-cli.exe -datadir="./data" decoderawtransaction ${hex}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    let temp = JSON.parse(stdout)["vout"][0]["scriptPubKey"]["asm"];
    let temp2 = JSON.parse(stdout)["vout"][1]["scriptPubKey"]["asm"];
    console.log(`decode - stdout: ${temp}`);
    console.log(`decode - stdout: ${temp2}`);
    if(temp.includes("0 OP_RETURN ")){
        temp = temp.split(" ")[2];
        result = temp;
    }else{
        temp2 = temp2.split(" ")[2];
        result = temp2;
    }
    result = hex2a(result);
    console.log("tprav result:;.-,-." + result);
});

function hex2a(hexx) {
    let hex = hexx.toString();//force conversion
    let str = '';
    for (let i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}
// decodeRawTransaction(result);

setTimeout(() => decodeRawTransaction(result), 10000);