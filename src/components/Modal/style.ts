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
    width: 90%;
    max-width: 650px;
    height: 546px;
    max-height: max-content;

    background-color: var(--color-white);
`