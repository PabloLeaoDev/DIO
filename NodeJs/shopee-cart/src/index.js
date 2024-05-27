import * as cartService from './services/cart.js'
import createItem from "./services/item.js"

let myCart = []
let myWishList = []

console.log('Welcome to the your Shopee Cart!')

const item1 = await createItem('HotWheels Ferrari', 20.99, 1)
const item2 = await createItem('HotWheels Lamborghini', 34.99, 3)
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.remItem(myCart, item2.name)
await cartService.displayCart(myCart)
// await cartService.delItem(myCart, item2.name)
cartService.calcTotal(myCart)