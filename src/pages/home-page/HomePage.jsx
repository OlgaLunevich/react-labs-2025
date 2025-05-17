import React from 'react';
import {
    HomeMain,
    HomeMainContainer,
    HomeInfoBlock,
    HomeTitle,
    HomeHighlightedText,
    HomeDescription,
    HomeOrderButton,
    HomeReviewSection,
    HomeReviewStatistic,
    HomeImgSection
} from './HomePage.styles';

import starImg from '../../assets/star_Trustpilot.svg';
import trustpilotImg from '../../assets/Trustpilot.svg';
import homeImage from '../../assets/home-Page-image.svg';

const HomePage = () => {
    return (
        <HomeMain>
            <HomeMainContainer>
                <HomeInfoBlock>
                    <HomeTitle>
                        Beautiful food & takeaway,&nbsp;
                        <HomeHighlightedText>delivered&nbsp;</HomeHighlightedText>
                        to your door.
                    </HomeTitle>
                    <HomeDescription>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </HomeDescription>
                    <div>
                        <HomeOrderButton>Place an Order</HomeOrderButton>
                    </div>
                    <HomeReviewSection>
                        <div>
                            <img src={starImg} alt="star" />
                            <img src={trustpilotImg} alt="Trustpilot" />
                        </div>
                        <HomeReviewStatistic>
                            <HomeHighlightedText>4.8 out of 5&nbsp;</HomeHighlightedText>
                            based on 2000+ reviews
                        </HomeReviewStatistic>
                    </HomeReviewSection>
                </HomeInfoBlock>
                <HomeImgSection>
                    <img src={homeImage} alt="homePageImage" />
                </HomeImgSection>
            </HomeMainContainer>
        </HomeMain>
    );
};

export default HomePage;



// I didn't delete this code, because it may be helpful if we'll return back from styled components!!!
// In this case it'll be necessary to add to all className part "home" from the beginning.
// Or to find a better way to not cross with styles from another pages

//
// const HomePage = () => {
//     return (
//         <>
//             <main>
//                 <div className="mainContainer">
//                     <div className="infoBlock">
//                         <div className="title">
//                             Beautiful food & takeaway,&nbsp;
//                                 <span className="highlightedText">delivered&nbsp;</span>
//                             &nbsp;to your door.
//
//                         </div>
//                         <div className="description">
//                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
//                             has been the industry's standard dummy text ever since the 1500.
//                         </div>
//                         <div>
//                             <button>Place an Order</button>
//                         </div>
//                         <div className="reviewSection">
//                             <div>
//                                 <img src="src/assets/star_Trustpilot.svg" alt="star"/>
//                                 <img src="src/assets/Trustpilot.svg"  alt="Trustpilot"/>
//                             </div>
//                             <div className="reviewStatistic">
//                                 <span className="highlightedText">
//                                     4.8 out of 5&nbsp;
//                                 </span>
//                                 based on 2000+ reviews
//                             </div>
//                         </div>
//
//                     </div>
//                     <div className="imgSection">
//                         <img src='src/assets/home-Page-image.svg' alt='homePageImage'/>
//                     </div>
//                 </div>
//             </main>
//         </>
//     );
// };
// export default HomePage;