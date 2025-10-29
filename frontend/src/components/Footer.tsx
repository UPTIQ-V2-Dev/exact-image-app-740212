import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white'>
            {/* Newsletter Section */}
            <div className='bg-blue-600 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
                        <div>
                            <h3 className='text-2xl font-bold mb-2'>
                                Never Want to Miss
                                <br />
                                Any <span className='text-blue-200'>Job News?</span>
                            </h3>
                        </div>

                        <div className='flex gap-2 w-full md:w-auto md:min-w-80'>
                            <Input
                                type='email'
                                placeholder='Enter your email address'
                                className='bg-white text-gray-900 border-0 flex-1'
                            />
                            <Button className='bg-gray-900 hover:bg-gray-800 text-white px-6'>Subscribe</Button>
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
                            <p className='text-gray-400 mb-6 leading-relaxed'>
                                Your trusted partner in finding the right career opportunities. Connect with top
                                employers and discover your next career move.
                            </p>
                            <div className='flex space-x-4'>
                                <Link
                                    to='#'
                                    className='text-gray-400 hover:text-white transition-colors'
                                >
                                    <Facebook className='w-5 h-5' />
                                </Link>
                                <Link
                                    to='#'
                                    className='text-gray-400 hover:text-white transition-colors'
                                >
                                    <Twitter className='w-5 h-5' />
                                </Link>
                                <Link
                                    to='#'
                                    className='text-gray-400 hover:text-white transition-colors'
                                >
                                    <Linkedin className='w-5 h-5' />
                                </Link>
                                <Link
                                    to='#'
                                    className='text-gray-400 hover:text-white transition-colors'
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
                                        className='text-gray-400 hover:text-white transition-colors'
                                    >
                                        Browse Jobs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/companies'
                                        className='text-gray-400 hover:text-white transition-colors'
                                    >
                                        Browse Companies
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/salary-guide'
                                        className='text-gray-400 hover:text-white transition-colors'
                                    >
                                        Salary Guide
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/career-advice'
                                        className='text-gray-400 hover:text-white transition-colors'
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
                                        className='text-gray-400 hover:text-white transition-colors'
                                    >
                                        Post a Job
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/browse-resumes'
                                        className='text-gray-400 hover:text-white transition-colors'
                                    >
                                        Browse Resumes
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/employer-resources'
                                        className='text-gray-400 hover:text-white transition-colors'
                                    >
                                        Employer Resources
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/pricing'
                                        className='text-gray-400 hover:text-white transition-colors'
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
                                        className='text-gray-400 hover:text-white transition-colors'
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/contact'
                                        className='text-gray-400 hover:text-white transition-colors'
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/faq'
                                        className='text-gray-400 hover:text-white transition-colors'
                                    >
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/blog'
                                        className='text-gray-400 hover:text-white transition-colors'
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
                                        className='text-gray-400 hover:text-white transition-colors'
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/terms-of-service'
                                        className='text-gray-400 hover:text-white transition-colors'
                                    >
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/cookie-policy'
                                        className='text-gray-400 hover:text-white transition-colors'
                                    >
                                        Cookie Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/sitemap'
                                        className='text-gray-400 hover:text-white transition-colors'
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
            <div className='border-t border-gray-800 py-6 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between'>
                    <p className='text-gray-400 text-sm'>© {new Date().getFullYear()} Chakri. All rights reserved.</p>
                    <p className='text-gray-400 text-sm mt-2 md:mt-0'>Made with ❤️ for job seekers worldwide</p>
                </div>
            </div>
        </footer>
    );
};
