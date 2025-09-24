import { motion } from "framer-motion";
import BookingModal from './BookingModal';

type DownloadCTAData = {
  backgroundImage?: {
    src: string;
    alt: string;
  };
  heading?: string;
  description?: string;
  ctaButton?: {
    text: string;
    link?: string;
  };
};

interface DownloadCTAProps {
  data?: DownloadCTAData;
}

export default function DownloadCTA({ data }: DownloadCTAProps) {
  // Use dynamic data or fallback to defaults
  const backgroundImage = data?.backgroundImage?.src || "/cta.jpg";
  const heading = data?.heading || "Enjoy Your Journey with Us";
  const description = data?.description || "Start your journey to explore the world of premium cars - that's exciting";
  const buttonText = data?.ctaButton?.text || "Book Now";
  const buttonLink = data?.ctaButton?.link;

  return (
    <section className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {heading}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          
            <BookingModal buttonClassName="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black rounded-2xl font-semibold text-base sm:text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              {buttonText}
            </BookingModal>

        </motion.div>
      </div>
    </section>
  );
}
