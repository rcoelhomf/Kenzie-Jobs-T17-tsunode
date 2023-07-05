import styled from "styled-components";

interface IPosition {
  position?: string;
}

export const StyledFooter = styled.footer<IPosition>`
  position: ${({ position }) => position ? position : "absolute"};
  bottom: 0;
  width: 100%;
  height: 200px;
  padding: 20px 10vw;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;

  background-color: var(--color-black);

  @media(min-width: 1025px) {
    height: 100px;

    flex-direction: row;
    justify-content: space-between;
  }
`
