import React from 'react'
import './Product.css'
import numeral from 'numeral'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {

    const [{cart}, dispatch] = useStateValue()

    const addToCart = () => {
        // add item to basket
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id, title, image, price, rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__">
                    <small>₹</small>
                    <strong>{numeral(price).format("0,0")}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐️</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt={title} />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
