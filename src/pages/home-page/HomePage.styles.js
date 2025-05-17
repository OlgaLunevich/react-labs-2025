import styled from 'styled-components';
import bgShape from '../../assets/background-images-shapes/BG-Shape-Home-page.svg';

export const HomeMain = styled.main`
    display: flex;
    width: 100vw;
    justify-content: center;
    background-image: url("${bgShape}");
    background-size: cover;
    height: 820px;
    align-items: center;
`;

export const HomeMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 581px;
    width: 85%;
`;

export const HomeInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 494px;
`;

export const HomeTitle = styled.div`
    font-size: 60px;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 1.8px;
    width: 590px;
    height: 180px;
    white-space: normal;
    word-break: normal;
    overflow-wrap: break-word;
`;

export const HomeHighlightedText = styled.span`
    color: #35b8be;
`;

export const HomeDescription = styled.div`
    color: #546285;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.36px;
    width: 539px;
    height: 73px;
`;

export const HomeOrderButton = styled.button`
    background-color: #35b8be;
    color: #ffffff;
    height: 60px;
    width: 193px;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    border-radius: 6px;
    cursor: pointer;
`;

export const HomeReviewSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 282px;
    height: 57px;
`;

export const HomeReviewStatistic = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
`;

export const HomeImgSection = styled.div`
    img {
        width: 100%;
        height: auto;
    }
`;