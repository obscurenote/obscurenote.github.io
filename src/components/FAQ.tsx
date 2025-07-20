
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Obscure keep my notes private?",
    answer: "All your notes are stored locally on your device. Nothing is sent to external servers, ensuring complete privacy and control over your data."
  },
  {
    question: "Can I sync my notes across devices?",
    answer: "Obscure prioritizes privacy by keeping everything local. We're exploring privacy-first sync options for future releases."
  },
  {
    question: "Is Obscure really minimal?",
    answer: "Yes! Obscure focuses on the essentials - writing, organizing, and finding your notes without unnecessary bloat or distractions."
  },
  {
    question: "What platforms does Obscure support?",
    answer: "Obscure works on all modern web browsers and we're developing native apps for desktop and mobile platforms."
  },
  {
    question: "How much does Obscure cost?",
    answer: "Obscure will be completely free with optional premium features for advanced users who want additional functionality."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-16">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-gray-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
            >
              <span className="text-gray-900 font-medium text-lg">
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="h-5 w-5 text-indigo-600 flex-shrink-0" />
              ) : (
                <Plus className="h-5 w-5 text-indigo-600 flex-shrink-0" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-5 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed pt-4">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
