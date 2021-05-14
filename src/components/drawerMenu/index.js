import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import humbergerIcon from '../../imgs/menu-icon.png'
import RefContext from '../../common/refContext'

const DrawMenu = ({ }) => {
    const refBox = useContext(RefContext);
    const [widthDrawer, setWidthDrawer] = useState(0);
    const [isClickMenu, setIsClickMenu] = useState(true)
    return (
        <div className="drawer-menu">
            <div onClick={() => {
                if (isClickMenu) {
                    setWidthDrawer(250)
                } else {
                    setWidthDrawer(0)
                }
                setIsClickMenu(!isClickMenu)
            }}>
                <img className="menu-icon" src={humbergerIcon} alt="humberger-icon" />
            </div>

            <div id="mySidenav" className="sidenav" style={{ width: `${widthDrawer}px` }}>
                <a className="closebtn" onClick={() => {
                    setWidthDrawer(0)
                }}><span>&times;</span></a>

                <div className="drawer-menu__option" onClick={() => {
                    refBox.ecoAreaRef?.current.scrollIntoView({ behavior: "smooth" })
                }}>
                    Ecosystem
                    </div>
                <div className="drawer-menu__option" onClick={() => {
                    refBox.howtoBuyRef?.current.scrollIntoView({ behavior: "smooth" })
                }}>
                    Buy
                    </div>
                <div className="drawer-menu__option" onClick={() => {
                    refBox.swapRef?.current.scrollIntoView({ behavior: "smooth" })
                }}>
                    ShiBaSwap
                    </div>
                <div className="drawer-menu__option">
                    Art
                    </div>

                <div className="drawer-menu__option">
                    Rescus
                    </div>

                <div className="drawer-menu__option">
                    Community
                    </div>
            </div>
        </div>
    )
}

DrawMenu.propTypes = {

}

export default DrawMenu

