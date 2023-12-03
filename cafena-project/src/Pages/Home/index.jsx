import React from 'react'

import SpecialMenu from '../../Layout/SpecialMenu'
import Distinct from './../../Layout/Distinct/index';
import AboutUs from '../../Layout/AboutUs';
import Review from './../../Layout/Review/index';
import TopGrade from './../../Layout/TopGrade/index';
import NewsBlog from '../../Layout/NewsBlog';

function Home() {
  return (
    <main>
      <Distinct/>
      <AboutUs/>
      <SpecialMenu/>
      <Review/>
      <TopGrade/>
      <NewsBlog/>
      
    </main>
  )


}

export default Home