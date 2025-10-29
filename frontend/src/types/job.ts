export interface Job {
    id: string;
    title: string;
    company: Company;
    location: string;
    salary: string;
    type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
    experience: string;
    deadline: string;
    description: string;
    requirements: string[];
    benefits: string[];
    isCircular: boolean;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Company {
    id: string;
    name: string;
    logo: string;
    industry: string;
    size: string;
    website: string;
    description: string;
    founded: string;
    location: string;
}

export interface JobCategory {
    id: string;
    name: string;
    icon: string;
    color: string;
    jobCount: number;
    description: string;
}

export interface SearchFilters {
    query?: string;
    location?: string;
    category?: string;
    type?: string;
    experience?: string;
    salaryMin?: number;
    salaryMax?: number;
    sortBy?: 'newest' | 'oldest' | 'salary_high' | 'salary_low';
}

export interface JobSearchResponse {
    jobs: Job[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface CreateJobInput {
    title: string;
    companyId: string;
    location: string;
    salary: string;
    type: Job['type'];
    experience: string;
    deadline: string;
    description: string;
    requirements: string[];
    benefits: string[];
}

export interface UpdateJobInput extends Partial<CreateJobInput> {
    id: string;
}
