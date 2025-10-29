import { useQuery } from '@tanstack/react-query';
import { getJobCategories } from '@/services/job';
import { Card, CardContent } from '@/components/ui/card';
import { Megaphone, Palette, Users, Headphones, CheckSquare, Briefcase } from 'lucide-react';

const iconMap = {
    Megaphone: Megaphone,
    Palette: Palette,
    Users: Users,
    Headphones: Headphones,
    CheckSquare: CheckSquare,
    Briefcase: Briefcase
};

export const PlatformFeatures = () => {
    const { data: categories, isLoading } = useQuery({
        queryKey: ['job-categories'],
        queryFn: getJobCategories
    });

    if (isLoading) {
        return (
            <section className='py-16 px-4 sm:px-6 lg:px-8 bg-muted/50'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold text-foreground mb-4'>
                            One Platform
                            <br />
                            Many <span className='text-primary'>Solutions</span>
                        </h2>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <Card
                                key={index}
                                className='p-6 animate-pulse'
                            >
                                <div className='w-12 h-12 bg-muted rounded-lg mb-4'></div>
                                <div className='h-4 bg-muted rounded mb-2'></div>
                                <div className='h-3 bg-muted rounded mb-2'></div>
                                <div className='h-3 bg-muted rounded w-16'></div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className='py-16 px-4 sm:px-6 lg:px-8 bg-muted/50'>
            <div className='max-w-7xl mx-auto'>
                {/* Section Header */}
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
                        One Platform
                        <br />
                        Many <span className='text-primary'>Solutions</span>
                    </h2>
                </div>

                {/* Categories Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {categories?.map(category => {
                        const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Briefcase;

                        return (
                            <Card
                                key={category.id}
                                className='p-6 hover:shadow-lg transition-shadow cursor-pointer border-0 bg-card'
                            >
                                <CardContent className='p-0'>
                                    {/* Icon */}
                                    <div
                                        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${category.color}`}
                                    >
                                        <IconComponent className='w-6 h-6' />
                                    </div>

                                    {/* Category Name */}
                                    <h3
                                        className='text-lg font-semibold text-card-foreground mb-2'
                                        dangerouslySetInnerHTML={{ __html: category.name }}
                                    />

                                    {/* Description */}
                                    <p className='text-muted-foreground text-sm mb-3'>{category.description}</p>

                                    {/* Job Count */}
                                    <p className='text-primary font-medium text-sm'>
                                        {category.jobCount.toLocaleString()} Open position
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* View All Button */}
                <div className='text-center mt-12'>
                    <button className='text-primary hover:text-primary/80 font-medium text-lg hover:underline transition-colors'>
                        View All Categories →
                    </button>
                </div>
            </div>
        </section>
    );
};
