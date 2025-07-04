import styled from 'styled-components';

export const HomeMain = styled.main`
    position: relative;
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    height: 820px;
    overflow: hidden;
    background: var(--background);

`;

export const HomeBgImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: var(--home-bg-filter, none);
        transition: filter 0.3s ease;
    }
`;

export const HomeBackgroundLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--home-bg-overlay, transparent);
    z-index: 1;
    pointer-events: none;
`;

export const HomeMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 581px;
    width: 85%;
    z-index: 2;
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
    width: 600px;
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
    
    img{
        filter: var(--home-bg-filter, none);
        transition: filter 0.3s ease;
    }    
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