import React from 'react'
import PropTypes from 'prop-types'
import bannerImg from '../imgs/banner.jpg'
import './Home.scss'
import shibaImg from '../imgs/shiba-full-img.png'
import ContentBox from '../components/contentbox'

function Home(props) {
    return (
        <div className="home">
            {/* <img className="home__image" src={bannerImg} alt="amazon banner" /> */}
            <div className="pre-content">
                <div className="pre-content__left">
                    <span className="pre-content__text1">
                        Decentralized Meme Tokens
                        that grew into a vibrant ecosystem
                    </span>
                    <span className="pre-content__text2">
                        ShibaSwap. Fun tokens. Artist incubator.
                        Growing 300k+ Community <br />
                        & more on the horizon!
                    </span>
                    <button className="pre-content__button">READ OUR WOOFPAPER!</button>
                </div>
                <div className="pre-content__right">
                    <img className="shiba-img" src={shibaImg} />
                </div>
            </div>
            <div className="body-content">
                <ContentBox title="Ecosystem">
                    ⦿ SHIB is an experiment in decentralized spontaneous community building. SHIB token is our first token and allows users to hold Billions or even Trillions of them.  Nicknamed the DOGECOIN KILLER, this ERC-20 ONLY token can remain well under a penny and still outpace Dogecoin in a small amount of time (relatively speaking). Popular worldwide, and already up thousands of percent, Shiba token ($Shib) is the first cryptocurrency token to be listed and incentivized on ShibaSwap, our decentralized exchange.

                    We locked the 50% of the total supply to Uniswap and threw away the keys!
                    The remaining 50% was burned to Vitalik Buterin and we were the first project following this path, so everyone has to buy on the open market, ensuring a fair and complete distribution where devs don't own team tokens they can dump on the community.
                </ContentBox>
                <ContentBox title="HO​W TO BUY">
                    ⦿ SHIB is an experiment in decentralized spontaneous community building. SHIB token is our first token and allows users to hold Billions or even Trillions of them.  Nicknamed the DOGECOIN KILLER, this ERC-20 ONLY token can remain well under a penny and still outpace Dogecoin in a small amount of time (relatively speaking). Popular worldwide, and already up thousands of percent, Shiba token ($Shib) is the first cryptocurrency token to be listed and incentivized on ShibaSwap, our decentralized exchange.

                    We locked the 50% of the total supply to Uniswap and threw away the keys!
                    The remaining 50% was burned to Vitalik Buterin and we were the first project following this path, so everyone has to buy on the open market, ensuring a fair and complete distribution where devs don't own team tokens they can dump on the community.
                </ContentBox> 
                <ContentBox title="SHIBA Swap">
                    ⦿ SHIB is an experiment in decentralized spontaneous community building. SHIB token is our first token and allows users to hold Billions or even Trillions of them.  Nicknamed the DOGECOIN KILLER, this ERC-20 ONLY token can remain well under a penny and still outpace Dogecoin in a small amount of time (relatively speaking). Popular worldwide, and already up thousands of percent, Shiba token ($Shib) is the first cryptocurrency token to be listed and incentivized on ShibaSwap, our decentralized exchange.

                    We locked the 50% of the total supply to Uniswap and threw away the keys!
                    The remaining 50% was burned to Vitalik Buterin and we were the first project following this path, so everyone has to buy on the open market, ensuring a fair and complete distribution where devs don't own team tokens they can dump on the community.
                </ContentBox> 
                <ContentBox title="RESCUE">
                    ⦿ SHIB is an experiment in decentralized spontaneous community building. SHIB token is our first token and allows users to hold Billions or even Trillions of them.  Nicknamed the DOGECOIN KILLER, this ERC-20 ONLY token can remain well under a penny and still outpace Dogecoin in a small amount of time (relatively speaking). Popular worldwide, and already up thousands of percent, Shiba token ($Shib) is the first cryptocurrency token to be listed and incentivized on ShibaSwap, our decentralized exchange.

                    We locked the 50% of the total supply to Uniswap and threw away the keys!
                    The remaining 50% was burned to Vitalik Buterin and we were the first project following this path, so everyone has to buy on the open market, ensuring a fair and complete distribution where devs don't own team tokens they can dump on the community.
                </ContentBox>
            </div>
        </div >
    )
}

Home.propTypes = {

}

export default Home

