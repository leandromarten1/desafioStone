const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const secret = '0a840ef45467fb3932dbf2c2896c5cbf';
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Invalid Token' });
    }

    const user = jwt.verify(token, secret);
    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({ message: 'Invalid Token' });
  }
};

module.exports = auth;
