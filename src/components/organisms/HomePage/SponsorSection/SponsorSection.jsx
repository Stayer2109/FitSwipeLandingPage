import React from 'react'
import './SponsorSection.scss'
import FPTImage from '../../../../assets/images/pt/fpt-icon.png'

const SponsorSection = () => {
  return (
    <div className='sponsor-container'>
      <h1>Với sự tham gia của</h1>
      <div className="divine-line" />
      <div className='sponsor-items'>
        <img src={FPTImage} className='item' />
        <img src={FPTImage} className='item' />
        <img src={FPTImage} className='item' />
        <img src={FPTImage} className='item' />
        <img src={FPTImage} className='item' />
        <img src={FPTImage} className='item' />
      </div>
    </div>
  )
}

export default SponsorSection
