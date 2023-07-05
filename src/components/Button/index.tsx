import React from "react"
import { Button as StyledButton } from "../Button/style"

interface ButtonProps {
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  children: React.ReactNode
  color?: "blue" | "white"
  height?: string
  width?: string
}

export const Button: React.FC<ButtonProps> = ({ onClick, type = "button", children, color = "blue", height, width }) => (
  <StyledButton onClick={onClick} type={type} color={color} height={height} width={width}>
    {children}
  </StyledButton>
)