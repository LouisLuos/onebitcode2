const mockUsers = require("../models/users")


module.exports = {
    // GET / 
    index: (req, res) => {
        res.render('index')
    },
    // POST /auth/login
    register: (req, res) => {
        const { username, password } = req.body
        const allUsers = mockUsers.find(user => user.username === username)
        if(allUsers) {
            return res.status(400).redirect('/')
        }

        const newUser = {
            username,
            password,
            role: "standard"
        }
        
        mockUsers.push(newUser)
        req.session.authenticated = true
        req.session.currentUser = newUser
        res.status(201).redirect('/dashboard')
    },

    login: (req, res) => {
        const { username, password} = req.body

        const user = mockUsers.find(user => user.username === username)

        if(!user) return res.redirect('/')
        
        if(user.password !== password) return res.redirect('/')

        req.session.authenticated = true
        req.session.currentUser = user

        res.redirect('/dashboard')
    }
}