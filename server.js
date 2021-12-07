const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Hello, World!')
})





port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
});