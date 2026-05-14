const express = require('express')
const users = require('../models/users')
const jwt = require('jsonwebtoken')

const authRouter = express.Router()

const secretKey = 'this-is-ellon-musk' // deveria ser algo como: i-32fi2-3j-23ng032j9gj93gni2in3!()#H)!IHEN@INF0r3ib3r

authRouter.post('/register', (req, res) => {
    const { username, password } = req.body

    const newUser = { username, password }
    users.push(newUser)

    res.status(201).json(newUser)
})

authRouter.post('/login', (req, res) => {
  const { username, password } = req.body

  const user = users.find(user => user.username === username)
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const payload = { username }
  const token = jwt.sign(payload, secretKey, { expiresIn: "1hr" } )
  
  res.json(token)
})

module.exports = authRouter