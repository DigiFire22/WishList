const express = require('express');
const date = require(__dirname+'/getDate.js'); 

const app = express();

app.get('/', (request, response) => {
    response.send('Hello, World!')
});

app.get('/getdate', (req, res) => { //req - request, res - response
    let today = date.getDate();
    res.send(today);

});

app.get('/weekday', (req, res) => {
    let weekday = date.getWeekDay();
    res.send(weekday)
});

app.get('*', (req, res) => {
    res.send('404. page not found')
});

port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
});