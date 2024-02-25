import React from 'react'
import Section1 from './../components/section1/Section1';
import Section2 from './../components/section2/Section2';
import Section3 from './../components/section3/Section3';
import Hero from '../components/hero/Hero';

const Home = ({t}) => {
  return (
    <div>
      <Hero t={t}/>
      <Section1 t={t}/>
      <Section2 t={t}/>
      <Section3 t={t}/>
    </div>
  )
}

export default Home