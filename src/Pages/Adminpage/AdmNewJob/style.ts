import { styled } from "styled-components";

export const StyledArrowDiv = styled.div`

    margin: 0 auto;
    width: 70%;

    display: flex;
    align-items: center;

    button {
        display: flex;
        align-items: center;
        background-color: var(--color-white);
        cursor: pointer;
    }
`


export const StyleMainAdm = styled.main`

    max-width: 1200px;
    width: 100%;
    height: 70vh;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;

    .form__div {
        height: 100%;
        width: 70%;
        display: flex;
        justify-content: center;

        .form {

            height:  100%;
            width: 85%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            gap: 1rem;

            .style_input {
                
                max-width: 660px;
                width: 100%;

                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
            }

            .textArea{
                max-width: 620px;
                width: 98.2%;
                padding: 1rem;

                max-height: 200px;
                height: 100%;
                border-radius: 40px;
                border: solid 1px var(--color-blue);
            }

            .textArea::placeholder {

                color: var(--color-black);
                opacity: 0.5;
                font-family: 'Montserrat', sans-serif;
                font-size: 1rem;
                font-weight: 700;

                text-align: start;
            }
            
            .style__button{

                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
                padding: 10px 20px;
                border-radius: 255px;
                cursor: pointer;

                font-family: "Montserrat", sans-serif;
                font-weight: 700;
                font-size: 17px;
                line-height: 20px;

                background:var(--color-blue) ;
                color: var(--color-white);
                border: 1px solid var(--color-blue);
            }

            .button__img {
    
                margin-right: 0.7rem;
            }

            .button__div{

                width: 92%;
                display: flex;
                justify-content: flex-end;
            }
        }
    }

`