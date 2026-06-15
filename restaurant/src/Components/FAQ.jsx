import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {Link} from 'react-router-dom'

const faqData = [
  {
    question: "How soon will I see results?",
    answer:
      "Most clients see measurable results — increased Maps visibility and social engagement — within 30 days.",
  },
  {
    question: "Do I need marketing knowledge?",
    answer:
      "Absolutely not. We do everything — strategy, content creation, posting, ad management, and reporting. You focus on cooking. We send a simple monthly report in plain language.",
  },
  {
    question: "Is this only for large restaurants?",
    answer:
      "No. We have plans for single-outlet restaurants, home chefs, and cloud kitchens. Our goal is to give every food business access to professional digital marketing.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {activeIndex === index ? (
                <FiChevronUp size={24} />
              ) : (
                <FiChevronDown size={24} />
              )}
            </button>

            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

          <div className='center' style={{marginTop:"40px"}}>
            <Link to="/contact">
                <button className="cta-btn-blue">Get your Free Restaurant Audit<img src="/arrow-right .svg" alt="" className='white-arrow' /></button>
            </Link>
          </div>
    </section>
  );
}