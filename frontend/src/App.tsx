import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '@/pages/LandingPage';
import { ComingSoonPage } from '@/pages/ComingSoonPage';

export const App = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<LandingPage />}
            />
            <Route
                path='/find-jobs'
                element={
                    <ComingSoonPage
                        title='Find Jobs'
                        description='Browse thousands of job opportunities from top companies.'
                    />
                }
            />
            <Route
                path='/job-seekers'
                element={
                    <ComingSoonPage
                        title='Job Seekers'
                        description='Resources and tools for job seekers to find their perfect role.'
                    />
                }
            />
            <Route
                path='/find-candidates'
                element={
                    <ComingSoonPage
                        title='Find Candidates'
                        description='Discover talented professionals for your organization.'
                    />
                }
            />
            <Route
                path='/career-advice'
                element={
                    <ComingSoonPage
                        title='Career Advice'
                        description='Expert guidance to advance your career.'
                    />
                }
            />
            <Route
                path='/login'
                element={
                    <ComingSoonPage
                        title='Login'
                        description='Sign in to access your account and applications.'
                    />
                }
            />
            <Route
                path='/register'
                element={
                    <ComingSoonPage
                        title='Register'
                        description='Create your account to start your job search journey.'
                    />
                }
            />
            <Route
                path='/search-jobs'
                element={
                    <ComingSoonPage
                        title='Search Results'
                        description='Your search results will appear here.'
                    />
                }
            />
            <Route
                path='/jobs/:id'
                element={
                    <ComingSoonPage
                        title='Job Details'
                        description='Detailed information about the job position.'
                    />
                }
            />
            <Route
                path='/upload-cv'
                element={
                    <ComingSoonPage
                        title='Upload CV'
                        description='Upload your CV to get matched with relevant jobs.'
                    />
                }
            />
            <Route
                path='*'
                element={
                    <ComingSoonPage
                        title='Page Not Found'
                        description="The page you're looking for doesn't exist."
                    />
                }
            />
        </Routes>
    );
};
