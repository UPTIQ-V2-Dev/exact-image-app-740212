import type { PaginatedResponse } from '@/types/api';
import type { AuthResponse, User } from '@/types/user';
import type { Job, Company, JobCategory, JobSearchResponse } from '@/types/job';

export const mockUser: User = {
    id: 1,
    email: 'user@example.com',
    name: 'John Doe',
    role: 'USER',
    isEmailVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
};

export const mockAdminUser: User = {
    id: 2,
    email: 'admin@example.com',
    name: 'Jane Smith',
    role: 'ADMIN',
    isEmailVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
};

export const mockUsers: User[] = [mockUser, mockAdminUser];

export const mockAuthResponse: AuthResponse = {
    user: mockUser,
    tokens: {
        access: {
            token: 'mock-access-token',
            expires: new Date(Date.now() + 15 * 60 * 1000).toISOString()
        },
        refresh: {
            token: 'mock-refresh-token',
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
        }
    }
};

export const mockPaginatedUsers: PaginatedResponse<User> = {
    results: mockUsers,
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 2
};

// Mock Companies
export const mockCompanies: Company[] = [
    {
        id: '1',
        name: 'Microsoft',
        logo: 'https://logo.clearbit.com/microsoft.com',
        industry: 'Technology',
        size: '10000+',
        website: 'https://microsoft.com',
        description: 'Leading technology company',
        founded: '1975',
        location: 'Redmond, WA'
    },
    {
        id: '2',
        name: 'Samsung',
        logo: 'https://logo.clearbit.com/samsung.com',
        industry: 'Electronics',
        size: '10000+',
        website: 'https://samsung.com',
        description: 'Global electronics leader',
        founded: '1969',
        location: 'Seoul, South Korea'
    },
    {
        id: '3',
        name: 'BEXIMCO',
        logo: 'https://logo.clearbit.com/beximco.com',
        industry: 'Conglomerate',
        size: '5000-10000',
        website: 'https://beximco.com',
        description: 'Leading Bangladesh conglomerate',
        founded: '1972',
        location: 'Dhaka, Bangladesh'
    },
    {
        id: '4',
        name: 'TCS',
        logo: 'https://logo.clearbit.com/tcs.com',
        industry: 'IT Services',
        size: '10000+',
        website: 'https://tcs.com',
        description: 'IT services and consulting',
        founded: '1968',
        location: 'Mumbai, India'
    }
];

// Mock Job Categories
export const mockJobCategories: JobCategory[] = [
    {
        id: '1',
        name: 'Marketing & Advertising',
        icon: 'Megaphone',
        color: 'bg-blue-100 text-blue-600',
        jobCount: 1250,
        description: 'Creative marketing roles'
    },
    {
        id: '2',
        name: 'Design & Development',
        icon: 'Palette',
        color: 'bg-purple-100 text-purple-600',
        jobCount: 890,
        description: 'UI/UX and development roles'
    },
    {
        id: '3',
        name: 'Human Resources &amp; Finance',
        icon: 'Users',
        color: 'bg-green-100 text-green-600',
        jobCount: 567,
        description: 'HR and finance positions'
    },
    {
        id: '4',
        name: 'Customer Support Care',
        icon: 'Headphones',
        color: 'bg-orange-100 text-orange-600',
        jobCount: 423,
        description: 'Support and care roles'
    },
    {
        id: '5',
        name: 'Project Management',
        icon: 'CheckSquare',
        color: 'bg-indigo-100 text-indigo-600',
        jobCount: 334,
        description: 'Project and program management'
    },
    {
        id: '6',
        name: 'Business & Consulting',
        icon: 'Briefcase',
        color: 'bg-teal-100 text-teal-600',
        jobCount: 456,
        description: 'Business strategy and consulting'
    }
];

// Mock Jobs
export const mockJobs: Job[] = [
    {
        id: '1',
        title: 'Microsoft Designer',
        company: mockCompanies[0],
        location: 'Dhaka, Bangladesh',
        salary: '$2500 - $3000',
        type: 'Full-time',
        experience: '3-5 years',
        deadline: 'March 31, 2025',
        description: 'We are looking for a talented designer to join our team...',
        requirements: ['3+ years experience', 'Adobe Creative Suite', 'UI/UX skills'],
        benefits: ['Health insurance', 'Flexible hours', 'Remote work'],
        isCircular: true,
        featured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: '2',
        title: 'Senior UI Designer',
        company: mockCompanies[1],
        location: 'Dhaka, Bangladesh',
        salary: '$3500 - $4000',
        type: 'Full-time',
        experience: '5+ years',
        deadline: 'April 15, 2025',
        description: 'Join Samsung as a Senior UI Designer...',
        requirements: ['5+ years experience', 'Figma', 'Design systems'],
        benefits: ['Competitive salary', 'Stock options', 'Learning budget'],
        isCircular: true,
        featured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: '3',
        title: 'DevOps',
        company: mockCompanies[2],
        location: 'Dhaka, Bangladesh',
        salary: '$3000 - $3500',
        type: 'Full-time',
        experience: '4-6 years',
        deadline: 'May 10, 2025',
        description: 'BEXIMCO is seeking a DevOps engineer...',
        requirements: ['AWS/Azure experience', 'Docker/Kubernetes', 'CI/CD'],
        benefits: ['Medical coverage', 'Performance bonus', 'Training'],
        isCircular: true,
        featured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: '4',
        title: 'Marketing Officer',
        company: mockCompanies[3],
        location: 'Chittagong, Bangladesh',
        salary: '$2000 - $2500',
        type: 'Full-time',
        experience: '2-4 years',
        deadline: 'April 30, 2025',
        description: 'TCS is looking for a marketing professional...',
        requirements: ['Marketing degree', 'Digital marketing', 'Analytics'],
        benefits: ['Health benefits', 'Career growth', 'Work-life balance'],
        isCircular: true,
        featured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: '5',
        title: 'App Development',
        company: mockCompanies[0],
        location: 'Remote',
        salary: '$4000 - $5000',
        type: 'Contract',
        experience: '3-5 years',
        deadline: 'June 15, 2025',
        description: 'Microsoft is hiring for app development role...',
        requirements: ['React Native', 'Flutter', 'Mobile development'],
        benefits: ['Remote work', 'Flexible schedule', 'Project bonus'],
        isCircular: true,
        featured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: '6',
        title: 'Data Visualization',
        company: mockCompanies[1],
        location: 'Dhaka, Bangladesh',
        salary: '$2800 - $3200',
        type: 'Full-time',
        experience: '2-4 years',
        deadline: 'May 20, 2025',
        description: 'Samsung is seeking a data visualization specialist...',
        requirements: ['D3.js', 'Python/R', 'Data analysis'],
        benefits: ['Learning opportunities', 'Team outings', 'Health insurance'],
        isCircular: true,
        featured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: '7',
        title: 'Guest UI Designer',
        company: mockCompanies[2],
        location: 'Sylhet, Bangladesh',
        salary: '$1800 - $2200',
        type: 'Part-time',
        experience: '1-3 years',
        deadline: 'April 25, 2025',
        description: 'BEXIMCO needs a part-time UI designer...',
        requirements: ['UI design skills', 'Sketch/Figma', 'Portfolio'],
        benefits: ['Flexible hours', 'Portfolio building', 'Mentorship'],
        isCircular: true,
        featured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: '8',
        title: 'Chief UI Designer',
        company: mockCompanies[3],
        location: 'Dhaka, Bangladesh',
        salary: '$5000 - $6000',
        type: 'Full-time',
        experience: '8+ years',
        deadline: 'March 20, 2025',
        description: 'TCS is hiring a Chief UI Designer to lead our team...',
        requirements: ['Leadership experience', 'Advanced design skills', 'Team management'],
        benefits: ['Executive compensation', 'Equity', 'Leadership development'],
        isCircular: true,
        featured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
];

export const mockJobSearchResponse: JobSearchResponse = {
    jobs: mockJobs,
    total: mockJobs.length,
    page: 1,
    limit: 10,
    totalPages: 1
};

// Trusted company logos for the testimonial section
export const mockTrustedCompanies = ['airbnb', 'dropbox', 'discover', 'walmart', 'dribbble'];
