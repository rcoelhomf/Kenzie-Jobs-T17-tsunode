import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{

    error: any;
}

// Trocar tipagem do erro depois

export const Input = forwardRef(
    ({error, ...rest}: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {

    return (

        <div>
            <input ref={ref} type="text" {...rest} />
            {error ? <p>{error.message}</p> : null}
        </div>
    )
})   