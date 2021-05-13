import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function Button({ text, link }) {
    return (
        <div className="button-style" onClick={() => { window.open(link, "_blank") }} >
            <div>{text}</div>
        </div>
    )
}

Button.propTypes = {

}

export default Button

