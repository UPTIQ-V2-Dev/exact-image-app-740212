import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        const searchParams = new URLSearchParams();
        if (jobTitle) searchParams.append('q', jobTitle);
        if (location) searchParams.append('location', location);

        navigate(`/search-jobs?${searchParams.toString()}`);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <section className='bg-white py-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto text-center'>
                {/* Main Heading */}
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
                    Get The <span className='text-blue-600'>Right Job</span>
                    <br />
                    You Deserve
                </h1>

                {/* Subheading */}
                <p className='text-lg text-gray-600 mb-12 max-w-2xl mx-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                    lectus magna fringilla urna
                </p>

                {/* Search Form */}
                <div className='bg-white rounded-lg border border-gray-200 shadow-lg p-2 max-w-3xl mx-auto mb-8'>
                    <div className='flex flex-col md:flex-row gap-2'>
                        {/* Job Title Input */}
                        <div className='flex-1 flex items-center gap-2 px-4 py-3 border-r border-gray-200 md:border-r md:border-b-0 border-b'>
                            <Search className='w-5 h-5 text-gray-400' />
                            <Input
                                type='text'
                                placeholder='Job Title Keyword'
                                value={jobTitle}
                                onChange={e => setJobTitle(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className='border-0 shadow-none focus:ring-0 focus:outline-none p-0 text-gray-900 placeholder-gray-500'
                            />
                        </div>

                        {/* Location Input */}
                        <div className='flex-1 flex items-center gap-2 px-4 py-3'>
                            <MapPin className='w-5 h-5 text-gray-400' />
                            <Input
                                type='text'
                                placeholder='Your Location'
                                value={location}
                                onChange={e => setLocation(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className='border-0 shadow-none focus:ring-0 focus:outline-none p-0 text-gray-900 placeholder-gray-500'
                            />
                        </div>

                        {/* Search Button */}
                        <Button
                            onClick={handleSearch}
                            className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors md:rounded-r-lg md:rounded-l-none'
                        >
                            Search
                        </Button>
                    </div>
                </div>

                {/* Popular Keywords */}
                <div className='flex items-center justify-center gap-2 text-sm text-gray-500'>
                    <span>Popular:</span>
                    <button className='text-blue-600 hover:underline'>UI Designer</button>
                    <span>,</span>
                    <button className='text-blue-600 hover:underline'>UX Researcher</button>
                    <span>,</span>
                    <button className='text-blue-600 hover:underline'>Android</button>
                    <span>,</span>
                    <button className='text-blue-600 hover:underline'>Admin</button>
                </div>
            </div>
        </section>
    );
};
