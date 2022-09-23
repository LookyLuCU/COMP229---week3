//
const connect = require('connect');

//instantiate app server
const app = connect();

//customer middleware (function)
function helloWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Worlds')
}

//customer middleware (function)
function goodbyeWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bye Worlds')
}

//app.use('/', helloWorld);
app.use('/hello', helloWorld);
app.use('/bye', goodbyeWorld);

//run app
app.listen(3000);

console.log('Server running at http://localhost:3000');