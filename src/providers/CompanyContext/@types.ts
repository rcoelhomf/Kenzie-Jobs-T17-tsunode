import {Dispatch, SetStateAction} from "react";
import { LoginForm } from "../../Schema/LoginSchema";
import { RegisterForm } from "../../Schema/RegisterSchema";

export interface ICompanyContextProps {   
    children: React.ReactNode;
}


export interface ICompanyRegister {
    email: string;
    password: string;
    name: string;
}


export interface ICompanyLogin {
    accessToken: string;
    user: ICompanyRegister
}


export interface ICompanyContext {
    company: ICompanyRegister | null;
    setCompany: Dispatch<SetStateAction<ICompanyRegister | null>>;
    registerCompany: (formData: RegisterForm) => Promise<void>;
    loginCompany: (formData: LoginForm) => Promise<void>;
    logoutCompany: () => void;
  }