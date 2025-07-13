'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Advantages from '@/components/Advantages';
import News from '@/components/News';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Advantages />
        <News />
      </main>
      <Footer />
    </div>
  );
}