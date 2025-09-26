import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQData {
  sectionTitle?: string;
  sectionSubtitle?: string;
  faqs?: FAQItem[];
}

interface FAQProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
  data?: FAQData;
}

const FAQ: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our chauffeur services",
  faqs = [
    {
      id: "1",
      question: "How do I make a reservation?",
      answer: "You can make a reservation through our website, mobile app, or by calling our 24/7 customer service line. Simply select your pickup location, dates, and preferred vehicle type to get started."
    },
    {
      id: "2", 
      question: "What documents do I need to rent a car?",
      answer: "You'll need a valid driver's license, a major credit card in your name, and a form of identification (passport or national ID). International visitors may need an International Driving Permit depending on their country of origin."
    },
    {
      id: "3",
      question: "Can I modify or cancel my booking?",
      answer: "Yes, you can modify or cancel your booking up to 24 hours before your scheduled pickup time without any charges. Changes made within 24 hours may incur additional fees depending on the type of modification."
    },
    {
      id: "4",
      question: "Are your vehicles insured?",
      answer: "Absolutely! All our vehicles come with comprehensive insurance coverage including collision damage waiver, theft protection, and third-party liability. Additional coverage options are also available for extra peace of mind."
    },
    {
      id: "5",
      question: "Do you offer chauffeur services?",
      answer: "Yes, we provide professional chauffeur services with experienced, licensed drivers. Our chauffeurs are trained in customer service and safety, ensuring a comfortable and reliable journey for all occasions."
    },
    {
      id: "6",
      question: "What happens if I return the car late?",
      answer: "Late returns are subject to additional charges based on our hourly rate. If you know you'll be late, please contact us as soon as possible to discuss options and potential extensions to avoid extra fees."
    }
  ],
  data
}) => {
  // Use dynamic data or fallback to props/defaults
  const displayTitle = data?.sectionTitle || title;
  const displaySubtitle = data?.sectionSubtitle || subtitle;
  const displayFaqs = data?.faqs || faqs;

  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 ">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {displayTitle}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {displaySubtitle}
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-1">
        {displayFaqs.map((faq, index) => {
          const isOpen = openItems.has(faq.id);
          
          return (
            <div
              key={faq.id}
              className={`group border-b border-gray-100 transition-all duration-200 ${
                isOpen ? 'bg-gray-50/30' : 'hover:bg-gray-50/20'
              }`}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-0 py-8 flex items-center justify-between text-left transition-all duration-200"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="text-xl font-medium text-gray-900 pr-8 leading-relaxed">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 flex items-center justify-center transition-all duration-200 ${
                    isOpen 
                      ? 'rotate-45' 
                      : 'hover:bg-gray-100 rounded-full'
                  }`}>
                    <Plus className={`w-5 h-5 transition-all duration-200 ${
                      isOpen ? 'text-gray-900' : 'text-gray-400'
                    }`} />
                  </div>
                </div>
              </button>

              {/* Answer Content */}
              <div
                id={`faq-answer-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  isOpen ? 'max-h-96 pb-8' : 'max-h-0'
                }`}
              >
                <div className="lg:pr-16">
                  <p className="text-gray-600 text-base leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default FAQ;
