import About from '@/components/About/About';
import Discover from '@/components/Discover/Discover';
import EventsPreview from '@/components/EventsPreview/EventsPreview';
import Hero from '@/components/Hero/Hero';
import Partners from '@/components/Partners/Partners';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Discover />
      <EventsPreview />
      <Partners />
    </>
  );
}
