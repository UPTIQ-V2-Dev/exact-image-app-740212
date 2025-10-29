import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ComingSoonPageProps {
    title: string;
    description?: string;
}

export const ComingSoonPage = ({ title, description }: ComingSoonPageProps) => {
    return (
        <div className='min-h-screen bg-white flex flex-col'>
            <Header />
            <main className='flex-1 flex items-center justify-center px-4 py-16'>
                <div className='text-center max-w-md'>
                    <div className='mb-8'>
                        <div className='w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                            <svg
                                className='w-12 h-12 text-blue-600'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                                />
                            </svg>
                        </div>
                        <h1 className='text-3xl font-bold text-gray-900 mb-4'>{title}</h1>
                        <p className='text-gray-600 mb-8'>
                            {description ||
                                `The ${title.toLowerCase()} page is coming soon. We're working hard to bring you this feature.`}
                        </p>
                    </div>

                    <div className='space-y-4'>
                        <Button
                            asChild
                            className='w-full'
                        >
                            <Link to='/'>Back to Home</Link>
                        </Button>
                        <p className='text-sm text-gray-500'>Stay tuned for updates!</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
