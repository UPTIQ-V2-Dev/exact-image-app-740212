import { api } from '@/lib/api';
import type { Job, Company, JobCategory, JobSearchResponse, SearchFilters } from '@/types/job';
import { mockJobs, mockJobCategories, mockCompanies } from '@/data/mockData';

export const getFeaturedJobs = async (): Promise<Job[]> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        return mockJobs.filter(job => job.featured);
    }

    const response = await api.get('/jobs/featured');
    return response.data;
};

export const getJobCategories = async (): Promise<JobCategory[]> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        return mockJobCategories;
    }

    const response = await api.get('/categories');
    return response.data;
};

export const getCompanies = async (): Promise<Company[]> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        return mockCompanies;
    }

    const response = await api.get('/companies');
    return response.data;
};

export const searchJobs = async (filters: SearchFilters): Promise<JobSearchResponse> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        // Simple mock filtering logic
        let filteredJobs = [...mockJobs];

        if (filters.query) {
            filteredJobs = filteredJobs.filter(
                job =>
                    job.title.toLowerCase().includes(filters.query!.toLowerCase()) ||
                    job.company.name.toLowerCase().includes(filters.query!.toLowerCase())
            );
        }

        if (filters.location) {
            filteredJobs = filteredJobs.filter(job =>
                job.location.toLowerCase().includes(filters.location!.toLowerCase())
            );
        }

        if (filters.type) {
            filteredJobs = filteredJobs.filter(job => job.type === filters.type);
        }

        return {
            jobs: filteredJobs,
            total: filteredJobs.length,
            page: 1,
            limit: 10,
            totalPages: Math.ceil(filteredJobs.length / 10)
        };
    }

    const params = new URLSearchParams();
    if (filters.query) params.append('q', filters.query);
    if (filters.location) params.append('location', filters.location);
    if (filters.category) params.append('category', filters.category);
    if (filters.type) params.append('type', filters.type);
    if (filters.experience) params.append('experience', filters.experience);
    if (filters.salaryMin) params.append('salaryMin', filters.salaryMin.toString());
    if (filters.salaryMax) params.append('salaryMax', filters.salaryMax.toString());
    if (filters.sortBy) params.append('sortBy', filters.sortBy);

    const response = await api.get(`/jobs/search?${params.toString()}`);
    return response.data;
};

export const getJobById = async (id: string): Promise<Job> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        const job = mockJobs.find(j => j.id === id);
        if (!job) throw new Error('Job not found');
        return job;
    }

    const response = await api.get(`/jobs/${id}`);
    return response.data;
};

export const getRelatedJobs = async (jobId: string): Promise<Job[]> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        // Return random jobs excluding the current one
        return mockJobs.filter(job => job.id !== jobId).slice(0, 3);
    }

    const response = await api.get(`/jobs/${jobId}/related`);
    return response.data;
};

export const applyToJob = async (jobId: string, applicationData: FormData): Promise<void> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        // Mock successful application
        await new Promise(resolve => setTimeout(resolve, 1000));
        return;
    }

    await api.post(`/jobs/${jobId}/apply`, applicationData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};
