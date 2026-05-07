export type Job = {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    category: string;
    jobType: string;
    description: string;
    requirements: string;
};

export type Aplication = {
    id: string;
    name: string;
    email: string;
    jobId: string;
    createdAt: string;
};