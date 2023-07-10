import {Dispatch, SetStateAction} from "react"
import { LoginForm } from "../../Schema/LoginSchema"
import { RegisterForm } from "../../Schema/RegisterSchema"

export interface ICompanyContextProps {   
    children: React.ReactNode;
}

export interface ICompanyRegister {
    email: string;
    password: string;
    name: string;
    confirm: string;
    id?: number;
}

export interface ICompanyLogin {
    accessToken: string;
    user: ICompanyRegister
}

export interface IapplySubmit {
    jobId: number;
    userId: number;
    name: string;
    email: string;
    linkedin: string;
}

export interface IJobsList {
    userId: number;
    id: number;
    position: string;
    sallary: number;
    description: string;
    user?: ICompanyRegister;
}

export interface ICompanyContext {
    company: ICompanyRegister | null;
    setCompany: Dispatch<SetStateAction<ICompanyRegister | null>>;
    isOpen: number | null;
    setIsOpen: Dispatch<SetStateAction<number | null>>;
    jobsList: IJobsList[];
    attJobList: () => void;
    applyJob: (formData: IapplySubmit) => Promise<void>;
    registerCompany: (formData: RegisterForm) => Promise<void>;
    loginCompany: (formData: LoginForm) => Promise<void>;
    logoutCompany: () => void;
    filteredJobs: any[]; 
    setFilteredJobs: React.Dispatch<React.SetStateAction<any[]>>;
    filterJob: (formData: any) => Promise<void>;
}