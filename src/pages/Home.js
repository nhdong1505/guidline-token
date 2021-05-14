import React, {useRef , useContext} from 'react'
import PropTypes from 'prop-types'
import './Home.scss'
import shibaImg from '../imgs/shiba-full-img.png'
import ContentBox from '../components/contentbox'
import IconTextClick from '../components/iconTextClick'
import uniSwap from '../imgs/uniswap_logo.png'
import wallet from '../imgs/wallet.png'
import Button from '../components/button'
import shibaAu from '../imgs/shib_astronaut.png'
import bone from '../imgs/bone_graphic.png'
import Footer from '../components/footer'
import RefContext from '../common/refContext'

const Home = (props) => {
    const refBox = useContext(RefContext);
    return (
        <div className="home">
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
                    <button className="pre-content__button" onClick={()=>{
                    }} >READ OUR WOOFPAPER!</button>
                </div>
                <div className="pre-content__right">
                    <img className="shiba-img" src={shibaImg} />
                </div>
            </div>
            <div className="body-content">
                <ContentBox title="Ecosystem" forwardedRef={refBox.ecoAreaRef} >
                    <div className="body-content__text">
                        <span className="focus"> ⦿ SHIB </span>is an experiment in decentralized spontaneous community building. SHIB token is our first token and allows users to hold Billions or even Trillions of them.  Nicknamed the DOGECOIN KILLER, this ERC-20 ONLY token can remain well under a penny and still outpace Dogecoin in a small amount of time (relatively speaking). Popular worldwide, and already up thousands of percent, Shiba token ($Shib) is the first cryptocurrency token to be listed and incentivized on ShibaSwap, our decentralized exchange.

                    We locked the 50% of the total supply to Uniswap and threw away the keys!
                    The remaining 50% was burned to Vitalik Buterin and we were the first project following this path, so everyone has to buy on the open market, ensuring a fair and complete distribution where devs don't own team tokens they can dump on the community.
                    </div>
                    <div className="body-content__text flex-row flex-around">
                        <IconTextClick text="Liquidity Locked to Uniswap" imageUrl={uniSwap} link="https://testnet.bscscan.com/address/0xf85072dad39e5fa4b6d872aacdccd87a282bfe21" />
                        <IconTextClick text="First burn to VB" imageUrl={wallet} link="https://testnet.bscscan.com/address/0xf85072dad39e5fa4b6d872aacdccd87a282bfe21" />
                        <IconTextClick text="Sencond burn to VB" imageUrl={wallet} link="https://testnet.bscscan.com/address/0xf85072dad39e5fa4b6d872aacdccd87a282bfe21" />
                    </div>
                    <div className="body-content__text">
                        <span className="focus"> ⦿  LEASH  </span> was originally set to be a rebase token pegged to the price of Dogecoin. Now, it has been unleashed and will not rebase.
With a total circulation of ONLY 100k tokens, it has the opposite appeal to Shib (which has a much larger supply).
The second token incentivized on the swap offers special rewards for those who provide liquidity.
<br /></div>
                    <div className="body-content__text">
                        <span className="focus"> ⦿  BONE  </span> Dogecoin Killer is our next token! COMING SOON, Shiba Inu Bone, takes the power of Defi to the next level.
Details on how to acquire this token, tokenomics and incentives will be announced with the reveal of ShibaSwap
</div>
                </ContentBox>

                <ContentBox title="HO​W TO BUY" forwardedRef={refBox.howtoBuyRef}>
                    <div className="body-content__text">
                        The only place to buy or sell <span className="focus"> SHIB </span> or <span className="focus">LEASH</span> safely is on Uniswap.
                        <br />
                        There are some centralized exchanges that have listed SHIB, but CEXs have a history of locking funds.
                        <br />
                        If you can, it is safer to trade on a decentralized exchange like Uniswap or 1inch.
                        <br />
                        BONE is not available yet , but will be able to acquire soon.
                    </div>

                    <div className="body-content--btn-group">
                        <Button text="BUY SHIL" link="/notfound" />
                        <Button text="BUY LEASH" link="/notfound" />
                    </div>
                    <img src={shibaAu} alt="icon" className="body-content--img__buy" />
                </ContentBox>


                <ContentBox title="SHIBA Swap" forwardedRef={refBox.swapRef} >
                    <div className="body-content__text" >
                        <span className="focus"> ⦿ SHIB </span>is an experiment in decentralized spontaneous community building. SHIB token is our first token and allows users to hold Billions or even Trillions of them.  Nicknamed the DOGECOIN KILLER, this ERC-20 ONLY token can remain well under a penny and still outpace Dogecoin in a small amount of time (relatively speaking). Popular worldwide, and already up thousands of percent, Shiba token ($Shib) is the first cryptocurrency token to be listed and incentivized on ShibaSwap, our decentralized exchange.

                    We locked the 50% of the total supply to Uniswap and threw away the keys!
                    The remaining 50% was burned to Vitalik Buterin and we were the first project following this path, so everyone has to buy on the open market, ensuring a fair and complete distribution where devs don't own team tokens they can dump on the community.
                    </div>

                    <div className="body-content__text">
                        <span className="focus"> ⦿  LEASH  </span> was originally set to be a rebase token pegged to the price of Dogecoin. Now, it has been unleashed and will not rebase.
With a total circulation of ONLY 100k tokens, it has the opposite appeal to Shib (which has a much larger supply).
The second token incentivized on the swap offers special rewards for those who provide liquidity.
<br /></div>
                    <div className="body-content__text">
                        <span className="focus"> ⦿  BONE  </span> Dogecoin Killer is our next token! COMING SOON, Shiba Inu Bone, takes the power of Defi to the next level.
Details on how to acquire this token, tokenomics and incentives will be announced with the reveal of ShibaSwap
</div>

                </ContentBox>

                <ContentBox title="ART" >
                    <div className="body-content__text" >
                        Our artist incubator invited the best artists in the Shiba Inu community to join us on a special project.
                        <br/>
                        We invite speakers from various genres and platform to speak with our new Shiba artists, build camaraderie and foster lasting relationships over a few weeks. These artists will lead the artistic Shiba movement as we explore how to bring our unique position into the NFT market.
                        <br/>
Over 75 entrants applied and we are excited to update the community on our cohort, portfolio day and our first official NFT ventures . </div>
                    <img src={bone} className="body-content--img__art"/>
                </ContentBox>

                <ContentBox title="RESCUE">
                    <div className="body-content__text">
                        <span className="focus"> ⦿ SHIB </span>is an experiment in decentralized spontaneous community building. SHIB token is our first token and allows users to hold Billions or even Trillions of them.  Nicknamed the DOGECOIN KILLER, this ERC-20 ONLY token can remain well under a penny and still outpace Dogecoin in a small amount of time (relatively speaking). Popular worldwide, and already up thousands of percent, Shiba token ($Shib) is the first cryptocurrency token to be listed and incentivized on ShibaSwap, our decentralized exchange.

                    We locked the 50% of the total supply to Uniswap and threw away the keys!
                    The  remaining 50% was burned to Vitalik Buterin and we were the first project following this path, so everyone has to buy on the open market, ensuring a fair and complete distribution where devs don't own team tokens they can dump on the community.
                    </div>
                    <div className="body-content__text">
                        <span className="focus"> ⦿  LEASH  </span> was originally set to be a rebase token pegged to the price of Dogecoin. Now, it has been unleashed and will not rebase.
With a total circulation of ONLY 100k tokens, it has the opposite appeal to Shib (which has a much larger supply).
The second token incentivized on the swap offers special rewards for those who provide liquidity.
<br /></div>
                    <div className="body-content__text">
                        <span className="focus"> ⦿  BONE  </span> Dogecoin Killer is our next token! COMING SOON, Shiba Inu Bone, takes the power of Defi to the next level.
Details on how to acquire this token, tokenomics and incentives will be announced with the reveal of ShibaSwap
</div>
                </ContentBox>
            </div>
            <Footer />
        </div >
    )
}

Home.propTypes = {

}

export default Home

