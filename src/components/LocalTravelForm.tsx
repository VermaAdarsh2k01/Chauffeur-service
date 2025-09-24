import React, { useState } from "react";
import {
  Car,
  Users,
  Plane,
  Building2,
  MapPin,
  Calendar,
  Clock,
  Search,
  ChevronDown,
  User,
  Phone,
  Mail,
  MessageSquare,
  Luggage,
  Check,
} from "lucide-react";

interface LocalTravelFormData {
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
}

interface LocalTravelAdditionalData {
  pax: string;
  baggage: string;
  carPreference: string;
  airportPickup: string;
  flightNumber: string;
  terminal: string;
  arrivalTime: string;
  additionalNotes: string;
  firstName: string;
  lastName: string;
  contact: string;
  email: string;
  agreeTerms: boolean;
  agreeCommunication: boolean;
}

const LocalTravelForm = () => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [formData, setFormData] = useState<LocalTravelFormData>({
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
  });

  const [localTravelAdditional, setLocalTravelAdditional] = useState<LocalTravelAdditionalData>({
    pax: "",
    baggage: "",
    carPreference: "",
    airportPickup: "no",
    flightNumber: "",
    terminal: "",
    arrivalTime: "",
    additionalNotes: "",
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    agreeTerms: false,
    agreeCommunication: false,
  });

  const handleInputChange = (field: keyof LocalTravelFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLocalTravelChange = (field: keyof LocalTravelAdditionalData, value: string | boolean) => {
    setLocalTravelAdditional((prev) => ({
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
      ...localTravelAdditional
    };
    console.log("Local Travel Booking data:", allData);
    // Add your final booking API call here
  };

  const renderLocalTravelAdditionalFields = () => {
    return (
      <div className="space-y-6 mt-8 pt-6 border-t border-white/30">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Details</h3>
        
        {/* First Row - Pax, Baggage, Car Preference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Number of Passengers (Pax)
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="8"
                placeholder="Enter number of passengers"
                value={localTravelAdditional.pax}
                onChange={(e) => handleLocalTravelChange("pax", e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Approx. Number of Baggage
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                placeholder="Enter baggage count"
                value={localTravelAdditional.baggage}
                onChange={(e) => handleLocalTravelChange("baggage", e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Luggage className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Car Preference
            </label>
            <div className="relative">
              <select
                value={localTravelAdditional.carPreference}
                onChange={(e) => handleLocalTravelChange("carPreference", e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 text-gray-800 appearance-none cursor-pointer"
              >
                <option value="">Select car type</option>
                <option value="muv">MUV</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="luxury">Luxury Car</option>
                <option value="suggest">Suggest the best for me</option>
              </select>
              <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
            </div>
          </div>
        </div>

        {/* Airport Pickup Section */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Would you like an Airport pickup?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="airportPickup"
                  value="yes"
                  checked={localTravelAdditional.airportPickup === "yes"}
                  onChange={(e) => handleLocalTravelChange("airportPickup", e.target.value)}
                  className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                />
                <span className="text-gray-800">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="airportPickup"
                  value="no"
                  checked={localTravelAdditional.airportPickup === "no"}
                  onChange={(e) => handleLocalTravelChange("airportPickup", e.target.value)}
                  className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                />
                <span className="text-gray-800">No</span>
              </label>
            </div>
          </div>

          {/* Conditional Airport Details */}
          {localTravelAdditional.airportPickup === "yes" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
                  Flight Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g., AI 101, 6E 234"
                    value={localTravelAdditional.flightNumber}
                    onChange={(e) => handleLocalTravelChange("flightNumber", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
                  Terminal
                </label>
                <div className="relative">
                  <select
                    value={localTravelAdditional.terminal}
                    onChange={(e) => handleLocalTravelChange("terminal", e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 text-gray-800 appearance-none cursor-pointer"
                  >
                    <option value="">Select Terminal</option>
                    <option value="T1">T1</option>
                    <option value="T2">T2</option>
                    <option value="T3">T3</option>
                  </select>
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
                  Arrival Time
                </label>
                <div className="relative">
                  <input
                    type="time"
                    value={localTravelAdditional.arrivalTime}
                    onChange={(e) => handleLocalTravelChange("arrivalTime", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Notes */}
        <div>
          <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
            Additional Notes
          </label>
          <div className="relative">
            <textarea
              placeholder="AC, quiet ride, Elders on board, kids on board, woman on board etc."
              value={localTravelAdditional.additionalNotes}
              onChange={(e) => handleLocalTravelChange("additionalNotes", e.target.value)}
              rows={3}
              className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm resize-vertical"
            />
            <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-green-600" />
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
                value={localTravelAdditional.firstName}
                onChange={(e) => handleLocalTravelChange("firstName", e.target.value)}
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
                value={localTravelAdditional.lastName}
                onChange={(e) => handleLocalTravelChange("lastName", e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
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
                value={localTravelAdditional.contact}
                onChange={(e) => handleLocalTravelChange("contact", e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
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
                value={localTravelAdditional.email}
                onChange={(e) => handleLocalTravelChange("email", e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
            </div>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={localTravelAdditional.agreeTerms}
              onChange={(e) => handleLocalTravelChange("agreeTerms", e.target.checked)}
              className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-0.5"
            />
            <span className="text-sm text-gray-800">
              I agree to the <a href="/terms" className="text-green-600 hover:text-green-700 underline">Terms & Conditions</a>
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={localTravelAdditional.agreeCommunication}
              onChange={(e) => handleLocalTravelChange("agreeCommunication", e.target.checked)}
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
            disabled={!localTravelAdditional.agreeTerms || !localTravelAdditional.firstName || !localTravelAdditional.lastName || !localTravelAdditional.contact || !localTravelAdditional.email}
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
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              {/* Pickup/Return Location */}
              <div className="sm:col-span-2 lg:col-span-1">
                <label className="text-sm font-semibold text-gray-800/90 mb-2 sm:mb-3 block">
                  Pickup/Return Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter pickup location"
                    value={formData.pickupLocation}
                    onChange={(e) =>
                      handleInputChange("pickupLocation", e.target.value)
                    }
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
                </div>
              </div>

              {/* Pickup Date */}
              <div className="lg:col-span-1">
                <label className="text-sm font-semibold text-gray-800/90 mb-2 sm:mb-3 block">
                  Pickup Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.pickupDate}
                    onChange={(e) =>
                      handleInputChange("pickupDate", e.target.value)
                    }
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
                </div>
              </div>

              {/* Pickup Time */}
              <div className="lg:col-span-1">
                <label className="text-sm font-semibold text-gray-800/90 mb-2 sm:mb-3 block">
                  Time
                </label>
                <div className="relative">
                  <input
                    type="time"
                    value={formData.pickupTime}
                    onChange={(e) =>
                      handleInputChange("pickupTime", e.target.value)
                    }
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
                </div>
              </div>

              {/* Return Date */}
              <div className="lg:col-span-1">
                <label className="text-sm font-semibold text-gray-800/90 mb-2 sm:mb-3 block">
                  Return Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.returnDate}
                    onChange={(e) =>
                      handleInputChange("returnDate", e.target.value)
                    }
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
                </div>
              </div>

              {/* Search Button - Hide when additional fields are shown */}
              {!showAdditionalFields && (
                <div className="sm:col-span-2 lg:col-span-1 flex items-end">
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
            
            {/* Additional Fields for Local Travel */}
            {showAdditionalFields && renderLocalTravelAdditionalFields()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalTravelForm;
