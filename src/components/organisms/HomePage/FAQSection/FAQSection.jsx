import React from 'react'
import './FAQSection.scss'
import Accordion from '../../Accordion/Accordion'

const FAQSection = () => {
  return (
    <div className='faq-container'>
      <h1>Những câu hỏi thường gặp</h1>

      <Accordion title="Có cách nào để..." content="Lorem ipsum odor amet, consectetuer adipiscing elit. Et egestas scelerisque non leo at dignissim. Ullamcorper eget cras fermentum dignissim imperdiet aliquam. Aptent nisi malesuada odio blandit vulputate sed mi imperdiet! Finibus curabitur natoque euismod dui fermentum semper." color={"#6FB700"} />
      <Accordion title="Có cách nào để..." content="Lorem ipsum odor amet, consectetuer adipiscing elit. Et egestas scelerisque non leo at dignissim. Ullamcorper eget cras fermentum dignissim imperdiet aliquam. Aptent nisi malesuada odio blandit vulputate sed mi imperdiet! Finibus curabitur natoque euismod dui fermentum semper." color={"#6FB700"} />
      <Accordion title="Có cách nào để..." content="Lorem ipsum odor amet, consectetuer adipiscing elit. Et egestas scelerisque non leo at dignissim. Ullamcorper eget cras fermentum dignissim imperdiet aliquam. Aptent nisi malesuada odio blandit vulputate sed mi imperdiet! Finibus curabitur natoque euismod dui fermentum semper." color={"#6FB700"} />
    </div>
  )
}

export default FAQSection
