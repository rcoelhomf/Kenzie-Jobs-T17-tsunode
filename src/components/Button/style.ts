import styled from "styled-components"

interface ButtonProps {
  height?: string
  width?: string
  color?: "blue" | "white"
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 10px 20px;
  border-radius: 255px;
  cursor: pointer;
  height: ${props => props.height || "auto"};
  width: ${props => props.width || "auto"};
  background: ${props => props.color === "blue" ? "var(--color-blue)" : "var(--color-white)"};
  color: ${props => props.color === "blue" ? "var(--color-white)" : "var(--color-blue)"};
  border: ${props => props.color !== "blue" ? "1px solid var(--color-blue)" : "none"};

  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
`;
