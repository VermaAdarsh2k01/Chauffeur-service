/**
 * Smooth scroll to an element by ID
 * @param elementId - The ID of the element to scroll to (without #)
 * @param offset - Optional offset from the top in pixels (default: 100)
 */
export const scrollToElement = (elementId: string, offset: number = 100): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Scroll to booking form section
 */
export const scrollToBookingForm = (): void => {
  scrollToElement('booking-form', 100);
};

/**
 * Handle CTA click with smooth scroll to booking form
 * @param event - The click event
 */
export const handleCTAClick = (event: React.MouseEvent<HTMLElement>): void => {
  event.preventDefault();
  scrollToBookingForm();
};
