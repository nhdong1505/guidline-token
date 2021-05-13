import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function IconTextClick({ text, imageUrl, link }) {
    return (
        <div className="icon-text" onClick={() => { window.open(link, "_blank") }} >
            {/* <a href="google.com"> */}
            <img src={imageUrl} alt="imgIcon" width={77} height={77} />
            <div>{text}</div>
            {/* </a> */}
        </div>
    )
}

IconTextClick.propTypes = {

}

export default IconTextClick

