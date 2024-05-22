const randomNum = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = parseInt(Math.random() * 100)
        resolve(num)
    }, 1000)
})

randomNum
    .then((value) => {
        console.log(value)
        return value * 10
    })
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('Finalizou!')
    })

console.log('Vai, FILHÃO!')