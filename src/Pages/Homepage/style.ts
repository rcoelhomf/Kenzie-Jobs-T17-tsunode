import { styled } from "styled-components";

export const TopDivTitle = styled.div`
    height: 278px;
    padding: 0 10vw;

    display: flex;
    align-items: center;

    background-color: var(--color-blue);
    
    .smallText {
        width: 68%;
        font-size: 36px;
        line-height: 54px;
    }
`

export const AboutDiv = styled.div`
    padding: 20px 10vw;
    gap: 20px;

    display: flex;
    flex-direction: column;

    .aboutTitleDiv {
        gap: 40px;

        display: flex;
        flex-direction: column;
    }

    .smallText {
        font-size: 36px;
        line-height: 54px;
    }

    .aboutImg {
        width: 100%;
    }
`

export const JobListDiv = styled.div`
    padding: 0 10vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    .smallText {
        font-size: 36px;
        line-height: 54px;
        text-align: center;
    }
`