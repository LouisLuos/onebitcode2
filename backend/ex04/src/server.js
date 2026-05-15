const express = require('express')
const authRouter = require('./routes/authRouter')
const adminRouter = require('./routes/adminRoutes')
const PORT = 3000
const app = express()

app.use(express.json())
app.use(authRouter)
app.use("/admin", adminRouter)


app.listen(PORT, () => {
    console.log('server iniciado')
})