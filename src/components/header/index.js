import React, { useContext } from 'react'

import './Header.scss'
import { Link } from 'react-router-dom'
import logoImage from '../../imgs/shib_logo_header.png'
import RefContext from '../../common/refContext'

const Header = () => {
    const refBox = useContext(RefContext);
    return (
        <nav className="header">
            <div className="logo-area">
                <img className="logo-image" src={logoImage} alt="amazon banner" width="10px" height="10px" />
                <span className="name-token">NEMO TOKEN</span>
            </div>
            <div className="header__nav" >
                <Link to="/" className="header__link">
                    <div className="header__option" onClick={() => {
                        refBox.ecoAreaRef?.current.scrollIntoView({ behavior: "smooth" })
                    }}>
                        <span className="header__optionLineTwo" >Ecosystem</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option" onClick={() => {
                        refBox.howtoBuyRef?.current.scrollIntoView({ behavior: "smooth" })
                    }}>
                        <span className="header__optionLineTwo" >Buy</span>
                    </div>
                </Link>
                <Link to="/" className="header__link" >
                    <div className="header__option" onClick={() => {
                        refBox.swapRef?.current.scrollIntoView({ behavior: "smooth" })
                    }}>
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