const {exec, execFile} = require("child_process");

let methods = {};

let result;

methods.getDir = () => exec("echo $pwd", (error, stdout, stderr) => {
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

methods.getBlockCount = () => exec(String.raw`.\bitcoin-cli.exe -datadir="./data" getblockcount`, (error, stdout, stderr) => {
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
methods.createRawTransaction = (hex) => {
    const obj = {"data": hex};
    const jsonify = JSON.stringify(obj);
    execFile(String.raw`.\bitcoin-cli.exe`, ['-datadir=./data', 'createrawtransaction', '[]', jsonify], (error, stdout, stderr) => {
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
};

methods.getResult = () => {
    return result;
}

// methods.createRawTransaction = (hex) => {
//     // const obj = {"data": hex};
//     // const jsonify = JSON.stringify(obj);
//     exec(String.raw`.\bitcoin-cli.exe -datadir=./data createrawtransaction [] '{\"data\":\"${hex}\"}'`, (error, stdout, stderr) => {
//         if (error) {
//             console.log(`error: ${error.message}`);
//             return;
//         }
//         if (stderr) {
//             console.log(`stderr: ${stderr}`);
//             return;
//         }
//         console.log(`create - stdout: ${stdout}`);
//         result = stdout;
//     })
// };

// createRawTransaction();

methods.fundRawTransaction = (hex) => exec(String.raw`.\bitcoin-cli.exe -datadir="./data" fundrawtransaction ${hex}`, (error, stdout, stderr) => {
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

// setTimeout(() => fundRawTransaction(result), 2000);
// fundRawTransaction(result);

methods.signRawTransaction = (hex) => exec(String.raw`.\bitcoin-cli.exe -datadir="./data" signrawtransaction ${hex}`, (error, stdout, stderr) => {
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
//     setTimeout(() => signRawTransaction(result), 4500);

methods.sendRawTransaction = (hex) => exec(String.raw`.\bitcoin-cli.exe -datadir="./data" sendrawtransaction ${hex}`, (error, stdout, stderr) => {
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
//     setTimeout(() => sendRawTransaction(result), 7000);

let decodedMsg;

methods.decodeRawTransaction = (hex) => {
    exec(String.raw`.\bitcoin-cli.exe -datadir="./data" decoderawtransaction ${hex}`, (error, stdout, stderr) => {
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
        // console.log(`decode - stdout: ${temp}`);
        // console.log(`decode - stdout: ${temp2}`);
        if (temp.includes("0 OP_RETURN ")) {
            temp = temp.split(" ")[2];
            result = temp;
        } else {
            temp2 = temp2.split(" ")[2];
            result = temp2;
        }
        result = hex2a(result);
        decodedMsg = result;
    });
};

methods.getDecodedMsg = ()=> {
    return decodedMsg;
}

function hex2a(hexx) {
    let hex = hexx.toString();//force conversion
    let str = '';
    for (let i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

// decodeRawTransaction(result);

// setTimeout(() => decodeRawTransaction(result), 10000);

module.exports = methods;