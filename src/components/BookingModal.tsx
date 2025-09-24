import React from 'react';
import { Modal, ModalBody, ModalContent, ModalTrigger } from './ui/animated-modal';
import TabNavigation from './TabNavigation';

interface BookingModalProps {
  children: React.ReactNode;
  vehicleName?: string;
  buttonClassName?: string;
}

const BookingModal = ({ children, vehicleName, buttonClassName }: BookingModalProps) => {
  const defaultClassName = "px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-semibold";
  
  return (
    <Modal>
      <ModalTrigger className={buttonClassName || defaultClassName}>
        {children}
      </ModalTrigger>
      <ModalBody>
        <ModalContent className="max-h-[90vh] overflow-y-auto p-4 md:p-6">
          <div className="mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              {vehicleName ? `Book ${vehicleName}` : 'Book Your Ride'}
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Choose your service type and fill in the details to book your perfect ride.
            </p>
          </div>
          
          {/* TabNavigation Component */}
          <div className="w-full -mx-2 md:-mx-4">
            <TabNavigation />
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default BookingModal;
