const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken'); // make sure to install jsonwebtoken package on local machine when testing!
const { User } = require("../models");

router.post("/register", async (req, res) => { 
  const { username, password } = req.body;
  if (!username || !password) { // checks for missing username or password field
    return res
      .status(400)
      .json({ message: "Username and password are both required." });
  }
  try {
    const hashedPassword = bcrypt.hashSync(password, 10); 
    await User.create({ username, password: hashedPassword }); // creates a new user based off the User model with the given username and hashed version of the password. 
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } }); // search request for a user with the username passed into the body of the request

    if (!user) { // returns error message if the username does not exist
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password); // uses the compare method of the bcrypt package to check the password in the body of the request with the stored hashedPassword of the user from line 25's search request

    if (!isPasswordValid) { // returns error message if the password is incorrect
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: user.id },'your_jwt_secret', { expiresIn: '6h' }); 

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;