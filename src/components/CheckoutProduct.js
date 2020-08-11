import React from 'react'
import './CheckoutProduct.css'
import numeral from 'numeral'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,title,image,price,rating}) {

    const [{basket}, dispatch] = useStateValue()

    const removeFromCart = () => {
        // remove item from cart...
        dispatch({
            type:'REMOVE_FROM_CART',
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{numeral(price).format("0,0")}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐️</p>
                            ))
                    }
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
