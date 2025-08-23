'use client';

import HeroNew from '../components/HeroNew';
import SearchBar from '../components/SearchBar';
import PropertyShowcase from '../components/PropertyShowcase';
import TopPlaces from '../components/TopPlaces';
import RecommendedPGs from '../components/RecommendedPGs';
import WhyApnaGhr from '../components/WhyApnaGhr';
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
      <section id="properties">
        <PropertyShowcase />
      </section>
      <section id="top-places">
        <TopPlaces />
      </section>
      <section id="recommended-pgs">
        <RecommendedPGs />
      </section>
      <section id="why-apanaghr">
        <WhyApnaGhr />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
