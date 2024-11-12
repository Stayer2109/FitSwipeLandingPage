import './FAQSection.scss'
import Accordion from '../../Accordion/Accordion'
import { useEffect, useState } from 'react';
import { FaqList } from '../../../../data/FAQs/FaqList';

const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    setFaqs(FaqList)
    console.log(FaqList);
  }, [])

  return (
    <div className='faq-container'>
      <h1>Những câu hỏi thường gặp</h1>

      {
        faqs.data != null ? (
          faqs.data.map((faqItem, index) => (
            <Accordion key={index} data={[faqItem]} />
          ))
        ) : (
          <Accordion isEmpty={true} />
        )
      }
    </div>
  );
}

export default FAQSection
