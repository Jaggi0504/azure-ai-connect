
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/a5b9e285-dd32-4ce4-9dd1-d8865e06389e.png" 
              alt="PromptLine Logo" 
              className="h-8 w-8"
            />
            <div className="text-2xl font-bold text-[#01579b]">
              PromptLine
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-gray-600 hover:text-[#01579b] transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="text-gray-600 hover:text-[#01579b] transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('pilot')} 
              className="text-gray-600 hover:text-[#01579b] transition-colors"
            >
              Pilot Program
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('pilot')}
              className="bg-[#01579b] hover:bg-[#01579b]/90 text-white"
            >
              Apply for Pilot
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
