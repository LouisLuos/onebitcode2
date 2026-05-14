const express = require('express')
const authRouter = require('./routes/auth')
const protectedRouter = require('./routes/protected')
const PORT = 3000
const app = express()

app.use(express.json())

app.use('/auth', authRouter)
app.use('/protected', protectedRouter)

app.listen(PORT, () => {
    console.log('server iniciado')
})