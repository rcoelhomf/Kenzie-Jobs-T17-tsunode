import { NavigateFunction } from "react-router-dom"

export interface IAdmContextProps {
    children: React.ReactNode;
}

export interface IJobItem {
    id: number;
    position: string;
    sallary: number;
    description: string;
}

export interface IJobApplications {
    id: number
    jobId: number
    name: string
    email: string
    linkedin: string
}

export interface IJobCreate {
    position: string;
    sallary?: string;
    description: string;
}

export interface IAdmContext {
    jobId: number | null;
    setJobId: React.Dispatch<React.SetStateAction<number | null>>;
    jobsList: IJobItem[];
    navigate: NavigateFunction;
    getCompanyJobs: () => void;
    deleteJob: (id: number) => Promise<void>;
    jobsApplications: IJobApplications[];
    JobsApplicationsAdm: () => void;
    editJob: (jobId: number, position: string, salary: number, description: string) => Promise<void>;
    registerJob: (formData: {
        position: string;
        description: string;
        sallary?: string | undefined;
    }) => Promise<void>
}