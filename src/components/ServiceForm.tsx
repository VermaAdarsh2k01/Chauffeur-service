import React from "react";
import AirportPackageForm from "./AirportPackageForm";
import LocalTravelForm from "./LocalTravelForm";
import OutstationForm from "./OutstationForm";
import WeddingsForm from "./WeddingsForm";
import CorporateForm from "./CorporateForm";

interface ServiceFormProps {
  formType: string; // This will be the slug like "airport-package"
}

const ServiceForm = ({ formType }: ServiceFormProps) => {
  // Map slug to form type
  const getFormType = (slug: string) => {
    const formMapping: Record<string, string> = {
      "airport-package": "airport-package",
      "airport-packages": "airport-package",
      "local-travel": "local-travel", 
      "outstation": "outstation",
      "weddings": "weddings",
      "corporate": "corporate"
    };
    
    return formMapping[slug] || "local-travel"; // default to local-travel
  };

  const actualFormType = getFormType(formType);

  const renderForm = () => {
    switch (actualFormType) {
      case "airport-package":
        return <AirportPackageForm />;
      case "local-travel":
        return <LocalTravelForm />;
      case "outstation":
        return <OutstationForm />;
      case "weddings":
        return <WeddingsForm />;
      case "corporate":
        return <CorporateForm />;
      default:
        return <LocalTravelForm />; // Default to local travel form
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Book Your Service
        </h2>
        <p className="text-gray-600">
          Fill in the details below to book your {actualFormType.replace('-', ' ')} service.
        </p>
      </div>
      {renderForm()}
    </div>
  );
};

export default ServiceForm;
