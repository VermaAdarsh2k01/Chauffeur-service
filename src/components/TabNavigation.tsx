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
} from "lucide-react";

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
}

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("local-travel");
  const [formData, setFormData] = useState<FormData>({
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
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

  const handleSearch = () => {
    console.log("Search with data:", formData);
    // Add your search logic here
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

          {/* Search Button */}
          <div className="sm:col-span-2 lg:col-span-1 flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-md hover:from-green-700/90 hover:to-emerald-700/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 border border-green-500/20 hover:border-green-400/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              Book Now
            </button>
          </div>
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
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
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
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
            </div>
          </div>
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Date & Time
            </label>
            <div className="relative">
              <input
                type="datetime-local"
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
            </div>
          </div>
          <div className="md:col-span-1 flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-md hover:from-green-700/90 hover:to-emerald-700/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 border border-green-500/20 hover:border-green-400/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              Book Now
            </button>
          </div>
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
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
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
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <ArrowRightLeft className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
            </div>
          </div>
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Date
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
            </div>
          </div>
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Time
            </label>
            <div className="relative">
              <input
                type="time"
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
            </div>
          </div>
          <div className="md:col-span-1 flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-md hover:from-green-700/90 hover:to-emerald-700/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 border border-green-500/20 hover:border-green-400/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              Book Now
            </button>
          </div>
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
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Heart className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
            </div>
          </div>
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-800/90 mb-3 block">
              Event Date
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300/60 focus:bg-white/80 transition-all duration-300 hover:bg-white/70 hover:border-white/50 placeholder:text-gray-500 text-gray-800 shadow-sm"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
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
              <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
            </div>
          </div>
          <div className="md:col-span-1 flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-md hover:from-green-700/90 hover:to-emerald-700/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 border border-green-500/20 hover:border-green-400/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              Book Now
            </button>
          </div>
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
              <select className="w-full pl-10 pr-10 py-3 bg-white/40 backdrop-blur-md border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-300/50 focus:bg-white/60 transition-all duration-300 hover:bg-white/50 hover:border-white/40 text-gray-700 appearance-none cursor-pointer">
                <option>Executive Transport</option>
                <option>Employee Shuttle</option>
                <option>Event Transport</option>
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
              <select className="w-full pl-10 pr-10 py-3 bg-white/40 backdrop-blur-md border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-300/50 focus:bg-white/60 transition-all duration-300 hover:bg-white/50 hover:border-white/40 text-gray-700 appearance-none cursor-pointer">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
            </div>
          </div>
          <div className="md:col-span-1 flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-md hover:from-green-700/90 hover:to-emerald-700/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 border border-green-500/20 hover:border-green-400/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              Book Now
            </button>
          </div>
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
          {/* Mobile: Horizontal scrollable tabs */}
          <div className="sm:hidden">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide bg-white/30 backdrop-blur-xl rounded-2xl p-2 border border-white/30 shadow-lg shadow-black/5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 flex flex-col items-center justify-center gap-1 px-3 py-2 text-xs font-semibold rounded-xl transition-all duration-500 relative overflow-hidden backdrop-blur-sm min-w-[70px] ${
                    activeTab === tab.id
                      ? "bg-white/90 text-green-700 shadow-lg shadow-green-500/20 border border-green-200/50 backdrop-blur-xl"
                      : "text-gray-700 hover:text-green-600 hover:bg-white/40 hover:backdrop-blur-lg border border-transparent hover:border-white/30"
                  }`}
                >
                  <span
                    className={`transition-all duration-500 ${
                      activeTab === tab.id
                        ? "scale-110 text-green-600"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-emerald-300/10 to-green-400/10 rounded-xl pointer-events-none" />
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
                    ? "bg-white/90 text-green-700 shadow-lg shadow-green-500/20 border border-green-200/50 backdrop-blur-xl"
                    : "text-gray-700 hover:text-green-600 hover:bg-white/40 hover:backdrop-blur-lg border border-transparent hover:border-white/30"
                }`}
              >
                <span
                  className={`transition-all duration-500 ${
                    activeTab === tab.id
                      ? "scale-110 text-green-600"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-emerald-300/10 to-green-400/10 rounded-xl pointer-events-none" />
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
