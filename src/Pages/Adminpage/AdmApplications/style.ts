import { styled } from "styled-components"

export const StyledMainDiv = styled.div`
    padding: 30px 10vw;

    display: flex;
    flex-direction: column;
   
   

`
export const StyleLinksDiv = styled.div`
    display: flex;
   
    gap: 20px;
    margin-bottom: 2rem;

    .linkEdit {
        text-decoration: none;

        font-family: "Montserrat", sans-serif;
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


export const StyledSpan = styled.span`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 36px;
    color:"var(--color-black)"; 

`


export const  StyledUl = styled.ul`
    margin-top: 50px;
    flex-wrap: wrap;
`
export const StyledLi = styled.li`
    width: 78vw;
    height: 269px;
    flex-wrap: wrap;

    .Text__Details{
        margin-top: 0.3rem;
    }
    .Email{
        margin-top: 0.3rem;
    }
    .Href{
        &:visited {
    color: var(--color-blue); 
  }
        text-decoration:none;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 21px;
        line-height: 26px;
        color:"var(--color-black)"

    }
`
export const StyledDivTitle = styled.div`
    width: 78vw;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
