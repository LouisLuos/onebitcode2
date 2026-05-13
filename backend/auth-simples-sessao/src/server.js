const express = require("express")
const path = require("node:path")
const router = require("./routes")
const PORT = 3000
const session = require("express-session")

session
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'palavra-secreta',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(router)

app.listen(PORT, () => {
    console.log("server incia")
})
