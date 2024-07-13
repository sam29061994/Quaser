import ClientsLogo from '@/components/LandingPage/ClientsLogo';
import FeaturesSection from '@/components/LandingPage/FeaturesSection';
import HeroSection from '@/components/LandingPage/HeroSection';
import TechnologySection from '@/components/LandingPage/TechnologySection';
import ProductPreview from '@/components/LandingPage/ProductPreview';
import Testomonials from '@/components/LandingPage/Testimonials';
import HowItWorks from '@/components/LandingPage/HowItWorks';
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <>
      <Banner />
      <HeroSection />
      <FeaturesSection />
      <ClientsLogo />
      <TechnologySection />
      <ProductPreview />
      <Testomonials />
      <HowItWorks />
    </>
  );
}
