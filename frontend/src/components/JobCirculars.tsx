import { useQuery } from '@tanstack/react-query';
import { getFeaturedJobs } from '@/services/job';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export const JobCirculars = () => {
    const { data: jobs, isLoading } = useQuery({
        queryKey: ['featured-jobs'],
        queryFn: getFeaturedJobs
    });

    if (isLoading) {
        return (
            <section className='py-16 px-4 sm:px-6 lg:px-8 bg-background'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold text-foreground mb-4'>
                            Featured Job <span className='text-primary'>Circulars</span>
                        </h2>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <Card
                                key={index}
                                className='p-4 animate-pulse'
                            >
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='w-12 h-12 bg-muted rounded-lg'></div>
                                    <div className='flex-1'>
                                        <div className='h-4 bg-muted rounded mb-2'></div>
                                        <div className='h-3 bg-muted rounded w-20'></div>
                                    </div>
                                </div>
                                <div className='h-4 bg-muted rounded mb-2'></div>
                                <div className='h-3 bg-muted rounded mb-4'></div>
                                <div className='h-8 bg-muted rounded'></div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className='py-16 px-4 sm:px-6 lg:px-8 bg-background'>
            <div className='max-w-7xl mx-auto'>
                {/* Section Header */}
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
                        Featured Job <span className='text-primary'>Circulars</span>
                    </h2>
                </div>

                {/* Jobs Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {jobs?.slice(0, 8).map(job => (
                        <Card
                            key={job.id}
                            className='p-4 hover:shadow-lg transition-shadow border border-border'
                        >
                            <CardContent className='p-0'>
                                {/* Company Logo and Info */}
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='w-12 h-12 bg-muted rounded-lg flex items-center justify-center'>
                                        <img
                                            src={job.company.logo}
                                            alt={job.company.name}
                                            className='w-8 h-8 object-contain'
                                            onError={e => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.nextElementSibling!.textContent =
                                                    job.company.name.charAt(0);
                                            }}
                                        />
                                        <span className='font-semibold text-muted-foreground hidden'>
                                            {job.company.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <h3 className='font-semibold text-card-foreground text-sm truncate'>
                                            {job.company.name}
                                        </h3>
                                        <p className='text-xs text-muted-foreground'>{job.company.industry}</p>
                                    </div>
                                </div>

                                {/* Job Title */}
                                <h4 className='font-semibold text-card-foreground mb-2 text-sm leading-tight'>
                                    {job.title}
                                </h4>

                                {/* Job Details */}
                                <div className='space-y-1 mb-4'>
                                    <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                                        <MapPin className='w-3 h-3' />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                                        <DollarSign className='w-3 h-3' />
                                        <span>{job.salary}</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                                        <Clock className='w-3 h-3' />
                                        <span>Deadline: {job.deadline}</span>
                                    </div>
                                </div>

                                {/* Apply Button */}
                                <Button
                                    asChild
                                    variant='outline'
                                    size='sm'
                                    className='w-full text-primary border-primary hover:bg-primary/10'
                                >
                                    <Link to={`/jobs/${job.id}`}>View Details</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* View All Button */}
                <div className='text-center mt-12'>
                    <Button
                        asChild
                        variant='outline'
                        size='lg'
                        className='px-8'
                    >
                        <Link to='/jobs'>View All Jobs</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};
