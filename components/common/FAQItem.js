import React from "react";

const FAQItem = ({ question, answer, isActive, onClick }) => {
    return (
        <div className="faq-item">
            <div className="faq-question" onClick={onClick}>
                {question}
                <span>{isActive ? "−" : "+"}</span>
            </div>
            {isActive && <div className="faq-answer">{answer}</div>}
        </div>
    );
};

export default FAQItem;
