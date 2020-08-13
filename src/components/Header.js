import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Search, ShoppingCart } from '@material-ui/icons'
import { useStateValue } from './StateProvider'
import { auth } from '../firebase'

function Header() {

    const [{ cart, user }, dispatch] = useStateValue()

    const login = () => {
        if(user) {
            auth.signOut()
        }
    }

    return (
        <nav className="header">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    className="header__logo" alt="Amazon Home" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" />
                <Search className="header__searchIcon" />
            </div>
            <div className="header__nav">

                <Link className="header__link" to={!user && "/login"}>
                    <div onClick={login} className="header__options">
                        <span className="header__optionLineOne">{ user ? `Hello, ${user?.email}` : 'Hello'}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>


                <Link className="header__link" to="/">
                    <div className="header__options">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>


                <Link className="header__link" to="/login">
                    <div className="header__options">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingCart />
                        <span className="header__optionLineTwo header__basketCount">{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
