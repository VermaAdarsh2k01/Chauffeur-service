import React, { useState } from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from './ui/animated-modal';
import { Phone } from 'lucide-react';

interface PhoneEnquiryFormProps {
  isMobile?: boolean;
}

const PhoneEnquiryForm = ({ isMobile = false }: PhoneEnquiryFormProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form after 2 seconds
      setTimeout(() => {
        setSubmitted(false);
        setPhoneNumber('');
      }, 2000);
    }, 1000);
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const limitedPhoneNumber = phoneNumber.slice(0, 10);
    
    // Format as (XXX) XXX-XXXX
    if (limitedPhoneNumber.length >= 6) {
      return `(${limitedPhoneNumber.slice(0, 3)}) ${limitedPhoneNumber.slice(3, 6)}-${limitedPhoneNumber.slice(6)}`;
    } else if (limitedPhoneNumber.length >= 3) {
      return `(${limitedPhoneNumber.slice(0, 3)}) ${limitedPhoneNumber.slice(3)}`;
    } else {
      return limitedPhoneNumber;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  return (
    <Modal>
      <ModalTrigger className={`group bg-black text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden relative ${
        isMobile ? 'block w-full text-center px-4 py-3' : ''
      }`}>
        {!isMobile ? (
          <>
            {/* Phone icon - starts from left, slides in on hover */}
            <Phone 
              className="absolute left-1/2 top-1/2 w-4 h-4 transition-all duration-300 ease-in-out -translate-y-1/2 -translate-x-[calc(50%+200%)] group-hover:-translate-x-1/2 opacity-0 group-hover:opacity-100" 
            />
            {/* Text - slides out to the right on hover */}
            <span className="block transition-all duration-300 ease-in-out group-hover:translate-x-[200%]">
              Request Enquiry
            </span>
          </>
        ) : (
          'Request Enquiry'
        )}
      </ModalTrigger>
      <ModalBody className="!max-w-[450px] !w-[90%] md:!w-[450px] !min-h-fit">
        <ModalContent>
          {!submitted ? (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Request a Call Back
                </h2>
                <p className="text-gray-600">
                  Enter your phone number and we'll call you back within 24 hours to discuss your travel needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="(123) 456-7890"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                    required
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    We'll never share your phone number with third parties.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || phoneNumber.replace(/\D/g, '').length < 10}
                  className="w-full bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-md hover:from-green-700/90 hover:to-emerald-700/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 border border-green-500/20 hover:border-green-400/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Call Back'}
                </button>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Our travel expert will call you within 24 hours</li>
                    <li>• We'll discuss your specific travel requirements</li>
                    <li>• Get a personalized quote for your journey</li>
                    <li>• No obligation - completely free consultation</li>
                  </ul>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
              <p className="text-gray-600">
                Thank you! We'll call you back at <strong>{phoneNumber}</strong> within 24 hours.
              </p>
            </div>
          )}
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default PhoneEnquiryForm;
