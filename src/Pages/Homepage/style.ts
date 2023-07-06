import { styled } from "styled-components";

export const TopDivTitle = styled.div`
    height: 278px;
    padding: 0 10vw;

    display: flex;
    align-items: center;

    background-color: var(--color-blue);
    
    .smallText {
        width: 68%;
        font-size: clamp(2.25rem, 1.9rem + 1.75vw, 4rem);
        line-height: 54px;
    }
`

export const AboutDiv = styled.div`
    padding: 20px 10vw;
    gap: 20px;

    display: flex;
    flex-direction: column;

    @media (min-width: 1025px) {
        padding: 100px 10vw;
        gap: 100px;

        flex-direction: row;
    }

    .aboutTitleDiv {
        gap: 40px;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .smallText {
        font-size: clamp(2.25rem, 1.9rem + 1.75vw, 4rem);
        line-height: 54px;
    }

    .aboutImg {
        width: 100%;
        max-width: 654px;
        max-height: 489px;
    }
`

export const JobListDiv = styled.div`
    padding: 0 10vw;
    gap: 6vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    .smallText {
        font-size: clamp(2.25rem, 1.9rem + 1.75vw, 4rem);
        line-height: 54px;
        text-align: center;
    }
`

export const JobRealList = styled.ul`
    width: 100%;
    max-width: 1200px;
    padding-bottom: 40px;
    gap: 40px;

    display: flex;
    flex-direction: column;
    
    .listItem {
        width: 100%;

        display: flex;
        align-items: center;

        img {
            align-self: self-start;

            cursor: pointer;
        }
    }

    .allTextsItem {
        width: 100%;
    }

    .topItemDiv {
        @media (min-width: 1025px) {
            width: 100%;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    div {
        gap: 15px;

        display: flex;
        flex-direction: column;
    }

    .applyBtn {
        padding: 15px 25px;

        align-self: flex-start;

        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 17px;
        line-height: 21px;
        color: var(--color-blue);
        
        background-color: transparent;
        border: 1px solid var(--color-blue);
        border-radius: 255px;
        
        cursor: pointer;
    }
    
    .applyBtn:hover {
        color: var(--color-white);
        background-color: var(--color-blue);
        transition: 665ms;
    }
`