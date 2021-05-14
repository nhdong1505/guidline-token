import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import Button from '../button'

function Footer({ }) {
    return (
        <div className="footer" >
            <div className="title">
                COMMUNITY
            </div>
            <div className="content">
                If you'd like to donate to the Devs, send ETH, SHIB or LEASH here. Thank you for your support! WOOF!
                0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375
            </div>
            <div className="content">
                Our community keeps growing everyday.  Please join our social platforms to get updates using the links below.
                There are 150k+ people in our different groups!
            </div>
            <div className="content">
                You can connect with us from anywhere in the world because we have international groups for foreign language speakers.
            </div>
            <div className="footer--group-btn">
                <Button text="NEMO TELEGRAM" link="" styles={{ backgroundColor: 'transparent', border: "2px solid #f5691e" }} />
                <Button text="TWITTER" link="" styles={{ backgroundColor: 'transparent', border: "2px solid #f5691e" }} />
                <Button text="LEASH TELEGRAM" link="" styles={{ backgroundColor: 'transparent', border: "2px solid #f5691e" }} />
                <Button text="REDDIT" link="" styles={{ backgroundColor: 'transparent', border: "2px solid #f5691e" }} />
                <Button text="DISCORD" link="" styles={{ backgroundColor: 'transparent', border: "2px solid #f5691e" }} />
            </div>

        </div>
    )
}

Footer.propTypes = {

}

export default Footer

