import { NavigateFunction } from "react-router-dom";

export interface IAdmContextProps {
    children: React.ReactNode;
}

export interface IJobItem {
    id: number;
    position: string;
    sallary: number;
    description: string;
}

export interface IAdmContext {
    jobId: number | null;
    setJobId: React.Dispatch<React.SetStateAction<number | null>>;
    jobsList: IJobItem[];
    navigate: NavigateFunction;
    getCompanyJobs: () => void;
    deleteJob: (id: number) => Promise<void>;
}