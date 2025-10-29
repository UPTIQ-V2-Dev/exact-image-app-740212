import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { PlatformFeatures } from '@/components/PlatformFeatures';
import { JobCirculars } from '@/components/JobCirculars';
import { CompanyLogos } from '@/components/CompanyLogos';
import { GetMatchedSection } from '@/components/GetMatchedSection';
import { Footer } from '@/components/Footer';

export const LandingPage = () => {
    return (
        <div className='min-h-screen bg-white'>
            <Header />
            <main>
                <HeroSection />
                <PlatformFeatures />
                <JobCirculars />
                <CompanyLogos />
                <GetMatchedSection />
            </main>
            <Footer />
        </div>
    );
};
