import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Industries from './components/Industries';
import Results from './components/Results';
import AIStrategist from './components/AIStrategist';
import ContactCTA from './components/ContactCTA';
import Cursor from './components/Cursor';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-brand-500 selection:text-white">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AIStrategist />
        <WhyUs />
        <Industries />
        <Results />
        <ContactCTA />
      </main>
    </div>
  );
};

export default App;