import qr from 'qrcode-terminal'
import chalk from 'chalk'

const handle = (err, result) => {
    if (err) {
        console.log('Houve um erro na alicação')
        return
    }

    const isSmall = result.type == 2
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green('QRCode gerado com sucesso!'))
        console.log(qrcode)
    })
}

export default handle