import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Car, 
  Shield, 
  Award, 
  Users,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactDetails = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      subInfo: "Available 24/7"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      info: "info@jktravels.com",
      subInfo: "Response within 2 hours"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Main Office",
      info: "123 Business District",
      subInfo: "New York, NY 10001"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Business Hours",
      info: "24/7 Service",
      subInfo: "Emergency bookings available"
    }
  ];

  const features = [
    {
      icon: <Car className="w-5 h-5" />,
      title: "Premium Fleet",
      description: "Latest model luxury vehicles"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Fully Insured",
      description: "Comprehensive coverage for peace of mind"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Licensed Drivers",
      description: "Professional chauffeurs with clean records"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Customer Support",
      description: "Dedicated support team available 24/7"
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" }
  ];

  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 relative overflow-hidden">
        {/* Background Pattern */}
        <img
          src="/card-pattern-1.png"
          alt="pattern"
          className="absolute bottom-0 left-0 w-[15%] opacity-20"
          width={0}
          height={0}
        />
        <img
          src="/card-pattern-2.png"
          alt="pattern"
          className="absolute top-0 right-6 w-[15%] opacity-20"
          width={0}
          height={0}
        />
        
        <div className="relative z-10">
          
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          
          <div className="space-y-4">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-start gap-4 py-4 lg:p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  {detail.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{detail.title}</h3>
                  <p className="text-gray-800 font-medium">{detail.info}</p>
                  <p className="text-sm text-gray-600">{detail.subInfo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-[#F7F7F7] rounded-2xl p-8 border border-gray-200 relative overflow-hidden">
        {/* Background Pattern */}
        <img
          src="/card-pattern-1.png"
          alt="pattern"
          className="absolute bottom-0 left-0 w-[15%] opacity-20"
          width={0}
          height={0}
        />
        <img
          src="/card-pattern-2.png"
          alt="pattern"
          className="absolute top-0 right-6 w-[15%] opacity-20"
          width={0}
          height={0}
        />

        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose JK Travels?</h3>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location & Social */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="text-left md:text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit & Follow Us</h3>
          
          {/* Location */}
          <div className="mb-6 p-4 bg-gray-50 rounded-xl">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-600 hidden md:block" />
            <MapPin className="w-8 h-8 mb-2 text-gray-600 block md:hidden" />
            <p className="font-medium text-gray-900">123 Business District</p>
            <p className="text-sm text-gray-600">New York, NY 10001</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>
          
          {/* Social Media */}
          <div>
            <p className="text-sm text-gray-600 mb-4">Stay connected with us</p>
            <div className="flex justify-start md:justify-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-100 hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;