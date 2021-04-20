const app = require('express')();

app.get('/', (req, res) => {
    res.send('Hello from dummy server 2!');
});

app.listen(3333, () => console.log('Listening on port 3333.'));