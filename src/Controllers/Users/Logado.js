const jsonwebtoken = require('jsonwebtoken');

async function Logado(req, res, next){

    auth = req.cookie.Token || null;

    if (typeof(Auth) == 'underfined' || Auth == '' || Auth == null){
        return res.send({ erro: { login: 'Não autorizado.'} });
    } else {

        try{
            token = await jsonwebtoken.verify(Auth, 'SenhaParaProtegerOTohen');
            next();
        } catch(err){
            return res.send({ erro: { login: 'Não autorizado.'}});
        }
    }
}
 module.exports = logado