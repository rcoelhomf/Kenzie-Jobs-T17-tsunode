import styled from "styled-components"



export const StyledDiv = styled.header`
    width: 100%;
    height: 100px;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    padding: 0 10vw;

    @media(min-width: 1025px) {
        flex-direction: row;
        align-items: center;
    }
`

export const InnerDiv = styled.div<{ loginlinkcolor?: string }>`
    width: 100%;
    
    display: flex;
    justify-content: center;
    
    @media(min-width: 1025px) {
        gap: 30px;
        justify-content: flex-end;
        align-items: center;
    }

    .loginLink {
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        align-self: center;
        color: ${props => props.loginlinkcolor || "var(--color-black)"};

        cursor: pointer;
    }

    .loginLink:hover {
        color: var(--color-blue);
    }

    .invisible {
        display: none;
        padding: 15px 20px;

        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: var(--color-white);
        text-decoration: none;
        background-color: var(--color-blue);
        border: 1px solid var(--color-blue);
        border-radius: 255px;

        cursor: pointer;

        @media(min-width: 1025px) {
            display: block;
        }

        transition: 665ms;
    }

    .invisible:hover {
        transition: 665ms;
        background-color: transparent;
        color: var(--color-blue);
    }

    .magnifier {
        position: absolute;
        right: 10vw;
        top: 15px;

        cursor: pointer;
        @media(min-width: 1025px) {
            position: unset;
        }
    }

`

export const StyledImg = styled.img`
    width: 69px;
    height: 30px;
`