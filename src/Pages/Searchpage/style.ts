import { styled } from "styled-components"

export const StyledMainDiv = styled.div`
    width:100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
`


export const StyledForm = styled.form`
    width: 928px;
    height: 66px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 70px;
    gap:25px;
`


export const StyledInput = styled.input`
    width: 542px;
    height: 66px;

    
    border: 1px solid var(--color-blue);
    border-radius: 25px;

    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size:17px;
    line-height: 20px;

    padding-left: 15px;

`
export const StyledButton = styled.button`
    background-color: transparent;
`
export const StyledImgRetangle = styled.img`
    width: 66px;
    height: 66px;

`
export const StyledImgLupa = styled.img`
    width: 35px;
    height: 35px;


    position: relative;
    bottom: 15px;
    right: 53px;


`
export const StyledDivJobs = styled.div`
    width: 1105px;
    height: 599px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const StyledButtonAplly = styled.button`
    width: 197px;
    height: 58px;

    background-color: transparent;

    border: 1px solid var(--color-blue);
    border-radius: 25px;

    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size:17px;
    line-height: 20px;
    color: var(--color-blue);
    
`