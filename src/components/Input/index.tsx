import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react"
import { StyledInput, StyledParagraph } from "./style"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{

    error: any;
    label?: string;

}

export const Input = forwardRef(
    ({error, label, type, ...rest}: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {

    return (

        <>
            {label ? <p>{label}</p> : null}
            <StyledInput ref={ref} type={type ? type : "text"} {...rest} />
            {error ? <StyledParagraph>{error.message}</StyledParagraph> : null}
        </>
    )
})   