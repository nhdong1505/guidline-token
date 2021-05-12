import React from 'react'

import './Header.scss'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import logoImage from '../../imgs/shib_logo_header.png'
function Header() {
    return (
        <nav className="header">
            <div className="logo-area">
                <img className="logo-image" src={logoImage} alt="amazon banner"  width="10px" height="10px"/>
                <span className="name-token">SHIBA TOKEN</span>
            </div>
            <div className="header__nav" >
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo" >Ecosystem</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo" >Buy</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo" >ShiBaSwap</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo" >Art</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo" >Rescus</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo" >Community</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header