const jwt = require ('jsonwebtoken')
const users = require('../models/users')

const secretKey = 'this-is-ellon-musk' 

const authMiddleare = (req, res, next) => {
    const authHeader = req.headers.authorization
    console.log(authHeader)
    if(!authHeader){
        return res.status(401).json({ message: 'precisa de autorização com o token'})
    }
    const token = authHeader.split(' ')[1]
    
    try {
      const decodedToken = jwt.verify(token, secretKey)
      console.log(decodedToken)

      const user = users.find(user => user.username === decodedToken.username)
      if(user){
        req.authorUser = user
        next()
      } else {
        return res.status(401).json({ message: "usuário inválido"})
      }
      
    } catch (error) {
        return res.status(401).json({ message: "token inválido"})
    }

    
}

module.exports = authMiddleare