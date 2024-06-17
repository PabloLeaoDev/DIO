const typeUser = {
    admin: 'Seja bem vindo admin',
    student: 'Você é um estudante',
    viewer: 'Você pode vizualizar'
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser])
}

validateUser('admin')