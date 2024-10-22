import React from 'react'
import './HomeTemplate.scss'
import WelcomeSection from '../../organisms/HomePage/WelcomeSection/WelcomeSection'
import AboutUs from '../../organisms/HomePage/AboutUsSection/AboutUs'
import OfferSection from '../../organisms/HomePage/OfferSection/OfferSection'

const HomeTemplate = () => {
  return (
    <div className='homepage-container'>
      <div className='welcome-section'>
        <WelcomeSection />
      </div>
      <div className='about-us-section'>
        <AboutUs />
      </div>
      <div className='offer-section-container'>
        <OfferSection />
      </div>
    </div>
  )
}

export default HomeTemplate