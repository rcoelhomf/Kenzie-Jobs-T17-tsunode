import styled from "styled-components"

export const StyledInput = styled.input`
    width: 100%;
    height: 4.125rem;

    border-radius: 40px;
    border: solid 1px var(--color-blue);

    padding-left: 2rem;

    color: var(--color-black);
    opacity: 1;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: 700;

    ::placeholder {
        color: var(--color-black);
        opacity: 0.5;
        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
        font-weight: 700;
    }
`

export const StyledParagraph = styled.p`
    color: red;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
`