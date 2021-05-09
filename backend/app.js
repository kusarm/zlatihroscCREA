const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

// const guardsRoutes = require('./api/routes/guards');


app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, DELETE");
    res.setHeader("Access-Control-Expose-Headers","Content-Length,Content-Range");

    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


// app.use('/kiki', kikiRoutes);
const posestRoutes = require('./api/routes/posest');
app.use("/posest", posestRoutes);


const sortaRoutes = require('./api/routes/sorta');
app.use("/sorta", sortaRoutes);

const deloRoutes = require('./api/routes/delo');
app.use("/delo", deloRoutes);

const sadjeRoutes = require('./api/routes/sadje');
app.use("/sadje", sadjeRoutes);

app.use('/', (req, res, next) => {
    res.status(200).json
    (
        {
            status: "OK"
        }
    );
});



app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;