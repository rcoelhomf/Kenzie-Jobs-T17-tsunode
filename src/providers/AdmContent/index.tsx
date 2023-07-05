import { createContext } from "react";
import { IAdmContext, IAdmContextProps } from "./@types";

export const AdmContext = createContext<IAdmContext>(
    {} as IAdmContext
)

export const AdmProvider = ({ children }: IAdmContextProps) => {

    
    return (
        <AdmContext.Provider value={{}}>
            { children }
        </AdmContext.Provider>
    )
}