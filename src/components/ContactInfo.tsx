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
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      subInfo: "Available 24/7",
      colorScheme: "green"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "info@jktravels.com",
      subInfo: "Response within 2 hours",
      colorScheme: "blue"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Main Office",
      info: "123 Business District",
      subInfo: "New York, NY 10001",
      colorScheme: "purple"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      info: "24/7 Service",
      subInfo: "Emergency bookings available",
      colorScheme: "orange"
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

  const getColorScheme = (scheme: string) => {
    const schemes = {
      green: 'bg-green-100 text-green-600 border-green-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200'
    };
    return schemes[scheme as keyof typeof schemes] || schemes.green;
  };

  return (
    <div className="space-y-8">
      {/* Contact Information Cards */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Information</h2>
          <p className="text-gray-600">Get in touch with us through any of these channels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getColorScheme(detail.colorScheme)}`}>
                  {detail.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{detail.title}</h3>
                  <p className="text-gray-800 font-medium">{detail.info}</p>
                  <p className="text-sm text-gray-600 mt-1">{detail.subInfo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-[#F7F7F7] rounded-2xl p-8 border border-gray-200 relative overflow-hidden">
        {/* Background Pattern */}
        <img
          src="/card-pattern-1-green.png"
          alt="pattern"
          className="absolute bottom-0 left-0 w-[15%] opacity-30"
          width={0}
          height={0}
        />
        <img
          src="/card-pattern-2-green.png"
          alt="pattern"
          className="absolute top-0 right-6 w-[15%] opacity-30"
          width={0}
          height={0}
        />

        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose JK Travels?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  {feature.icon}
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

      {/* Emergency Contact */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
        <div className="text-center">
          <Phone className="w-12 h-12 mx-auto mb-4 text-white" />
          <h3 className="text-2xl font-bold mb-2">Emergency Hotline</h3>
          <p className="text-red-100 mb-4">Need immediate assistance? Call our 24/7 emergency line</p>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors duration-300"
          >
            <Phone className="w-5 h-5" />
            +1 (555) 123-4567
          </a>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Follow Us</h3>
        <div className="flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-12 h-12 bg-gray-100 hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-4">
          Stay updated with our latest offers and services
        </p>
      </div>

      {/* Map Placeholder */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <p className="text-lg font-medium">Interactive Map</p>
            <p className="text-sm">123 Business District, New York, NY 10001</p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <MapPin className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
