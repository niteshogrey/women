import React, { useState } from "react";
import "../Faq.css";


const AccordionIcon = ({ isOpen }) => (
  <svg
    className={`accordion-icon ${isOpen ? "open" : ""}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5V19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon-vertical"
    />
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


// Main FAQ data
const faqData = [
  {
    question: "What is Wom(en) Kuwait?",
    answer:
      "Wom(en) Kuwait is a community where the members can gather online and offline, connect with each other, form friendships, and create meaningful collaborations. ",
  },
  {
    question: "Who is eligible to join the network?",
    answer:
      "Wom(en) Kuwait is open to any women looking for community. You could join for professional or personal development.",
  },
  {
    question: "What are the benefits of becoming a member?",
    answer:
      "Members will get access to exclusive events, discounts, and personalized support.",
  },
  {
    question: "What kind of events does Women in Kuwait host?",
    answer:
      "Wom(en) Kuwait holds a variety of events including speed networking brunch, skill-building workshops, and group yoga sessions. ",
  },
    {
    question: "How can I get involved or stay updated?",
    answer:
      "To stay updated and attend events, you can sign up for our membership program. You could also collaborate with us by using the contact us form or sending us an email at Info@womenkuwait.com.",
  },
];

// The Accordion Item component
const FaqItem = ({ item, index, activeIndex, setActiveIndex }) => {
  const isOpen = index === activeIndex;

  const toggleAccordion = () => {
    setActiveIndex(isOpen ? null : index);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleAccordion}>
        <h3 className={isOpen ? "active" : ""}>{item.question}</h3>
        <AccordionIcon isOpen={isOpen} />
      </div>
      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
};


// The main FaqPage component
export default function FaqPage() {
    const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <FaqItem
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </div>
  );
}
