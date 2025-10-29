import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className='bg-background text-foreground'>
            {/* Newsletter Section */}
            <div className='bg-primary py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
                        <div>
                            <h3 className='text-2xl font-bold mb-2 text-primary-foreground'>
                                Never Want to Miss
                                <br />
                                Any <span className='text-primary-foreground/80'>Job News?</span>
                            </h3>
                        </div>

                        <div className='flex gap-2 w-full md:w-auto md:min-w-80'>
                            <Input
                                type='email'
                                placeholder='Enter your email address'
                                className='bg-background text-foreground border-0 flex-1'
                            />
                            <Button className='bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6'>
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className='py-16 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>
                        {/* Company Info */}
                        <div className='lg:col-span-2'>
                            <Link
                                to='/'
                                className='flex items-center mb-4'
                            >
                                <span className='text-2xl font-bold'>Chakri</span>
                            </Link>
                            <p className='text-muted-foreground mb-6 leading-relaxed'>
                                Your trusted partner in finding the right career opportunities. Connect with top
                                employers and discover your next career move.
                            </p>
                            <div className='flex space-x-4'>
                                <Link
                                    to='#'
                                    className='text-muted-foreground hover:text-foreground transition-colors'
                                >
                                    <Facebook className='w-5 h-5' />
                                </Link>
                                <Link
                                    to='#'
                                    className='text-muted-foreground hover:text-foreground transition-colors'
                                >
                                    <Twitter className='w-5 h-5' />
                                </Link>
                                <Link
                                    to='#'
                                    className='text-muted-foreground hover:text-foreground transition-colors'
                                >
                                    <Linkedin className='w-5 h-5' />
                                </Link>
                                <Link
                                    to='#'
                                    className='text-muted-foreground hover:text-foreground transition-colors'
                                >
                                    <Instagram className='w-5 h-5' />
                                </Link>
                            </div>
                        </div>

                        {/* For Job Seekers */}
                        <div>
                            <h4 className='text-lg font-semibold mb-4'>For Job Seekers</h4>
                            <ul className='space-y-3'>
                                <li>
                                    <Link
                                        to='/jobs'
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        Browse Jobs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/companies'
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        Browse Companies
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/salary-guide'
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        Salary Guide
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/career-advice'
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        Career Advice
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* For Employers */}
                        <div>
                            <h4 className='text-lg font-semibold mb-4'>For Employers</h4>
                            <ul className='space-y-3'>
                                <li>
                                    <Link
                                        to='/post-job'
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        Post a Job
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/browse-resumes'
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        Browse Resumes
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/employer-resources'
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        Employer Resources
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/pricing'
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        Pricing
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
                            <ul className='space-y-3'>
                                <li>
                                    <Link
                                        to='/about'
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/contact'
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/faq'
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/blog'
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className='text-lg font-semibold mb-4'>Legal</h4>
                            <ul className='space-y-3'>
                                <li>
                                    <Link
                                        to='/privacy-policy'
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/terms-of-service'
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/cookie-policy'
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        Cookie Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/sitemap'
                                        className='text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        Sitemap
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='border-t border-border py-6 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between'>
                    <p className='text-muted-foreground text-sm'>
                        © {new Date().getFullYear()} Chakri. All rights reserved.
                    </p>
                    <p className='text-muted-foreground text-sm mt-2 md:mt-0'>Made with ❤️ for job seekers worldwide</p>
                </div>
            </div>
        </footer>
    );
};
