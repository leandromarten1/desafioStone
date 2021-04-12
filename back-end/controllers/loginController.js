const router = require('express').Router();
const { Users } = require('../models');
const { generateToken } = require('../middlewares');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ where: { email } });

  if (!user) {
    return res.status(401).json({ message: 'Invalid Email' });
  }

  try {
    const { password: pwd, ...userWithoutPassword } = user.dataValues;
    bcrypt.compare(password, pwd, (_err, result) => {
      if (!result) {
        return res.status(401).json({ message: 'Invalid Password' });
      }
      if (user && result) {
        const token = generateToken(userWithoutPassword);
        return res.status(200).json({ token, userWithoutPassword });
      }
    });
  } catch (err) {
    return res.status(500).json({ message: 'Server Error', err });
  }
});

module.exports = router;
