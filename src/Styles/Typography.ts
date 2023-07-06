import styled from "styled-components"

interface IStyledTexts {
    font?: string;
}

export const Title1 = styled.h1<IStyledTexts>`
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    color: ${({ font }) => font ? font : "var(--color-black)"};
`

export const Title2 = styled.h2<IStyledTexts>`
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 44px;
    line-height: 54px;
    color: ${({ font }) => font ? font : "var(--color-black)"};
`

export const Title3 = styled.h3<IStyledTexts>`
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 21px;
    line-height: 26px;
    color: ${({ font }) => font ? font : "var(--color-black)"};
`

export const Paragraph = styled.p<IStyledTexts>`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
    color: ${({ font }) => font ? font : "var(--color-black)"};
`

export const ParagraphBold = styled.p<IStyledTexts>`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 36px;
    color: ${({ font }) => font ? font : "var(--color-black)"};
`

export const ParagraphMenu = styled.p<IStyledTexts>`
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    color: ${({ font }) => font ? font : "var(--color-black)"};
`

export const Label = styled.p<IStyledTexts>`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    color: ${({ font }) => font ? font : "var(--color-blue)"};
`