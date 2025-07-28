import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const FloatingCTA = () => {
  const isMobile = useIsMobile();

  const handleClick = () => {
    if (isMobile) {
      window.location.href = "tel:5023707415";
    } else {
      // Show number visually on desktop
      const phoneNumber = "(502) 370-7415";
      navigator.clipboard.writeText(phoneNumber);
      // You could add a toast notification here
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="floating-cta fixed bottom-6 right-6 md:top-6 md:bottom-auto rounded-full h-14 w-14 md:h-auto md:w-auto md:rounded-lg md:px-6 shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
      size={isMobile ? "icon" : "default"}
    >
      <Phone className="h-5 w-5 md:mr-2" />
      {!isMobile && <span className="hidden md:inline">Call Now</span>}
    </Button>
  );
};

export default FloatingCTA;