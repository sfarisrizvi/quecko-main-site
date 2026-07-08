"use client";

import React, { useState, useEffect, useRef } from "react";

const FAQAccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current?.scrollHeight || 0}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className="faq-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div
        className="faq-answer"
        style={{
          maxHeight: height,
          transition: "max-height 0.3s ease-in-out",
          overflow: "hidden"
        }}
      >
        <div ref={contentRef} className="faq-answer-inner">
          <p style={{ whiteSpace: "pre-line" }}>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function FAQAccordion({ faqs = [] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="faq-accordion">
      {faqs.map((faq, idx) => (
        <FAQAccordionItem key={idx} question={faq.q} answer={faq.a} />
      ))}
    </div>
  );
}
