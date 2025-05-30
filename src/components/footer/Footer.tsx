import React from 'react';
import './footer.css';


const Footer= () => {
    return(
        <footer>
            <div className='footerContainer'>
                <div className='infoBlock'>
                    <div className='infoLogo'>
                        <div className='logo'>
                            <img src='src/assets/logo.svg' alt='logo'/>
                        </div>
                        <div className='logoStatement'>
                            <div className='font16'>Takeaway & Delivery template</div>
                            <div className='font15'>for small - medium businesses.</div>
                        </div>
                    </div>
                    <div className='infoMenu'>
                        <div className='columnInfo'>
                            <div className='infoTitle'>COMPANY</div>
                            <div><a className="disableLink" href={"#"}>Home</a></div>
                            <div><a className="disableLink" href={"#"}>Order</a></div>
                            <div><a className="disableLink" href={"#"}>FAQ</a></div>
                            <div><a className="disableLink" href={"#"}>Contact</a></div>
                        </div>
                        <div className='columnInfo'>
                            <div className='infoTitle'>TEMPLATE</div>
                            <div><a href={"https://www.google.com/"}>Style Guide</a></div>
                            <div><a href={"https://www.google.com/"}>Changelog</a></div>
                            <div><a href={"https://www.google.com/"}>Licence</a></div>
                            <div><a href={"https://www.google.com/"}>Webflow University</a></div>
                        </div>

                        <div className='columnInfo'>
                            <div className='infoTitle'>FLOWBASE</div>
                            <div className='singleItemInfo'><a className="disableLink" href={"#"}>More Cloneables</a></div>
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
                            <img src='src/assets/social-media-logos/instagram.svg' alt='instagram'/>
                        </div>
                        <div>
                            <img src='src/assets/social-media-logos/twitter.svg' alt='twitter'/>
                        </div>
                        <div>
                            <img src='src/assets/social-media-logos/youtube.svg' alt='youtube'/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;