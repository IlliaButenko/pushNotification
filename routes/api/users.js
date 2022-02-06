const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');
const https = require('https')
const fs = require('fs')
const path = require('path')
const domainsFilePath = path.resolve(__dirname, '../../domains.db');

const User = require('../../models/User');
const BlockchainUser = require('../../models/BlockchainUser');
const Visitor = require('../../models/Visitor');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ error: 'User already exists' });
      }

      const avatar = normalize(
        gravatar.url(email, {
          s: '200',
          r: 'pg',
          d: 'mm'
        }),
        { forceHttps: true }
      );

      user = new User({
        name,
        email,
        avatar,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server Error' });
    }
  }
);

router.get('/all', async (req, res) => {
  const search = req.query.search;
  const page = req.query.page;
  const userCount = await Visitor.find({
    $or: [
      { user_ip: { $regex: search, $options: 'i' } },
      { country: { $regex: '.*' + search + '.*' } },
      { track_id: { $regex: '.*' + search + '.*' } },
      { device: { $regex: '.*' + search + '.*' } }
    ]
  }).countDocuments();
  const users = await Visitor.find({
    $or: [
      { user_ip: { $regex: search, $options: 'i' } },
      { country: { $regex: '.*' + search + '.*' } },
      { track_id: { $regex: '.*' + search + '.*' } },
      { device: { $regex: '.*' + search + '.*' } },
      { system: { $regex: '.*Windows.*' } },
    ]
  })
    .skip(page * 10)
    .limit(10);

  return res.json({ data: { users, userCount } })
})
router.get('/android', async (req, res) => {
  const search = req.query.search;
  const page = req.query.page;
  const userCount = await Visitor.find({
    $or: [
      { user_ip: { $regex: search, $options: 'i' } },
      { country: { $regex: '.*' + search + '.*' } },
      { track_id: { $regex: '.*' + search + '.*' } },
      { device: { $regex: '.*' + search + '.*' } }
    ],
    system: { $regex: '.*Android.*' }
  }).countDocuments();
  const users = await Visitor.find({
    $or: [
      { user_ip: { $regex: search, $options: 'i' } },
      { country: { $regex: '.*' + search + '.*' } },
      { track_id: { $regex: '.*' + search + '.*' } },
      { device: { $regex: '.*' + search + '.*' } },
    ],
    system: { $regex: '.*Android.*' }
  })
    .skip(page * 10)
    .limit(10);

  return res.json({ data: { users, userCount } })
})
router.get('/windows', async (req, res) => {
  const search = req.query.search;
  const page = req.query.page;
  const userCount = await Visitor.find({
    $or: [
      { user_ip: { $regex: search, $options: 'i' } },
      { country: { $regex: '.*' + search + '.*' } },
      { track_id: { $regex: '.*' + search + '.*' } },
      { device: { $regex: '.*' + search + '.*' } },
    ],
    system: { $regex: '.*Windows.*' }
  }).countDocuments();
  const users = await Visitor.find({
    $or: [
      { user_ip: { $regex: search, $options: 'i' } },
      { country: { $regex: '.*' + search + '.*' } },
      { track_id: { $regex: '.*' + search + '.*' } },
      { device: { $regex: '.*' + search + '.*' } },
    ],
    system: { $regex: '.*Windows.*' }
  })
    .skip(page * 10)
    .limit(10);

  return res.json({ data: { users, userCount } })
})
router.get('/mac', async (req, res) => {
  const search = req.query.search;
  const page = req.query.page;
  const userCount = await Visitor.find({
    $or: [
      { user_ip: { $regex: search, $options: 'i' } },
      { country: { $regex: '.*' + search + '.*' } },
      { track_id: { $regex: '.*' + search + '.*' } },
      { device: { $regex: '.*' + search + '.*' } },
    ],
    system: { $regex: '.*Mac.*' }
  }).countDocuments();
  const users = await Visitor.find({
    $or: [
      { user_ip: { $regex: search, $options: 'i' } },
      { country: { $regex: '.*' + search + '.*' } },
      { track_id: { $regex: '.*' + search + '.*' } },
      { device: { $regex: '.*' + search + '.*' } },
    ],
    system: { $regex: '.*Mac.*' }
  })
    .skip(page * 10)
    .limit(10);

  return res.json({ data: { users, userCount } })
})
router.get('/others', async (req, res) => {
  const search = req.query.search;
  const page = req.query.page;
  const userCount = await Visitor.find({
    $or: [
      { user_ip: { $regex: search, $options: 'i' } },
      { country: { $regex: '.*' + search + '.*' } },
      { track_id: { $regex: '.*' + search + '.*' } },
      { device: { $regex: '.*' + search + '.*' } },
    ],
    system: { $regex: '.*Others.*' }
  }).countDocuments();
  const users = await Visitor.find({
    $or: [
      { user_ip: { $regex: search, $options: 'i' } },
      { country: { $regex: '.*' + search + '.*' } },
      { track_id: { $regex: '.*' + search + '.*' } },
      { device: { $regex: '.*' + search + '.*' } },
    ],
    system: { $regex: '.*Others.*' }
  })
    .skip(page * 10)
    .limit(10);

  return res.json({ data: { users, userCount } })
})
router.get('/statistic', async (req, res) => {
  const andCount = await Visitor.find({ system: { $regex: '.*Android.*' } }).countDocuments();
  const winCount = await Visitor.find({ system: { $regex: '.*Windows.*' } }).countDocuments();
  const macCount = await Visitor.find({ system: { $regex: '.*Mac.*' } }).countDocuments();
  const othCount = await Visitor.find({ system: { $regex: '.*Others.*' } }).countDocuments();

  return res.json({ data: { andCount, winCount, macCount, othCount } })
})

module.exports = router;
