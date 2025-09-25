import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Globe,
  Home,
  Building,
  Navigation,
  MessageCircle,
  Car, 
  Shield, 
  Award, 
  Users,
  Star,
  Heart,
  ThumbsUp,
  CheckCircle,
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import type { ContactInfoProps } from '../types/contact';

const ContactInfo: React.FC<ContactInfoProps> = ({ data }) => {
  // Fallback/default contact details
  const defaultContactDetails = [
    {
      iconName: "phone",
      title: "Phone",
      info: "+1 (555) 123-4567",
      subInfo: "Available 24/7"
    },
    {
      iconName: "mail",
      title: "Email",
      info: "info@jktravels.com",
      subInfo: "Response within 2 hours"
    },
    {
      iconName: "mapPin",
      title: "Main Office",
      info: "123 Business District",
      subInfo: "New York, NY 10001"
    },
    {
      iconName: "clock",
      title: "Business Hours",
      info: "24/7 Service",
      subInfo: "Emergency bookings available"
    }
  ];

  // Use Sanity data or fallback to default
  const contactDetails = data?.contactDetails || defaultContactDetails;

  // Fallback/default features
  const defaultFeatures = [
    {
      iconName: "car",
      title: "Premium Fleet",
      description: "Latest model luxury vehicles"
    },
    {
      iconName: "shield",
      title: "Fully Insured",
      description: "Comprehensive coverage for peace of mind"
    },
    {
      iconName: "award",
      title: "Licensed Drivers",
      description: "Professional chauffeurs with clean records"
    },
    {
      iconName: "users",
      title: "Customer Support",
      description: "Dedicated support team available 24/7"
    }
  ];

  // Use Sanity data or fallback to default
  const features = data?.whyChooseUs?.features || defaultFeatures;
  const whyChooseUsTitle = data?.whyChooseUs?.title || "Why Choose JK Travels?";

  // Fallback/default social links
  const defaultSocialLinks = [
    { platform: "facebook", url: "#" },
    { platform: "twitter", url: "#" },
    { platform: "instagram", url: "#" },
    { platform: "linkedin", url: "#" }
  ];

  // Use Sanity data or fallback to default
  const socialLinks = data?.locationAndSocial?.socialLinks || defaultSocialLinks;
  const locationData = data?.locationAndSocial?.location || {
    address: "123 Business District",
    city: "New York, NY 10001",
    mapsUrl: "https://maps.google.com"
  };
  const socialMediaText = data?.locationAndSocial?.socialMediaText || "Stay connected with us";
  const visitFollowTitle = data?.locationAndSocial?.sectionTitle || "Visit & Follow Us";
  
  // Background images from Sanity or fallback to default
  const backgroundImages = data?.backgroundImages || {};

  // Helper function to get icon component by name
  const getIconComponent = (iconName: string, className: string = "w-5 h-5") => {
    // Create a comprehensive iconMap with both camelCase and lowercase keys for robust matching
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      // Lowercase versions
      phone: Phone,
      mail: Mail,
      mappin: MapPin,
      clock: Clock,
      calendar: Calendar,
      globe: Globe,
      home: Home,
      building: Building,
      navigation: Navigation,
      messagecircle: MessageCircle,
      car: Car,
      shield: Shield,
      award: Award,
      users: Users,
      star: Star,
      heart: Heart,
      thumbsup: ThumbsUp,
      checkcircle: CheckCircle,
      zap: Zap,
      facebook: Facebook,
      twitter: Twitter,
      instagram: Instagram,
      linkedin: Linkedin,
      // CamelCase versions for backward compatibility
      mapPin: MapPin,
      messageCircle: MessageCircle,
      thumbsUp: ThumbsUp,
      checkCircle: CheckCircle,
    };
    
    console.log('🔍 Icon Debug - Received:', iconName, 'Normalized:', iconName?.toLowerCase());
    
    // Try original name first, then lowercase version
    let IconComponent = iconMap[iconName];
    if (!IconComponent) {
      const normalizedIconName = iconName?.toLowerCase();
      IconComponent = iconMap[normalizedIconName];
    }
    
    // If icon not found, return a fallback icon that makes sense contextually
    if (!IconComponent) {
      console.warn(`❌ Icon "${iconName}" not found in iconMap. Available icons:`, Object.keys(iconMap).filter((key, index, arr) => arr.indexOf(key) === index));
      return <CheckCircle className={className} />;
    }
    
    console.log('✅ Icon found and rendered:', iconName);
    return <IconComponent className={className} />;
  };

  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 relative overflow-hidden">
        {/* Background Pattern */}
        <img
          src={backgroundImages.pattern1Green?.src || "/card-pattern-1-green.png"}
          alt={backgroundImages.pattern1Green?.alt || "pattern"}
          className="absolute bottom-0 left-0 w-[15%] opacity-20"
          width={0}
          height={0}
        />
        <img
          src={backgroundImages.pattern2Green?.src || "/card-pattern-2-green.png"}
          alt={backgroundImages.pattern2Green?.alt || "pattern"}
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
                  {getIconComponent(detail.iconName)}
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
          className="absolute bottom-0 left-0 w-[15%] "
          width={0}
          height={0}
        />
        <img
          src="/card-pattern-2.png"
          alt= "pattern"
          className="absolute top-0 right-6 w-[15%] "
          width={0}
          height={0}
        />

        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{whyChooseUsTitle}</h3>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 border border-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-blue-800" />
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{visitFollowTitle}</h3>
          
          {/* Location */}
          <div className="mb-6 p-4 bg-gray-50 rounded-xl">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-600 hidden md:block" />
            <MapPin className="w-8 h-8 mb-2 text-gray-600 block md:hidden" />
            <p className="font-medium text-gray-900">{locationData.address}</p>
            <p className="text-sm text-gray-600">{locationData.city}</p>
            <a
              href={locationData.mapsUrl || "https://maps.google.com"}
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
            <p className="text-sm text-gray-600 mb-4">{socialMediaText}</p>
            <div className="flex justify-start md:justify-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-gray-100 hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                  aria-label={social.platform}
                >
                  {getIconComponent(social.platform)}
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