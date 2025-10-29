import { mockTrustedCompanies } from '@/data/mockData';

export const CompanyLogos = () => {
    return (
        <section className='py-12 px-4 sm:px-6 lg:px-8 bg-gray-50'>
            <div className='max-w-7xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-8'>
                    <p className='text-gray-600 text-sm font-medium mb-4'>
                        More than 25,000+ companies worldwide with us
                    </p>
                </div>

                {/* Company Logos */}
                <div className='flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-60'>
                    {mockTrustedCompanies.map(company => (
                        <div
                            key={company}
                            className='flex items-center justify-center h-12 grayscale hover:grayscale-0 transition-all duration-300'
                        >
                            <img
                                src={`https://logo.clearbit.com/${company}.com`}
                                alt={`${company} logo`}
                                className='h-8 object-contain'
                                onError={e => {
                                    // Fallback to company name if logo fails to load
                                    e.currentTarget.style.display = 'none';
                                    const fallback = document.createElement('div');
                                    fallback.className = 'text-gray-400 font-semibold text-lg capitalize';
                                    fallback.textContent = company;
                                    e.currentTarget.parentNode?.appendChild(fallback);
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Reviews Section */}
                <div className='mt-16'>
                    <div className='text-center mb-8'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                            Reviews of People Who Have
                            <br />
                            Found Jobs Through Chakri
                        </h3>
                    </div>

                    {/* Review Stars and Stats */}
                    <div className='flex flex-col items-center space-y-4'>
                        {/* Stars */}
                        <div className='flex items-center gap-1'>
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className='w-6 h-6 text-yellow-400 fill-current'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                                </svg>
                            ))}
                        </div>

                        {/* Rating Text */}
                        <p className='text-lg font-semibold text-gray-900'>Great 4.8 out of 5</p>

                        {/* User Avatars */}
                        <div className='flex items-center'>
                            <div className='flex -space-x-2'>
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className='w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white'
                                    ></div>
                                ))}
                            </div>
                            <span className='ml-3 text-sm text-gray-600'>Based on 892 reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
