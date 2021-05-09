const { exec, execFile } = require("child_process");

const comm = String.raw`.\bitcoind.exe -datadir="./data"`;

const startServer = () => exec(comm, (error, stdout, stderr) => {
    console.log(comm);
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

startServer();