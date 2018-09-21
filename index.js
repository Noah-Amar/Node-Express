const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send("Hello World");
});


const port = process.env.PORT || 5000;
server.listen(5000, () => console.log(`API running on port ${port}`));

