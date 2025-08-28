'use client';

import HeroNew from '../components/HeroNew';
import SearchBar from '../components/SearchBar';
import TopPlaces from '../components/TopPlaces';
import RecommendedPGs from '../components/RecommendedPGs';
import WhyApnaGhr from '../components/WhyApnaGhr';
import Testimonials from '../components/Testimonials';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home" className="relative">
        <HeroNew />
        <SearchBar />
      </section>
      <section id="recommended-pgs">
        <RecommendedPGs />
      </section>
      <section id="top-places">
        <TopPlaces />
      </section>
      <section id="why-apanaghr">
        <WhyApnaGhr />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
