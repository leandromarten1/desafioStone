const jwt = require('jsonwebtoken');

const secret = '0a840ef45467fb3932dbf2c2896c5cbf';

const createToken = (payload) => {
  const jwtConfig = {
    expiresIn: '30m',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
};

module.exports = createToken;
