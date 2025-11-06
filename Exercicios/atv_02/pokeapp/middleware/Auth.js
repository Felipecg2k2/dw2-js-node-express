export const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.user) {
        return next();
    }
    res.redirect('/auth/login');
};

export const isAdmin = (req, res, next) => {
    if (req.session && req.session.user && req.session.user.isAdmin) {
        return next();
    }
    res.status(403).render('error', { 
        titulo: "Acesso Negado",
        message: "Você não tem permissão para acessar esta página." 
    });
};