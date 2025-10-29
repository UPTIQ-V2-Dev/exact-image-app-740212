import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const GetMatchedSection = () => {
    return (
        <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                    {/* Content */}
                    <div className='text-white'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                            Get Matched The Most
                            <br />
                            Valuable Jobs, Just Drop
                            <br />
                            Your CV at Chakri
                        </h2>

                        <p className='text-blue-100 mb-8 text-lg leading-relaxed'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.
                        </p>

                        <Button
                            asChild
                            size='lg'
                            className='bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-3 rounded-full'
                        >
                            <Link to='/upload-cv'>Upload Your CV</Link>
                        </Button>
                    </div>

                    {/* Image */}
                    <div className='flex justify-center lg:justify-end'>
                        <div className='relative'>
                            {/* Background decoration */}
                            <div className='absolute inset-0 bg-blue-500 rounded-2xl transform rotate-6 opacity-20'></div>

                            {/* Main image container */}
                            <div className='relative bg-blue-500 rounded-2xl overflow-hidden w-80 h-96 md:w-96 md:h-[480px]'>
                                {/* Person illustration - using a colored rectangle as placeholder since we don't have the exact image */}
                                <div className='w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center'>
                                    {/* Simplified person silhouette */}
                                    <div className='text-center'>
                                        {/* Person icon/illustration placeholder */}
                                        <div className='w-32 h-32 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center'>
                                            <svg
                                                className='w-16 h-16 text-white'
                                                fill='currentColor'
                                                viewBox='0 0 20 20'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                        </div>

                                        {/* Decorative elements */}
                                        <div className='absolute top-8 right-8 w-4 h-4 bg-white bg-opacity-30 rounded-full'></div>
                                        <div className='absolute bottom-16 left-8 w-6 h-6 bg-white bg-opacity-20 rounded-full'></div>
                                        <div className='absolute top-1/2 left-6 w-3 h-3 bg-white bg-opacity-25 rounded-full'></div>
                                    </div>
                                </div>

                                {/* Badge/notification element */}
                                <div className='absolute top-6 left-6 bg-white bg-opacity-90 rounded-full px-3 py-2 text-xs font-medium text-blue-600'>
                                    📍 Available Now
                                </div>

                                {/* Stats badge */}
                                <div className='absolute bottom-6 right-6 bg-white bg-opacity-90 rounded-lg px-3 py-2 text-xs font-medium text-blue-600'>
                                    💼 1000+ Jobs
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
