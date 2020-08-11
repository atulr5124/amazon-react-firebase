export const initialState = {
    cart: [],
    user: null
}

export const getCartTotal = (cart) => 
cart?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
            break
        case 'REMOVE_FROM_CART':
            let newCart = [...state.cart]
            const index = state.cart.findIndex((cartItems) => cartItems.id === action.id)
            if (index >= 0) {
                // item exists in cart. remove it
                newCart.splice(index, 1)
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in your cart`)
            }
            return { ...state, cart: newCart }
            break
        default:
            return state
    }
}

export default reducer