const express = require('express');
const cors = require('cors');
const app = express();

const controllers = require('./controllers');

app.use(express.json());
app.use(cors());

app.use('/login', controllers.loginController);
app.use('/user', controllers.userController);

const PORT = 3001;
app.listen(PORT, () => console.log(`Running server on port ${PORT}!`));
