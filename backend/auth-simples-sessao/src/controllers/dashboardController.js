module.exports = { 

    dashboard: (req, res) => {
        console.log(req.session)
        console.log(req)
        res.render('dashboard', { user: req.session.currentUser})
    },

    logout: (req, res) => {
        req.session.authenticated = false
        req.session.currentUser = null
        res.redirect('/')
    }
}