import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss';
import shibaHead from '../../imgs/nemo_circle.png'

const ContentBox = ({title, forwardedRef, children}) => {
    return (
        <div className="content-box" ref={forwardedRef}>
            <div className="content-box__title">
                <img src={shibaHead} className ="content-box__shiba-header"/>
                <span className="content-box__title-screen">{title}</span>
            </div>
            {children}
        </div>
    )
}

ContentBox.propTypes = {

}

export default ContentBox
