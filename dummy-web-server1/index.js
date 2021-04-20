const app = require('express')();

app.get('/', (req, res) => {
    res.send("Hello from dummy server 1!");
});

app.listen(2222, () => console.log("Listening on port 2222."));