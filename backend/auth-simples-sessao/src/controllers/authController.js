const mockUsers = [
  { username: "douglas_dev", password: "hashed_password_123" },
  { username: "ana_clara", password: "security_pass_456" },
  { username: "marcos_viana", password: "hidden_key_789" },
  { username: "julia_sales", password: "safe_entry_012" },
  { username: "bruno_lima", password: "secret_access_345" }
];

module.exports = {
    // GET / 
    index: (req, res) => {
        res.render('index')
    },

    register: (req, res) => {
        const { username, password } = req.body
        const allUsers = mockUsers.find(user => user.username === username)
        if(allUsers) {
            return res.status(400).rendirect
        }

        const newUser = {
            username,
            password
        }

        mockUsers.push(newUser)
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