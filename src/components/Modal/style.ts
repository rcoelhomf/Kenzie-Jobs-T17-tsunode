import  { styled } from "styled-components"

export const BackGroundModal = styled.div`
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    inset: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(132, 144, 255, 0.3);
`

export const ModalContainer = styled.div`
    position: relative;
    width: 90%;
    max-width: 650px;
    min-height: 546px;
    height: max-content;
    padding: 40px 30px;

    background-color: var(--color-white);

    .closeBtn {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    .bold {
        font-weight: 700;
    }

    .modalForm {
        gap: 20px;

        display: flex;
        flex-direction: column;

    }

    .formBtn {
        padding: 20px 40px;

        align-self: flex-end;

        background-color: var(--color-blue);
        border: 1px solid var(--color-blue);
        border-radius: 255px;

        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 17px;
        line-height: 21px;
        color: var(--color-white);

        cursor: pointer;
    }

    .formBtn:hover {
        background-color: transparent;
        color: var(--color-blue);
        transition: 665ms;
    }
`