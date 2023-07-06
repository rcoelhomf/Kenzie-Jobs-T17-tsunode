import { styled } from "styled-components";

export const StyledMainDiv = styled.div`
    padding: 0 10vw;

    display: flex;
    flex-direction: column;
   
    align-items: center;

`
export const StyleLinksDiv = styled.div`
    display: flex;
   
    gap: 20px;

    .linkEdit {
        text-decoration: none;

        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        color: var(--color-black);
    }

    .linkEdit:hover {
        color: var(--color-blue);
        transition: 665ms;
    }

`
export const StyledA = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 21px;
    line-height: 26px;
    color:"var(--color-black)"
`
export const StyledSpan = styled.span`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 36px;
    color:"var(--color-black)"; 
    `

export const  StyledUl = styled.ul`
    display: flex;
    flex-direction: column;

    margin-top: 50px;
`
export const StyledLi = styled.li`
    width: 1327px;
    height: 269px;
   


    display: flex;
    flex-direction: column;
    align-items: center;
`
export const StyledDivTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
`
