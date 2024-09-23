const jwt = require('jsonwebtoken')

function validadorCookie(req, res, next) {
    const token = req.cookies.tokenTest

    if(!token){
        return res.status(401).send({mensagem: 'não autorizado'})
    }
    try {
        const decodificado  = jwt.verify(token, 'process.env.chave_criptografia')
        next();
    } catch (error) {
        return res.status(401).send({mensagem: 'não autorizado'})
    }
}

module.exports = {validadorCookie}