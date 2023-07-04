import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  height: 90px;
  background: var(--color-black);
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
`

export const StyledDiv = styled.div`
  display: flex;

  flex-grow: 1;

  justify-content: space-between;
`
export const StyledImg = styled.img`
  margin-left: 100px; 
`

export const StyledP = styled.p`
  font-family: 'Inter', sans-serif;

  color: var(--color-white);

  font-weight: 400;
  font-size: 17px;
  line-height:36px;
  
  margin-right: 100px;
`