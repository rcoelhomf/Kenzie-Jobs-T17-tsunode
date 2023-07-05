import  styled  from "styled-components"
/* import { Footer } from './../../components/Footer/index'; */

export const StyledRegisterPageContainer = styled.div`
    position: relative;
    height:100vh;
`

export const StyledFormSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 4rem;

    width: 100%;
`

export const StyledForm = styled.form`
    width: 518px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 2.0625rem;
`;

export const StyledDiv = styled.div`
    width: 100%;
    height: 100px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 0 10vw;

.back-text {
    display:flex;
    align-items: center;
    text-align: center;

    gap:0.75rem;
  }

  .link-text{
    text-decoration:none;

    color: var(--color-blue);
  }
`

export const StyledButton = styled.button`
  padding: 15px 25px;
  margin-left: auto; 
  margin-top: 1rem; /* Adicionado espaçamento superior */
  
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  color: var(--color-white);
      
  background-color: var(--color-blue);
  border: 1px solid var(--color-blue);
  border-radius: 255px;

  cursor: pointer;
  transition: 665ms;

  &:hover {
    color: var(--color-blue);
    background-color: var(--color-white);
  }
`;