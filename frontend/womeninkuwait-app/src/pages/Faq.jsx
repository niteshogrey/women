import React, { useState } from "react";
import "../Faq.css";

// Reusable component for the plus/minus icons
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
    question: "What is Women in Kuwait?",
    answer:
      "Women in Kuwait is the leading professional network for female entrepreneurs and professionals in Kuwait. Our mission is to foster ambition through meaningful connections, curated resources, and career development opportunities.",
  },
  {
    question: "Who is eligible to join the network?",
    answer:
      "Our network is open to all women in Kuwait, from aspiring entrepreneurs and seasoned business owners to professionals across all industries. We believe in the power of a diverse and inclusive community.",
  },
  {
    question: "What are the benefits of becoming a member?",
    answer:
      "Members gain access to exclusive workshops, mentorship programs, networking events, and a supportive community of like-minded women. We provide the tools and connections to help you navigate your professional journey and build a thriving career.",
  },
  {
    question: "What kind of events does Women in Kuwait host?",
    answer:
      "We host a variety of events, including professional development workshops, panel discussions with industry leaders, networking mixers, and collaborative community projects. Our events are available both online and in-person.",
  },
    {
    question: "How can I get involved or stay updated?",
    answer:
      "The best way to get involved is to join our network! You can also follow us on our social media channels and subscribe to our newsletter to stay updated on upcoming events, news, and opportunities.",
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
