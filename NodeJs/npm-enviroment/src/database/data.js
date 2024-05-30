async function connectToDB(user, password) {
    if(user === process.env.USERDB && password === process.env.PASSWORDDB) {
        console.log('Conexão com o Banco de Dados realizada.')
    } else {
        console.log('Não foi possível fazer conexão com o Banco de Dados')
    }
}

export default connectToDB