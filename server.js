const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer();
const logger = require('morgan');
const cors = require('cors');
const req = require('express/lib/request');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.disable('x-powered-by');

app.set('port', port);


server.listen(3000 || 'localhost', function(){
    console.log('app en uso ' + process.pid +' iniciada');
});

app.get('/', (req, res) =>{
    res.send('ruta main backend')
});

//handle
app.use((err, req, res, next)=>{
    console.log('err')
    res.status(err.status || 500).send(err.stack);
});