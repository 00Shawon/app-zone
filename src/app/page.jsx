import React from 'react';
import Hero from './components/Home/Hero';
import FeaturedApps from './components/Home/FeaturedApps';
import Trust from './components/Home/Trust';
import ProblemSolution from './components/Home/ProblemSolution';
import Benefits from './components/Home/Benefits';
import Testimonials from './components/Home/Testimonials';
import FAQ from './components/Home/FAQ';



const home = () => {
  return (
    <div>
      <Hero/>
      <div className='max-w-7xl mx-auto'>
        <Trust/>
       <ProblemSolution/>
       <FeaturedApps/>
       <Benefits/>
       <Testimonials/>
       <FAQ/>
      </div>
    </div>
  );
};

export default home;
