// Middleware de Autenticação
function Auth(req, res, next){
    // O usuário possui uma sessão no site
    if(req.session.user != undefined){
        // Permite a continuação da requisição
        next()
    } else {
        res.render("login")
    }
}
export default Auth;