const authMiddleare = (req, res, next) => {
    if(req.session.authenticated){
        next()
    } else { 
        res.redirect('/')
    }
}

const isAdmin = (req, res, next) => {
    if(req.session.currentUser.role === "admin"){
        next()
    } else { 
        res.redirect('/dashboard')
    }
}


module.exports = {
    authMiddleare,
    isAdmin
}