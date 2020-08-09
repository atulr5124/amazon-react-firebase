import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {

    const [{cart}] = useStateValue()

    return (
        <div className="checkout">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonPay/AugART2020/SBI_ILM_640x45._CB408837258_.jpg" alt="" className="checkout__ad" />
            {cart?.length === 0 ? (
                <div>
                    <h2>Your shopping cart is empty.</h2>
                    <p>You have no items in your cart. To buy items, click on "Add to Cart" button next to the item.</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Cart</h2>
                    {cart.map(item => (
                        <CheckoutProduct 
                        item = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Checkout
