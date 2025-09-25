import React, { useState } from "react";
import {
  Car,
  Users,
  Plane,
  ArrowRightLeft,
  Heart,
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
import { Button } from "./ui/button";

interface TabData {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface FormData {
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  // Airport Package fields
  airportFromLocation: string;
  airportToLocation: string;
  airportDateTime: string;
  // Outstation fields
  outstationPickupLocation: string;
  outstationDropLocation: string;
  outstationDate: string;
  outstationTime: string;
  // Weddings fields
  weddingEventLocation: string;
  weddingEventDate: string;
  weddingNumberOfCars: string;
  // Corporate fields
  corporateCompanyName: string;
  corporateServiceType: string;
  corporateDuration: string;
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

interface AirportPackageAdditionalData {
  flightBooked: string;
  flightDate: string;
  tentativeDate: string;
  terminal: string;
  flightNumber: string;
  pax: string;
  baggage: string;
  carPreference: string;
  additionalNotes: string;
  firstName: string;
  lastName: string;
  contact: string;
  email: string;
  agreeTerms: boolean;
  agreeCommunication: boolean;
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

interface CorporateAdditionalData {
  industry: string;
  companyEmail: string;
  contact: string;
  firstName: string;
  lastName: string;
  agreeTerms: boolean;
  agreeCommunication: boolean;
}

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("local-travel");
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    // Airport Package fields
    airportFromLocation: "",
    airportToLocation: "",
    airportDateTime: "",
    // Outstation fields
    outstationPickupLocation: "",
    outstationDropLocation: "",
    outstationDate: "",
    outstationTime: "",
    // Weddings fields
    weddingEventLocation: "",
    weddingEventDate: "",
    weddingNumberOfCars: "",
    // Corporate fields
    corporateCompanyName: "",
    corporateServiceType: "",
    corporateDuration: "",
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
  const [airportPackageAdditional, setAirportPackageAdditional] = useState<AirportPackageAdditionalData>({
    flightBooked: "no",
    flightDate: "",
    tentativeDate: "",
    terminal: "",
    flightNumber: "",
    pax: "",
    baggage: "",
    carPreference: "",
    additionalNotes: "",
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    agreeTerms: false,
    agreeCommunication: false,
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
  const [corporateAdditional, setCorporateAdditional] = useState<CorporateAdditionalData>({
    industry: "",
    companyEmail: "",
    contact: "",
    firstName: "",
    lastName: "",
    agreeTerms: false,
    agreeCommunication: false,
  });

  const tabs: TabData[] = [
    {
      id: "local-travel",
      label: "Local Travel / Tourist",
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: "airport-package",
      label: "Airport Package",
      icon: <Plane className="w-4 h-4" />,
    },
    {
      id: "outstation",
      label: "Outstation",
      icon: <ArrowRightLeft className="w-4 h-4" />,
    },
    {
      id: "weddings",
      label: "Weddings Transport",
      icon: <Heart className="w-4 h-4" />,
    },
    {
      id: "corporate",
      label: "Corporate Hires",
      icon: <Building2 className="w-4 h-4" />,
    },
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
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

  const handleAirportPackageChange = (field: keyof AirportPackageAdditionalData, value: string | boolean) => {
    setAirportPackageAdditional((prev) => ({
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

  const handleWeddingsChange = (field: keyof WeddingsAdditionalData, value: string | boolean) => {
    setWeddingsAdditional((prev) => ({
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

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setShowAdditionalFields(false); // Reset additional fields when switching tabs
    
    // Reset main form data to ensure controlled inputs
    setFormData({
      pickupLocation: "",
      pickupDate: "",
      pickupTime: "",
      returnDate: "",
      returnTime: "",
      // Airport Package fields
      airportFromLocation: "",
      airportToLocation: "",
      airportDateTime: "",
      // Outstation fields
      outstationPickupLocation: "",
      outstationDropLocation: "",
      outstationDate: "",
      outstationTime: "",
      // Weddings fields
      weddingEventLocation: "",
      weddingEventDate: "",
      weddingNumberOfCars: "",
      // Corporate fields
      corporateCompanyName: "",
      corporateServiceType: "",
      corporateDuration: "",
    });
    
    // Reset all additional form states to ensure controlled inputs
    setLocalTravelAdditional({
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
    
    setAirportPackageAdditional({
      flightBooked: "no",
      flightDate: "",
      tentativeDate: "",
      terminal: "",
      flightNumber: "",
      pax: "",
      baggage: "",
      carPreference: "",
      additionalNotes: "",
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      agreeTerms: false,
      agreeCommunication: false,
    });
    
    setOutstationAdditional({
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
    
    setWeddingsAdditional({
      fromDate: "",
      toDate: "",
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      agreeTerms: false,
      agreeCommunication: false,
    });
    
    setCorporateAdditional({
      industry: "",
      companyEmail: "",
      contact: "",
      firstName: "",
      lastName: "",
      agreeTerms: false,
      agreeCommunication: false,
    });
    
  };

  const handleFinalBookNow = () => {
    const allData = {
      ...formData,
      ...(activeTab === "local-travel" ? localTravelAdditional : {}),
      ...(activeTab === "airport-package" ? airportPackageAdditional : {}),
      ...(activeTab === "outstation" ? outstationAdditional : {}),
      ...(activeTab === "weddings" ? weddingsAdditional : {}),
      ...(activeTab === "corporate" ? corporateAdditional : {})
    };
    console.log("Final booking with data:", allData);
    // Add your final booking API call here
  };

  const renderForm = () => {
    return (
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
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
            </div>
          </div>

          {/* Search Button - Hide when additional fields are shown */}
          {!showAdditionalFields && (
            <div className="sm:col-span-2 lg:col-span-1 flex items-end">
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
        
        {/* Additional Fields for Local Travel */}
        {showAdditionalFields && activeTab === "local-travel" && renderLocalTravelAdditionalFields()}
      </div>
    );
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
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Luggage className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
                className="w-full pl-10 pr-10 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 text-gray-800 appearance-none cursor-pointer"
              >
                <option value="">Select car type</option>
                <option value="muv">MUV</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="luxury">Luxury Car</option>
                <option value="suggest">Suggest the best for me</option>
              </select>
              <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
                  className="w-4 h-4 text-blue-800 border-gray-300 focus:ring-blue-800"
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
                  className="w-4 h-4 text-blue-800 border-gray-300 focus:ring-blue-800"
                />
                <span className="text-gray-800">No</span>
              </label>
            </div>
          </div>

          {/* Conditional Airport Details - Separate Fields */}
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
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
                    className="w-full pl-10 pr-10 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 text-gray-800 appearance-none cursor-pointer"
                  >
                    <option value="">Select Terminal</option>
                    <option value="T1">T1</option>
                    <option value="T2">T2</option>
                    <option value="T3">T3</option>
                  </select>
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
                value={localTravelAdditional.firstName}
                onChange={(e) => handleLocalTravelChange("firstName", e.target.value)}
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
                value={localTravelAdditional.lastName}
                onChange={(e) => handleLocalTravelChange("lastName", e.target.value)}
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
                value={localTravelAdditional.contact}
                onChange={(e) => handleLocalTravelChange("contact", e.target.value)}
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
                value={localTravelAdditional.email}
                onChange={(e) => handleLocalTravelChange("email", e.target.value)}
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
              checked={localTravelAdditional.agreeTerms}
              onChange={(e) => handleLocalTravelChange("agreeTerms", e.target.checked)}
              className="w-5 h-5 text-blue-800 border-gray-300 rounded focus:ring-blue-800 mt-0.5"
            />
            <span className="text-sm text-gray-800">
              I agree to the <a href="/terms" className="text-blue-800 hover:text-blue-800 underline">Terms & Conditions</a>
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={localTravelAdditional.agreeCommunication}
              onChange={(e) => handleLocalTravelChange("agreeCommunication", e.target.checked)}
              className="w-5 h-5 text-blue-800 border-gray-300 rounded focus:ring-blue-800 mt-0.5"
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
            disabled={!localTravelAdditional.agreeTerms || !localTravelAdditional.firstName || !localTravelAdditional.lastName || !localTravelAdditional.contact || !localTravelAdditional.email}
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

  const renderAirportForm = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              From Location
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Airport"
                value={formData.airportFromLocation}
                onChange={(e) => handleInputChange("airportFromLocation", e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
            </div>
          </div>
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              To Location
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Hotel/Address"
                value={formData.airportToLocation}
                onChange={(e) => handleInputChange("airportToLocation", e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
            </div>
          </div>
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Date & Time
            </label>
            <div className="relative">
              <input
                type="datetime-local"
                value={formData.airportDateTime}
                onChange={(e) => handleInputChange("airportDateTime", e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
        
        {/* Additional Fields for Airport Package */}
        {showAdditionalFields && activeTab === "airport-package" && renderAirportPackageAdditionalFields()}
      </div>
    );
  };

  const renderAirportPackageAdditionalFields = () => {
    return (
      <div className="space-y-6 mt-8 pt-6 border-t border-white/30">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Details</h3>
        
        {/* Flight Information Section */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Flight Booked?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="flightBooked"
                  value="yes"
                  checked={airportPackageAdditional.flightBooked === "yes"}
                  onChange={(e) => handleAirportPackageChange("flightBooked", e.target.value)}
                  className="w-4 h-4 text-blue-800 border-gray-300 focus:ring-blue-800"
                />
                <span className="text-gray-800">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="flightBooked"
                  value="no"
                  checked={airportPackageAdditional.flightBooked === "no"}
                  onChange={(e) => handleAirportPackageChange("flightBooked", e.target.value)}
                  className="w-4 h-4 text-blue-800 border-gray-300 focus:ring-blue-800"
                />
                <span className="text-gray-800">No</span>
              </label>
            </div>
          </div>

          {/* Conditional Date Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {airportPackageAdditional.flightBooked === "yes" ? (
              <div>
                <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
                  Flight Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={airportPackageAdditional.flightDate}
                    onChange={(e) => handleAirportPackageChange("flightDate", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
                </div>
              </div>
            ) : (
              <div>
                <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
                  Tentative Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={airportPackageAdditional.tentativeDate}
                    onChange={(e) => handleAirportPackageChange("tentativeDate", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
                </div>
              </div>
            )}

            <div>
              <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
                Terminal
              </label>
              <div className="relative">
                <select
                  value={airportPackageAdditional.terminal}
                  onChange={(e) => handleAirportPackageChange("terminal", e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 text-gray-800 appearance-none cursor-pointer"
                >
                  <option value="">Select Terminal</option>
                  <option value="T1">T1</option>
                  <option value="T2">T2</option>
                </select>
                <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Flight Number
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter flight number (e.g., AI 101)"
                value={airportPackageAdditional.flightNumber}
                onChange={(e) => handleAirportPackageChange("flightNumber", e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
            </div>
          </div>
        </div>


        {/* Passenger and Vehicle Details */}
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
                value={airportPackageAdditional.pax}
                onChange={(e) => handleAirportPackageChange("pax", e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
                value={airportPackageAdditional.baggage}
                onChange={(e) => handleAirportPackageChange("baggage", e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Luggage className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Car Preference
            </label>
            <div className="relative">
              <select
                value={airportPackageAdditional.carPreference}
                onChange={(e) => handleAirportPackageChange("carPreference", e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 text-gray-800 appearance-none cursor-pointer"
              >
                <option value="">Select car type</option>
                <option value="muv">MUV</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="luxury">Luxury Car</option>
                <option value="suggest">Suggest the best for me</option>
              </select>
              <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
              value={airportPackageAdditional.additionalNotes}
              onChange={(e) => handleAirportPackageChange("additionalNotes", e.target.value)}
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
                value={airportPackageAdditional.firstName}
                onChange={(e) => handleAirportPackageChange("firstName", e.target.value)}
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
                value={airportPackageAdditional.lastName}
                onChange={(e) => handleAirportPackageChange("lastName", e.target.value)}
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
                value={airportPackageAdditional.contact}
                onChange={(e) => handleAirportPackageChange("contact", e.target.value)}
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
                value={airportPackageAdditional.email}
                onChange={(e) => handleAirportPackageChange("email", e.target.value)}
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
              checked={airportPackageAdditional.agreeTerms}
              onChange={(e) => handleAirportPackageChange("agreeTerms", e.target.checked)}
              className="w-5 h-5 text-blue-800 border-gray-300 rounded focus:ring-blue-800 mt-0.5"
            />
            <span className="text-sm text-gray-800">
              I agree to the <a href="/terms" className="text-blue-800 hover:text-blue-800 underline">Terms & Conditions</a>
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={airportPackageAdditional.agreeCommunication}
              onChange={(e) => handleAirportPackageChange("agreeCommunication", e.target.checked)}
              className="w-5 h-5 text-blue-800 border-gray-300 rounded focus:ring-blue-800 mt-0.5"
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
            disabled={!airportPackageAdditional.agreeTerms || !airportPackageAdditional.firstName || !airportPackageAdditional.lastName || !airportPackageAdditional.contact || !airportPackageAdditional.email}
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

  const renderDropPickupForm = () => {
    return (
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
        {showAdditionalFields && activeTab === "outstation" && renderOutstationAdditionalFields()}
      </div>
    );
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
              className="w-5 h-5 text-blue-800 border-gray-300 rounded focus:ring-blue-800 mt-0.5"
            />
            <span className="text-sm text-gray-800">
              I agree to the <a href="/terms" className="text-blue-800 hover:text-blue-800 underline">Terms & Conditions</a>
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={outstationAdditional.agreeCommunication}
              onChange={(e) => handleOutstationChange("agreeCommunication", e.target.checked)}
              className="w-5 h-5 text-blue-800 border-gray-300 rounded focus:ring-blue-800 mt-0.5"
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
            disabled={!outstationAdditional.agreeTerms || !outstationAdditional.firstName || !outstationAdditional.lastName || !outstationAdditional.contact || !outstationAdditional.email || !outstationAdditional.numberOfDays || !outstationAdditional.pax}
            className="bg-gradient-to-r from-blue-800/90 to-blue-900/90 backdrop-blur-md hover:from-blue-900/90 hover:to-blue-950/90 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-blue-800/20 hover:shadow-xl hover:shadow-blue-800/30 border border-blue-800/20 hover:border-blue-800/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
          >
            <Check className="w-4 h-4" />
            Complete Booking
          </button>
        </div>
      </div>
    );
  };

  const renderWeddingsForm = () => {
    return (
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
              <select className="w-full pl-10 pr-10 py-3 bg-white/40 backdrop-blur-md border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-300/50 focus:bg-white/60 transition-all duration-300 hover:bg-white/50 hover:border-white/40 text-gray-700 appearance-none cursor-pointer">
                <option>1 Car</option>
                <option>2 Cars</option>
                <option>3+ Cars</option>
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
        {showAdditionalFields && activeTab === "weddings" && renderWeddingsAdditionalFields()}
      </div>
    );
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
              className="w-5 h-5 text-blue-800 border-gray-300 rounded focus:ring-blue-800 mt-0.5"
            />
            <span className="text-sm text-gray-800">
              I agree to the <a href="/terms" className="text-blue-800 hover:text-blue-800 underline">Terms & Conditions</a>
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={weddingsAdditional.agreeCommunication}
              onChange={(e) => handleWeddingsChange("agreeCommunication", e.target.checked)}
              className="w-5 h-5 text-blue-800 border-gray-300 rounded focus:ring-blue-800 mt-0.5"
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
            disabled={!weddingsAdditional.agreeTerms || !weddingsAdditional.firstName || !weddingsAdditional.lastName || !weddingsAdditional.contact || !weddingsAdditional.email || !weddingsAdditional.fromDate || !weddingsAdditional.toDate}
            className="bg-gradient-to-r from-blue-800/90 to-blue-900/90 backdrop-blur-md hover:from-blue-900/90 hover:to-blue-950/90 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-blue-800/20 hover:shadow-xl hover:shadow-blue-800/30 border border-blue-800/20 hover:border-blue-800/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
          >
            <Check className="w-4 h-4" />
            Complete Booking
          </button>
        </div>
      </div>
    );
  };

  const renderCorporateForm = () => {
    return (
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
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
            </div>
          </div>
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Service Type
            </label>
            <div className="relative">
              <select className="w-full pl-10 pr-10 py-3 bg-white/40 backdrop-blur-md border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-300/50 focus:bg-white/60 transition-all duration-300 hover:bg-white/50 hover:border-white/40 text-gray-700 appearance-none cursor-pointer">
                <option>Executive Transport</option>
                <option>Employee Shuttle</option>
                <option>Event Transport</option>
              </select>
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
            </div>
          </div>
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Duration
            </label>
            <div className="relative">
              <select className="w-full pl-10 pr-10 py-3 bg-white/40 backdrop-blur-md border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-300/50 focus:bg-white/60 transition-all duration-300 hover:bg-white/50 hover:border-white/40 text-gray-700 appearance-none cursor-pointer">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
        
        {/* Additional Fields for Corporate */}
        {showAdditionalFields && activeTab === "corporate" && renderCorporateAdditionalFields()}
      </div>
    );
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
                className="w-full pl-10 pr-10 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 text-gray-800 appearance-none cursor-pointer"
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
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
                value={corporateAdditional.lastName}
                onChange={(e) => handleCorporateChange("lastName", e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
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
              className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-800/60 focus:border-blue-800/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
            />
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-800" />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={corporateAdditional.agreeTerms}
              onChange={(e) => handleCorporateChange("agreeTerms", e.target.checked)}
              className="w-5 h-5 text-blue-800 border-gray-300 rounded focus:ring-blue-800 mt-0.5"
            />
            <span className="text-sm text-gray-800">
              I agree to the <a href="/terms" className="text-blue-800 hover:text-blue-800 underline">Terms & Conditions</a>
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={corporateAdditional.agreeCommunication}
              onChange={(e) => handleCorporateChange("agreeCommunication", e.target.checked)}
              className="w-5 h-5 text-blue-800 border-gray-300 rounded focus:ring-blue-800 mt-0.5"
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
            className="bg-gradient-to-r from-blue-800/90 to-blue-900/90 backdrop-blur-md hover:from-blue-900/90 hover:to-blue-950/90 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-blue-800/20 hover:shadow-xl hover:shadow-blue-800/30 border border-blue-800/20 hover:border-blue-800/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
          >
            <Check className="w-4 h-4" />
            Complete Booking
          </button>
        </div>
      </div>
    );
  };

  const getFormContent = () => {
    switch (activeTab) {
      case "airport-package":
        return renderAirportForm();
      case "outstation":
        return renderDropPickupForm();
      case "weddings":
        return renderWeddingsForm();
      case "corporate":
        return renderCorporateForm();
      default:
        return renderForm();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Glassmorphism Container */}
      <div className="bg-white/30 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl shadow-black/5 overflow-hidden">
        {/* Tab Navigation */}
        <div className="p-3 sm:p-6 bg-gradient-to-r from-white/20 via-white/10 to-white/20 backdrop-blur-lg">
          {/* Mobile: Wrapped tabs */}
          <div className="sm:hidden">
            <div className="flex flex-wrap gap-2 bg-white/30 backdrop-blur-xl rounded-2xl p-2 border border-white/30 shadow-lg shadow-black/5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex flex-col items-center justify-center gap-1 px-3 py-2 text-xs font-semibold rounded-xl transition-all duration-500 relative overflow-hidden backdrop-blur-sm min-w-[70px] flex-1 ${
                    activeTab === tab.id
                      ? "bg-white/90 text-blue-800 shadow-lg shadow-blue-800/20 border border-blue-800/50 backdrop-blur-xl"
                      : "text-gray-700 hover:text-blue-800 hover:bg-white/40 hover:backdrop-blur-lg border border-transparent hover:border-white/30"
                  }`}
                >
                  <span
                    className={`transition-all duration-500 ${
                      activeTab === tab.id
                        ? "scale-110 text-blue-800"
                        : "scale-100"
                    }`}
                  >
                    {tab.icon}
                  </span>
                  <span className="font-medium text-center leading-tight">
                    {tab.label.split(" ")[0]}
                    {tab.label.includes("/")
                      ? `/${tab.label.split("/")[1]}`
                      : ""}
                  </span>

                  {/* Active glassmorphism glow */}
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-800/10 via-blue-700/10 to-blue-800/10 rounded-xl pointer-events-none" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Standard tab layout */}
          <div className="hidden sm:flex bg-white/30 backdrop-blur-xl rounded-2xl p-3 border border-white/30 shadow-lg shadow-black/5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-500 relative overflow-hidden backdrop-blur-sm ${
                  activeTab === tab.id
                    ? "bg-white/90 text-blue-800 shadow-lg shadow-blue-800/20 border border-blue-800/50 backdrop-blur-xl"
                    : "text-gray-700 hover:text-blue-800 hover:bg-white/40 hover:backdrop-blur-lg border border-transparent hover:border-white/30"
                }`}
              >
                <span
                  className={`transition-all duration-500 ${
                    activeTab === tab.id
                      ? "scale-110 text-blue-800"
                      : "scale-100"
                  }`}
                >
                  {tab.icon}
                </span>
                <span className="whitespace-nowrap font-medium">
                  {tab.label}
                </span>

                {/* Active glassmorphism glow */}
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-800/10 via-blue-700/10 to-blue-800/10 rounded-xl pointer-events-none" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-4 sm:p-8 bg-gradient-to-b from-white/40 via-white/30 to-white/20 backdrop-blur-xl">
          {getFormContent()}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
