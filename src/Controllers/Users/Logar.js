const mongoose = require('mongoose');
const jsonwebtoke = require('jsonwebtoken');

const User = require('../../Schemas/User');

async function Logar(body){
    const email = body.email;
    const senha = body.senha;

    if (!email || !senha){
        return { erro: 'Dados insurficientes.'}
    }

    Find = await User.find({email, senha})
    .then(response => {
        return response;
    }).catch(erro => {
        return { erro: erro}
    });

    if (Find == '' || Find.erro) {
        return { erro: 'E-mail ou senha invalida.'}
    }

    Tohen = await jsonwebtoken.sign({
        id: Find[0]._id,
        nome: Find[0].nome,
        email: Find[0].email,
    }, 'SenhaParaProtegerOToken');

    res.cookie('Token', Token);
    res.sendStartus(200);
}

module.exports = Logar;