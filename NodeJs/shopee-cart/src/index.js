import * as cartService from './services/cart.js'
import createItem from "./services/item.js"

let myCart = []
let myWishList = []

console.log('Welcome to the your Shopee Cart!')

const item1 = await createItem('HotWheels Ferrari', 20.99, 2)
const item2 = await createItem('HotWheels Lamborghini', 34.99, 4)
const item3 = await createItem('Dumbbells', 151, 2)
const item4 = await createItem('PC Gamer', 2600, 1)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.addItem(myWishList, item3)
await cartService.addItem(myWishList, item4)

await cartService.remItem(myCart, item2.name)
await cartService.displayCart(myCart)
await cartService.delItem(myWishList, item3.name)
cartService.calcTotal(myCart)
await cartService.displayCart(myWishList)
cartService.calcTotal(myWishList)