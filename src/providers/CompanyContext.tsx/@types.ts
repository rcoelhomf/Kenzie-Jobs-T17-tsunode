export interface ICompanyContextProps {   
    children: React.ReactNode;
}

// Resposta da API em relação ao cadastro
export interface ICompanyRegister {
    email: string;
    name: string;
    id: number;
}

// Resposta da API em relação ao login
export interface ICompanyLogin {
    accessToken: string;
    user: ICompanyRegister
}

export interface ICompanyContext {
    company: ICompanyRegister | null
    registerCompany: (formData: any) => Promise<void>
    loginCompany: (formData: any) => Promise<void>
    logoutCompany: () => void
}