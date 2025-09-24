import React, { useState } from "react";
import {
  Building2,
  Users,
  Clock,
  Search,
  ChevronDown,
  User,
  Phone,
  Mail,
  Check,
} from "lucide-react";

interface CorporateFormData {
  corporateCompanyName: string;
  corporateServiceType: string;
  corporateDuration: string;
}

interface CorporateAdditionalData {
  industry: string;
  companyEmail: string;
  contact: string;
  firstName: string;
  lastName: string;
  agreeTerms: boolean;
  agreeCommunication: boolean;
}

const CorporateForm = () => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [formData, setFormData] = useState<CorporateFormData>({
    corporateCompanyName: "",
    corporateServiceType: "",
    corporateDuration: "",
  });

  const [corporateAdditional, setCorporateAdditional] = useState<CorporateAdditionalData>({
    industry: "",
    companyEmail: "",
    contact: "",
    firstName: "",
    lastName: "",
    agreeTerms: false,
    agreeCommunication: false,
  });

  const handleInputChange = (field: keyof CorporateFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCorporateChange = (field: keyof CorporateAdditionalData, value: string | boolean) => {
    setCorporateAdditional((prev) => ({
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
      ...corporateAdditional
    };
    console.log("Corporate Booking data:", allData);
    // Add your final booking API call here
  };

  const renderCorporateAdditionalFields = () => {
    return (
      <div className="space-y-6 mt-8 pt-6 border-t border-white/30">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Details</h3>
        
        {/* Business Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Industry *
            </label>
            <div className="relative">
              <select
                value={corporateAdditional.industry}
                onChange={(e) => handleCorporateChange("industry", e.target.value)}
                required
                className="w-full pl-10 pr-10 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 text-gray-800 appearance-none cursor-pointer"
              >
                <option value="">Select industry</option>
                <option value="IT">IT</option>
                <option value="Events">Events</option>
                <option value="Marketing">Marketing</option>
                <option value="Media">Media</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Retail">Retail</option>
                <option value="Other">Other</option>
              </select>
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Company Email *
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter company email"
                value={corporateAdditional.companyEmail}
                onChange={(e) => handleCorporateChange("companyEmail", e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
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
                value={corporateAdditional.firstName}
                onChange={(e) => handleCorporateChange("firstName", e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
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
                value={corporateAdditional.lastName}
                onChange={(e) => handleCorporateChange("lastName", e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
            Contact Number *
          </label>
          <div className="relative">
            <input
              type="tel"
              placeholder="Enter contact number"
              value={corporateAdditional.contact}
              onChange={(e) => handleCorporateChange("contact", e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
            />
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={corporateAdditional.agreeTerms}
              onChange={(e) => handleCorporateChange("agreeTerms", e.target.checked)}
              className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-0.5"
            />
            <span className="text-sm text-gray-800">
              I agree to the <a href="/terms" className="text-green-600 hover:text-green-700 underline">Terms & Conditions</a>
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={corporateAdditional.agreeCommunication}
              onChange={(e) => handleCorporateChange("agreeCommunication", e.target.checked)}
              className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-0.5"
            />
            <span className="text-sm text-gray-800">
              I agree to be contacted by your team via call, WhatsApp, SMS, and email for booking confirmations, updates, and promotional offers
            </span>
          </label>
        </div>

        {/* Final Book Now Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={handleFinalBookNow}
            disabled={!corporateAdditional.agreeTerms || !corporateAdditional.firstName || !corporateAdditional.lastName || !corporateAdditional.contact || !corporateAdditional.companyEmail || !corporateAdditional.industry}
            className="bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-md hover:from-green-700/90 hover:to-emerald-700/90 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 border border-green-500/20 hover:border-green-400/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
          >
            <Check className="w-4 h-4" />
            Complete Booking
          </button>
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
                  Company Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter company name"
                    value={formData.corporateCompanyName}
                    onChange={(e) => handleInputChange("corporateCompanyName", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
                </div>
              </div>
              <div className="md:col-span-1">
                <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
                  Service Type
                </label>
                <div className="relative">
                  <select 
                    value={formData.corporateServiceType}
                    onChange={(e) => handleInputChange("corporateServiceType", e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 text-gray-800 appearance-none cursor-pointer"
                  >
                    <option value="">Select service type</option>
                    <option value="Executive Transport">Executive Transport</option>
                    <option value="Employee Shuttle">Employee Shuttle</option>
                    <option value="Event Transport">Event Transport</option>
                  </select>
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
                </div>
              </div>
              <div className="md:col-span-1">
                <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
                  Duration
                </label>
                <div className="relative">
                  <select 
                    value={formData.corporateDuration}
                    onChange={(e) => handleInputChange("corporateDuration", e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 text-gray-800 appearance-none cursor-pointer"
                  >
                    <option value="">Select duration</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
                </div>
              </div>
              {!showAdditionalFields && (
                <div className="md:col-span-1 flex items-end">
                  <button
                    onClick={handleInitialBookNow}
                    className="w-full bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-md hover:from-green-700/90 hover:to-emerald-700/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 border border-green-500/20 hover:border-green-400/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Search className="w-4 h-4" />
                    Book Now
                  </button>
                </div>
              )}
            </div>
            
            {/* Additional Fields for Corporate */}
            {showAdditionalFields && renderCorporateAdditionalFields()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateForm;
