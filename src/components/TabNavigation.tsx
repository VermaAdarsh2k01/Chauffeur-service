import React, { useState } from 'react';
import { Car, Users, Plane, ArrowRightLeft, Heart, Building2 } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState('local-travel');
  const [formData, setFormData] = useState<FormData>({
    pickupLocation: '',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    returnTime: ''
  });

  const tabs: TabData[] = [
    { id: 'local-travel', label: 'Local Travel / Tourist', icon: <Users className="w-4 h-4" /> },
    { id: 'airport-package', label: 'Airport Package', icon: <Plane className="w-4 h-4" /> },
    { id: 'outstation', label: 'Outstation', icon: <ArrowRightLeft className="w-4 h-4" /> },
    { id: 'weddings', label: 'Weddings Transport', icon: <Heart className="w-4 h-4" /> },
    { id: 'corporate', label: 'Corporate Hires', icon: <Building2 className="w-4 h-4" /> }
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    console.log('Search with data:', formData);
    // Add your search logic here
  };

  const renderForm = () => {
    return (
      <div className="bg-white p-6 rounded-b-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          {/* Pickup/Return Location */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup/Return Location
            </label>
            <input
              type="text"
              placeholder="82/7 Wolfendhal Street, 15, Colombo"
              value={formData.pickupLocation}
              onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Pickup Date */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Date
            </label>
            <input
              type="date"
              value={formData.pickupDate}
              onChange={(e) => handleInputChange('pickupDate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Pickup Time */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time
            </label>
            <input
              type="time"
              value={formData.pickupTime}
              onChange={(e) => handleInputChange('pickupTime', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Return Date */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Return Date
            </label>
            <input
              type="date"
              value={formData.returnDate}
              onChange={(e) => handleInputChange('returnDate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Return Time & Search Button */}
          <div className="md:col-span-1 space-y-4">
            
            <button
              onClick={handleSearch}
              className="w-full bg-[#059669] hover:scale-105 transform transition-all duration-300 text-white px-6 py-2 rounded-4xl font-medium"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderAirportForm = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From Location
            </label>
            <input
              type="text"
              placeholder="Airport"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To Location
            </label>
            <input
              type="text"
              placeholder="Hotel/Address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date & Time
            </label>
            <input
              type="datetime-local"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-1">
          <button
              onClick={handleSearch}
              className="w-full bg-[#059669] hover:scale-105 transform transition-all duration-300 text-white px-6 py-2 rounded-4xl font-medium"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderDropPickupForm = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Location
            </label>
            <input
              type="text"
              placeholder="Enter pickup address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Drop Location
            </label>
            <input
              type="text"
              placeholder="Enter drop address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time
            </label>
            <input
              type="time"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-1">
          <button
              onClick={handleSearch}
              className="w-full bg-[#059669] hover:scale-105 transform transition-all duration-300 text-white px-6 py-2 rounded-4xl font-medium"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderWeddingsForm = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Location
            </label>
            <input
              type="text"
              placeholder="Wedding venue"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Date
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Cars
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>1 Car</option>
              <option>2 Cars</option>
              <option>3+ Cars</option>
            </select>
          </div>
          <div className="md:col-span-1">
          <button
              onClick={handleSearch}
              className="w-full bg-[#059669] hover:scale-105 transform transition-all duration-300 text-white px-6 py-2 rounded-4xl font-medium"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderCorporateForm = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Enter company name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Type
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Executive Transport</option>
              <option>Employee Shuttle</option>
              <option>Event Transport</option>
            </select>
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div className="md:col-span-1">
           <button
              onClick={handleSearch}
              className="w-full bg-[#059669] hover:scale-105 transform transition-all duration-300 text-white px-6 py-2 rounded-4xl font-medium"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  const getFormContent = () => {
    switch (activeTab) {
      case 'airport-package':
        return renderAirportForm();
      case 'outstation':
        return renderDropPickupForm();
      case 'weddings':
        return renderWeddingsForm();
      case 'corporate':
        return renderCorporateForm();
      default:
        return renderForm();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex bg-white rounded-t-lg shadow-sm border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm transition-colors border-b-2 ${
              activeTab === tab.id
                ? 'text-[#059669] border-[#059669] font-bold'
                : 'text-gray-600 border-transparent hover:text-gray-900 font-medium'
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Form Content */}
      <div className="rounded-b-lg">
        {getFormContent()}
      </div>
    </div>
  );
};

export default TabNavigation;
