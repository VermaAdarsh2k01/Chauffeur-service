import React, { useState } from "react";
import {
  Car,
  Heart,
  Calendar,
  Search,
  ChevronDown,
  User,
  Phone,
  Mail,
  Check,
} from "lucide-react";
import { Button } from "./ui/button";

interface WeddingsFormData {
  weddingEventLocation: string;
  weddingEventDate: string;
  weddingNumberOfCars: string;
}

interface WeddingsAdditionalData {
  fromDate: string;
  toDate: string;
  firstName: string;
  lastName: string;
  contact: string;
  email: string;
  agreeTerms: boolean;
  agreeCommunication: boolean;
}

const WeddingsForm = () => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [formData, setFormData] = useState<WeddingsFormData>({
    weddingEventLocation: "",
    weddingEventDate: "",
    weddingNumberOfCars: "",
  });

  const [weddingsAdditional, setWeddingsAdditional] = useState<WeddingsAdditionalData>({
    fromDate: "",
    toDate: "",
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    agreeTerms: false,
    agreeCommunication: false,
  });

  const handleInputChange = (field: keyof WeddingsFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleWeddingsChange = (field: keyof WeddingsAdditionalData, value: string | boolean) => {
    setWeddingsAdditional((prev) => ({
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
      ...weddingsAdditional
    };
    console.log("Weddings Booking data:", allData);
    // Add your final booking API call here
  };

  const renderWeddingsAdditionalFields = () => {
    return (
      <div className="space-y-6 mt-8 pt-6 border-t border-white/30">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Details</h3>
        
        {/* Date Range Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              From Date *
            </label>
            <div className="relative">
              <input
                type="date"
                value={weddingsAdditional.fromDate}
                onChange={(e) => handleWeddingsChange("fromDate", e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              To Date *
            </label>
            <div className="relative">
              <input
                type="date"
                value={weddingsAdditional.toDate}
                onChange={(e) => handleWeddingsChange("toDate", e.target.value)}
                min={weddingsAdditional.fromDate}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
            </div>
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
                value={weddingsAdditional.firstName}
                onChange={(e) => handleWeddingsChange("firstName", e.target.value)}
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
                value={weddingsAdditional.lastName}
                onChange={(e) => handleWeddingsChange("lastName", e.target.value)}
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
                value={weddingsAdditional.contact}
                onChange={(e) => handleWeddingsChange("contact", e.target.value)}
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
                value={weddingsAdditional.email}
                onChange={(e) => handleWeddingsChange("email", e.target.value)}
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
              checked={weddingsAdditional.agreeTerms}
              onChange={(e) => handleWeddingsChange("agreeTerms", e.target.checked)}
              className="w-5 h-5 text-blue-800 border-gray-300 rounded focus:ring-green-500 mt-0.5"
            />
            <span className="text-sm text-gray-800">
              I agree to the <a href="/terms" className="text-blue-800 hover:text-green-700 underline">Terms & Conditions</a>
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={weddingsAdditional.agreeCommunication}
              onChange={(e) => handleWeddingsChange("agreeCommunication", e.target.checked)}
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
            disabled={!weddingsAdditional.agreeTerms || !weddingsAdditional.firstName || !weddingsAdditional.lastName || !weddingsAdditional.contact || !weddingsAdditional.email || !weddingsAdditional.fromDate || !weddingsAdditional.toDate}
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
                  Event Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Wedding venue"
                    value={formData.weddingEventLocation}
                    onChange={(e) => handleInputChange("weddingEventLocation", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <Heart className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
                </div>
              </div>
              <div className="md:col-span-1">
                <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
                  Event Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.weddingEventDate}
                    onChange={(e) => handleInputChange("weddingEventDate", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
                </div>
              </div>
              <div className="md:col-span-1">
                <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
                  Number of Cars
                </label>
                <div className="relative">
                  <select 
                    value={formData.weddingNumberOfCars}
                    onChange={(e) => handleInputChange("weddingNumberOfCars", e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 text-gray-800 appearance-none cursor-pointer"
                  >
                    <option value="">Select number of cars</option>
                    <option value="1">1 Car</option>
                    <option value="2">2 Cars</option>
                    <option value="3+">3+ Cars</option>
                  </select>
                  <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
            
            {/* Additional Fields for Weddings */}
            {showAdditionalFields && renderWeddingsAdditionalFields()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingsForm;
