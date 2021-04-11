const router = require('express').Router();
const { Users } = require('../models');
const { authentication } = require('../middlewares');

const bcrypt = require('bcrypt');

router.get('/', authentication, async (_req, res) => {
  const users = await Users.findAll();
  try {
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
});

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const salt = 10;
  try {
    bcrypt.hash(password, salt, async (_err, hash) => {
      await Users.create({ nome, email, password: hash });
    });
    return res.status(201).json({ message: 'user created successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', err });
  }
});

router.put('/:id', authentication, async (req, res) => {
  const { name, email, password } = req.body;
  const { id } = req.params;

  const isUser = await Users.findByPk(id);
  if (!isUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  try {
    await Users.update({ name, email, password }, { where: { id } });
    return res.status(200).json({ message: 'User updated' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', err });
  }
});

router.patch('/:id', authentication, async (req, res) => {
  const { favorites } = req.body;
  const { id } = req.params;

  const isUser = await Users.findByPk(id);
  if (!isUser) {
    return res.status(404).json({ message: 'User not found' });
  }
  try {
    await Users.update({ favorites }, { where: { id } });
    return res.status(200).json({ message: 'User updated' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', err });
  }
});

module.exports = router;
