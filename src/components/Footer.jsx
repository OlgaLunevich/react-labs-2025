function Footer () {
    return(
        <footer>
            <div className='footerContainer'>
                <div className='infoBlock'>
                    <div className='infoLogo'>
                        <div className='logo'>
                            <img src="src/assets/logo.svg" alt="logo"/>
                        </div>
                        <div className='logoStatement'>
                            <div className='font16'>Takeaway & Delivery template</div>
                            <div className='font15'>for small - medium businesses.</div>
                        </div>
                    </div>
                    <div className='infoMenu'>
                        <div className='columnInfo'>
                            <div className='infoTitle'>COMPANY</div>
                            <div>Home</div>
                            <div>Order</div>
                            <div>FAQ</div>
                            <div>Contact</div>
                        </div>
                        <div className='columnInfo'>
                            <div className='infoTitle'>TEMPLATE</div>
                            <div>Style Guide</div>
                            <div>Changelog</div>
                            <div>Licence</div>
                            <div>Webflow University</div>
                        </div>

                        <div className='columnInfo'>
                            <div className='infoTitle'>FLOWBASE</div>
                            <div className='singleItemInfo'>More Cloneables</div>
                        </div>
                    </div>
                </div>
                <div className='builtSocialPanel'>
                    <div className='builtPowered'>
                        <div>Built by&nbsp;</div>
                        <div className='highlightedText'>Flowbase</div>
                        <div>· Powered by&nbsp;&nbsp;</div>
                        <div className='highlightedText'>Webflow</div>
                    </div>
                    <div className='socialMediaIcons'>
                        <div>
                            <img src='src/assets/soccialMediaLogos/instagram.svg' alt='instagram'/>
                        </div>
                        <div>
                            <img src='src/assets/soccialMediaLogos/twitter.svg' alt='twitter'/>
                        </div>
                        <div>
                            <img src='src/assets/soccialMediaLogos/youtube.svg' alt='youtube'/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;