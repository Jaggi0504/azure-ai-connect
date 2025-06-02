
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#01579b]">
              PromptLine
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[#01579b] transition-colors">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-[#01579b] transition-colors">Benefits</a>
            <a href="#pilot" className="text-gray-600 hover:text-[#01579b] transition-colors">Pilot Program</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-[#01579b] text-[#01579b] hover:bg-[#01579b] hover:text-white">
              Schedule Demo
            </Button>
            <Button className="bg-[#01579b] hover:bg-[#01579b]/90 text-white">
              Apply for Pilot
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
