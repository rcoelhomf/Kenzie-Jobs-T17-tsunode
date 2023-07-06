import { styled } from "styled-components"

export const StyledHeader = styled.header`
    height: 90px;
    padding: 0 10vw;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .navMenu {
        gap: 2vw;

        display: flex;
    }

    .linkAdm {
        padding: 12px;

        text-decoration: none;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: var(--color-white);

        background-color: var(--color-blue);
        border: 1px solid var(--color-blue);
        border-radius: 50%;
    }

    .linkAdm:hover {
        background-color: transparent;
        color: var(--color-blue);
        transition: 665ms;
    }

    .logOutBtn {
        padding: 10px 30px;

        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: var(--color-blue);

        background-color: transparent;
        border: 1px solid var(--color-blue);
        border-radius: 255px;

        cursor: pointer;
    }

    .logOutBtn:hover {
        background-color: var(--color-blue);
        color: var(--color-white);
        transition: 665ms;
    }
`