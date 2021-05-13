import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss';
import shibaHead from '../../imgs/shib_logo_header.png'

const ContentBox = ({title, ref, children}) => {
    return (
        <div className="content-box" ref={ref}>
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
