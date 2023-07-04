import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react"
import { StyledInput } from './style';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{

    error: any;
    label?: string;

}

// Trocar tipagem do erro depois

export const Input = forwardRef(
    ({error, label, type, ...rest}: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {

    return (

        <div className="input__div">
            {label ? <p>{label}</p> : null}
            <StyledInput ref={ref} type={type ? type : "text"} {...rest} />
            {error ? <p>{error.message}</p> : null}
        </div>
    )
})   