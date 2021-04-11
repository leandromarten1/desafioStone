const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

const PORT = 3001;
app.listen(PORT, () => console.log(`Running server on port ${PORT}!`));
