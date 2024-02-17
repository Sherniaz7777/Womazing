import React from 'react'
import Section1 from './../components/section1/Section1';
import Section2 from './../components/section2/Section2';
import Section3 from './../components/section3/Section3';
import Hero from '../components/hero/Hero';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  )
}

export default Home