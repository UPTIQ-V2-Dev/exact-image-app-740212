# Chakri Job Platform - Frontend Implementation Plan

## Overview

A modern job platform built with React 19, Vite, shadcn/ui, and Tailwind v4 that allows users to find jobs, view company profiles, and access career resources.

## Pages & Implementation Plan

### 1. Landing Page (Main/Home)

**Components:**

- `Header` - Navigation with logo, menu items, and Register Now button
- `HeroSection` - Main CTA with job search form
- `PlatformFeatures` - Grid showcasing 6 service categories
- `JobCirculars` - Featured job listings grid
- `Footer` - Company links and information

**Utils & Types:**

- `types/job.ts` - Job, Company, Category interfaces
- `utils/search.ts` - Job search logic
- `lib/api.ts` - API endpoints for jobs and companies

**APIs:**

- `GET /api/jobs/featured` - Featured job listings
- `GET /api/categories` - Service categories
- `GET /api/companies` - Company data

### 2. Job Search Results Page

**Components:**

- `SearchFilters` - Job filters sidebar
- `JobCard` - Individual job listing component
- `JobGrid` - Grid layout for job cards
- `Pagination` - Results pagination
- `SortDropdown` - Job sorting options

**Utils & Types:**

- `types/filters.ts` - Search and filter interfaces
- `utils/filters.ts` - Filter logic utilities
- `hooks/useJobSearch.ts` - Search functionality hook

**APIs:**

- `GET /api/jobs/search` - Job search with filters
- `GET /api/jobs/categories` - Job categories for filters

### 3. Job Details Page

**Components:**

- `JobHeader` - Job title, company, salary info
- `JobDescription` - Detailed job requirements
- `CompanyInfo` - Company profile section
- `ApplyButton` - Job application CTA
- `RelatedJobs` - Similar job recommendations

**Utils & Types:**

- `types/jobDetails.ts` - Detailed job interface
- `utils/application.ts` - Job application logic

**APIs:**

- `GET /api/jobs/:id` - Individual job details
- `GET /api/jobs/:id/related` - Related job suggestions
- `POST /api/jobs/:id/apply` - Job application submission

### 4. Company Profile Page

**Components:**

- `CompanyHeader` - Company logo, name, industry
- `CompanyOverview` - Company description and details
- `CompanyJobs` - All jobs from this company
- `CompanyStats` - Employee count, founded date, etc.
- `CompanyReviews` - Employee reviews section

**Utils & Types:**

- `types/company.ts` - Company profile interface
- `utils/company.ts` - Company-related utilities

**APIs:**

- `GET /api/companies/:id` - Company profile data
- `GET /api/companies/:id/jobs` - Company job listings
- `GET /api/companies/:id/reviews` - Company reviews

### 5. User Dashboard Page

**Components:**

- `DashboardSidebar` - Navigation menu
- `ProfileSection` - User profile overview
- `AppliedJobs` - List of applied jobs
- `SavedJobs` - Bookmarked jobs
- `ProfileCompletion` - Progress indicator

**Utils & Types:**

- `types/user.ts` - User profile interface
- `utils/profile.ts` - Profile management utilities
- `hooks/useUserData.ts` - User data management

**APIs:**

- `GET /api/user/profile` - User profile data
- `GET /api/user/applications` - User job applications
- `GET /api/user/saved-jobs` - User saved jobs
- `PUT /api/user/profile` - Update user profile

### 6. Authentication Pages

**Components:**

- `LoginForm` - User login form
- `RegisterForm` - User registration form
- `ForgotPassword` - Password reset form
- `AuthLayout` - Shared auth page layout

**Utils & Types:**

- `types/auth.ts` - Authentication interfaces
- `utils/validation.ts` - Form validation schemas
- `hooks/useAuth.ts` - Authentication hook

**APIs:**

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/forgot-password` - Password reset
- `POST /api/auth/verify-email` - Email verification

## Common Components & Layout

### Layout Components

- `MainLayout` - Main app layout with header/footer
- `DashboardLayout` - Dashboard layout with sidebar
- `AuthLayout` - Authentication pages layout

### Shared Components

- `JobCard` - Reusable job listing card
- `CompanyCard` - Company profile card
- `SearchBar` - Global search component
- `FilterSidebar` - Job filtering component
- `LoadingSpinner` - Loading state component
- `ErrorBoundary` - Error handling component

### Common Utils

- `utils/formatters.ts` - Date, currency, text formatters
- `utils/constants.ts` - App constants and enums
- `utils/storage.ts` - Local storage utilities
- `hooks/useDebounce.ts` - Debounce hook for search
- `hooks/usePagination.ts` - Pagination logic hook

### Types & Interfaces

- `types/common.ts` - Shared interfaces
- `types/api.ts` - API response types
- `types/navigation.ts` - Routing interfaces

## Implementation Notes

### Technology Stack

- **React 19** - Latest React with concurrent features
- **Vite** - Fast build tool and dev server
- **shadcn/ui** - Pre-built accessible components
- **Tailwind v4** - Latest Tailwind CSS framework
- **React Router** - Client-side routing
- **React Query** - Server state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Key Features

- Responsive design for mobile/tablet/desktop
- Server-side rendering optimization
- Progressive loading for better UX
- Accessibility compliance (WCAG 2.1)
- SEO optimization
- Real-time job notifications
- Advanced job filtering and search
- User preference persistence

### Performance Considerations

- Lazy loading for route-based code splitting
- Image optimization and lazy loading
- Debounced search functionality
- Infinite scrolling for job listings
- Caching with React Query
- Service worker for offline functionality

This plan provides a comprehensive structure for building the Chakri job platform exactly as shown in the reference image, with all necessary components, utilities, and API integrations clearly defined.
