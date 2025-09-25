import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalContent, ModalProvider, useModal } from './ui/animated-modal';
import { Button } from './ui/button';

// Global flag to ensure timer only runs once per session
let timerStarted = false;

const AutoModalTrigger = () => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Check if modal has already been shown in this session or timer already started
    const hasShown = localStorage.getItem('autoModalShown');
    if (hasShown || timerStarted) {
      return;
    }

    // Mark timer as started globally to prevent multiple timers
    timerStarted = true;

    // Show modal after 20 seconds of page load
    const timer = setTimeout(() => {
      // Double-check that it hasn't been shown yet
      const hasShownNow = localStorage.getItem('autoModalShown');
      if (!hasShownNow) {
        setShouldShow(true);
      }
    }, 20000);

    // Cleanup
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!shouldShow) {
    return null;
  }

  return (
    <ModalProvider>
      <AutoModalContent setShouldShow={setShouldShow} />
    </ModalProvider>
  );
};

interface AutoModalContentProps {
  setShouldShow: (value: boolean) => void;
}

const AutoModalContent = ({ setShouldShow }: AutoModalContentProps) => {
  const { setOpen } = useModal();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, [setOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Mark as shown in localStorage
      localStorage.setItem('autoModalShown', 'true');
      // Reset form after 2 seconds
      setTimeout(() => {
        setSubmitted(false);
        setPhoneNumber('');
        setOpen(false);
        setShouldShow(false);
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

  const handleClose = () => {
    setOpen(false);
    setShouldShow(false);
    // Mark as shown so it doesn't appear again
    localStorage.setItem('autoModalShown', 'true');
  };

  return (
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
                <label htmlFor="auto-phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="auto-phone"
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

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting || phoneNumber.replace(/\D/g, '').length < 10}
                className="w-full"
              >
                {isSubmitting ? 'Submitting...' : 'Request Call Back'}
              </Button>

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

            <div className="mt-4 text-center">
              <button
                onClick={handleClose}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Not interested right now
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  );
};

export default AutoModalTrigger;
