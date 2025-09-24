import React, { useState } from "react";
import {
  ArrowRightLeft,
  MapPin,
  Calendar,
  Clock,
  Search,
  User,
  Phone,
  Mail,
  MessageSquare,
  Luggage,
  Check,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";

interface OutstationFormData {
  outstationPickupLocation: string;
  outstationDropLocation: string;
  outstationDate: string;
  outstationTime: string;
}

interface OutstationAdditionalData {
  numberOfDays: string;
  pax: string;
  luggage: string;
  additionalNotes: string;
  firstName: string;
  lastName: string;
  contact: string;
  email: string;
  agreeTerms: boolean;
  agreeCommunication: boolean;
}

const OutstationForm = () => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [formData, setFormData] = useState<OutstationFormData>({
    outstationPickupLocation: "",
    outstationDropLocation: "",
    outstationDate: "",
    outstationTime: "",
  });

  const [outstationAdditional, setOutstationAdditional] = useState<OutstationAdditionalData>({
    numberOfDays: "",
    pax: "",
    luggage: "",
    additionalNotes: "",
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    agreeTerms: false,
    agreeCommunication: false,
  });

  const handleInputChange = (field: keyof OutstationFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleOutstationChange = (field: keyof OutstationAdditionalData, value: string | boolean) => {
    setOutstationAdditional((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleInitialBookNow = () => {
    setShowAdditionalFields(true);
  };

  const handleFinalBookNow = () => {
    const allData = {
      ...formData,
      ...outstationAdditional
    };
    console.log("Outstation Booking data:", allData);
    // Add your final booking API call here
  };

  const renderOutstationAdditionalFields = () => {
    return (
      <div className="space-y-6 mt-8 pt-6 border-t border-white/30">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Details</h3>
        
        {/* Trip Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Number of Days *
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                placeholder="Enter number of days"
                value={outstationAdditional.numberOfDays}
                onChange={(e) => handleOutstationChange("numberOfDays", e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Number of Passengers (Pax) *
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="8"
                placeholder="Enter number of passengers"
                value={outstationAdditional.pax}
                onChange={(e) => handleOutstationChange("pax", e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Number of Luggage
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                placeholder="Enter luggage count"
                value={outstationAdditional.luggage}
                onChange={(e) => handleOutstationChange("luggage", e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Luggage className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
            Additional Notes
          </label>
          <div className="relative">
            <textarea
              placeholder="AC, quiet ride, Elders on board, kids on board, woman on board etc."
              value={outstationAdditional.additionalNotes}
              onChange={(e) => handleOutstationChange("additionalNotes", e.target.value)}
              rows={3}
              className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm resize-vertical"
            />
            <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-blue-800" />
          </div>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              First Name *
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter first name"
                value={outstationAdditional.firstName}
                onChange={(e) => handleOutstationChange("firstName", e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Last Name *
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter last name"
                value={outstationAdditional.lastName}
                onChange={(e) => handleOutstationChange("lastName", e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Contact Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                placeholder="Enter contact number"
                value={outstationAdditional.contact}
                onChange={(e) => handleOutstationChange("contact", e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Email (for invoice) *
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter email address"
                value={outstationAdditional.email}
                onChange={(e) => handleOutstationChange("email", e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
            </div>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={outstationAdditional.agreeTerms}
              onChange={(e) => handleOutstationChange("agreeTerms", e.target.checked)}
              className="w-5 h-5 text-blue-800 border-gray-300 rounded focus:ring-green-500 mt-0.5"
            />
            <span className="text-sm text-gray-800">
              I agree to the <a href="/terms" className="text-blue-800 hover:text-green-700 underline">Terms & Conditions</a>
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={outstationAdditional.agreeCommunication}
              onChange={(e) => handleOutstationChange("agreeCommunication", e.target.checked)}
              className="w-5 h-5 text-blue-800 border-gray-300 rounded focus:ring-green-500 mt-0.5"
            />
            <span className="text-sm text-gray-800">
              I agree to be contacted by your team via call, WhatsApp, SMS, and email for booking confirmations, updates, and promotional offers
            </span>
          </label>
        </div>

        {/* Final Book Now Button */}
        <div className="flex justify-center pt-4">
          <Button
            onClick={handleFinalBookNow}
            disabled={!outstationAdditional.agreeTerms || !outstationAdditional.firstName || !outstationAdditional.lastName || !outstationAdditional.contact || !outstationAdditional.email || !outstationAdditional.numberOfDays || !outstationAdditional.pax}
            variant="primary"
            size="lg"
          >
            <Check className="w-4 h-4" />
            Complete Booking
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Glassmorphism Container */}
      <div className="bg-white/30 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl shadow-black/5 overflow-hidden">
        {/* Form Content */}
        <div className="p-4 sm:p-8 bg-gradient-to-b from-white/40 via-white/30 to-white/20 backdrop-blur-xl">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="md:col-span-1">
                <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
                  Pickup Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter pickup address"
                    value={formData.outstationPickupLocation}
                    onChange={(e) => handleInputChange("outstationPickupLocation", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
                </div>
              </div>
              <div className="md:col-span-1">
                <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
                  Drop Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter drop address"
                    value={formData.outstationDropLocation}
                    onChange={(e) => handleInputChange("outstationDropLocation", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <ArrowRightLeft className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
                </div>
              </div>
              <div className="md:col-span-1">
                <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
                  Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.outstationDate}
                    onChange={(e) => handleInputChange("outstationDate", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
                </div>
              </div>
              <div className="md:col-span-1">
                <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
                  Time
                </label>
                <div className="relative">
                  <input
                    type="time"
                    value={formData.outstationTime}
                    onChange={(e) => handleInputChange("outstationTime", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
                </div>
              </div>
              {!showAdditionalFields && (
                <div className="md:col-span-1 flex items-end">
                  <Button
                    onClick={handleInitialBookNow}
                    variant="primary"
                    size="md"
                    className="w-full group overflow-hidden relative"
                  >
                    {/* Search icon - starts from left, slides in on hover */}
                    <Search 
                      className="absolute left-1/2 top-1/2 w-4 h-4 transition-all duration-300 ease-in-out -translate-y-1/2 -translate-x-[calc(50%+200%)] group-hover:-translate-x-1/2 opacity-0 group-hover:opacity-100" 
                    />
                    {/* Text - slides out to the right on hover */}
                    <span className="block transition-all duration-300 ease-in-out group-hover:translate-x-[200%]">
                      Book Now
                    </span>
                  </Button>
                </div>
              )}
            </div>
            
            {/* Additional Fields for Outstation */}
            {showAdditionalFields && renderOutstationAdditionalFields()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutstationForm;
