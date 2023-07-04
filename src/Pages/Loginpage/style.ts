import { styled } from "styled-components"

export const StyleMain = styled.main`

    width: 100%;
    height: 100%;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
   
    .main__div{
        max-width: 80rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 1rem;

        .div__login-img{
    
            img {
                max-width: 540px;
                width: 100%;
            }
        }
    
        .login__box {
    
            max-width: 33rem;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            form {
    
                width: 100%;
            }
    
            .title-login {
                
                color: var(--color-blue);
                margin-bottom: 1rem;
            }
    
            .input__div {
                display: flex;
                justify-content: center;
                width: 100%;
    
            }
    
            .input-style {
                min-width: 1rem;
                max-width: 400px;
                width: 100%;
                margin-bottom: 1rem;
                border-radius: 1rem;
                border: 1px solid var(--color-blue);
                font-weight: 700;
                font-size: 1rem;
                color: var(--color-black);
            }
    
            .button_div {
                display: flex;
                justify-content: flex-end;
                max-width: 480px;
                width: 100%;
                
                button {
    
                    padding: 1.2rem;
                    max-width: 97px;
                    width: 100%;
                    border-radius: 1.5rem;
    
                    background: var(--color-blue);
                    color: var(--color-white);
                }
            }
    
            .span__div {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
    
                .span-text {
                    font-size: 0.9rem;
                }
                
                .link-text {
                    text-decoration: none;
                }
            }
    
        }
    }


`

export const StyleDivFooter = styled.div`

    border: 2px solid red;


`