import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className='w-full bg-background border-b border-border px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo */}
                    <div className='flex-shrink-0'>
                        <Link
                            to='/'
                            className='flex items-center'
                        >
                            <span className='text-2xl font-bold text-foreground'>Chakri</span>
                        </Link>
                    </div>

                    {/* Navigation Menu */}
                    <nav className='hidden md:flex items-center space-x-8'>
                        <Link
                            to='/find-jobs'
                            className='text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors'
                        >
                            Find Jobs
                        </Link>
                        <Link
                            to='/job-seekers'
                            className='text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors'
                        >
                            Job Seekers
                        </Link>
                        <Link
                            to='/find-candidates'
                            className='text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors'
                        >
                            Find Candidates
                        </Link>
                        <Link
                            to='/career-advice'
                            className='text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors'
                        >
                            Career Advice
                        </Link>
                    </nav>

                    {/* Login and Register */}
                    <div className='flex items-center gap-4'>
                        <Link
                            to='/login'
                            className='text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors hidden sm:block'
                        >
                            Log In
                        </Link>
                        <Button
                            asChild
                            className='bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6'
                        >
                            <Link to='/register'>Register Now</Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className='md:hidden'>
                        <Button
                            variant='ghost'
                            size='sm'
                            className='p-2'
                        >
                            <svg
                                className='h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
