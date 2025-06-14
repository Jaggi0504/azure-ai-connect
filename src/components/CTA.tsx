
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const CTA = () => {
  const [businessEmail, setBusinessEmail] = useState("");
  const [companyName, setCompanyName] = useState("");

  const handleApplyNow = () => {
    // Validate required fields
    if (!businessEmail.trim()) {
      toast({
        title: "Business Email Required",
        description: "Please enter your business email address.",
        variant: "destructive",
      });
      return;
    }

    if (!companyName.trim()) {
      toast({
        title: "Company Name Required", 
        description: "Please enter your company name.",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(businessEmail)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid business email address.",
        variant: "destructive",
      });
      return;
    }

    // Build the Google Form URL with pre-filled values
    const baseUrl = "https://docs.google.com/forms/d/e/1FAIpQLScqSuYwOSPm3DTflDxM9Qw-SzfHk9-6wdjAoStOVXjVdlcYoQ/viewform";
    const params = new URLSearchParams({
      "usp": "pp_url",
      "entry.2141564047": businessEmail,
      "entry.621621062": companyName
    });
    
    const formUrl = `${baseUrl}?${params.toString()}`;
    
    // Open the form in a new tab
    window.open(formUrl, '_blank');
    
    // Show success message
    toast({
      title: "Redirecting to Application",
      description: "Opening the pilot program application form...",
    });
  };

  return (
    <section id="pilot" className="py-20 px-4 bg-[#01579b]">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Pioneer the Future
              <span className="block">of Customer Service?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join our exclusive pilot program and be among the first to experience PromptLine's revolutionary AI customer service solution.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 space-y-6 max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900">Apply for Pilot Program</h3>
            <div className="space-y-4">
              <Input 
                placeholder="Your business email" 
                type="email"
                className="h-12"
                value={businessEmail}
                onChange={(e) => setBusinessEmail(e.target.value)}
                required
              />
              <Input 
                placeholder="Company name" 
                className="h-12"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
              <Button 
                className="w-full h-12 bg-[#01579b] hover:bg-[#01579b]/90 text-white"
                onClick={handleApplyNow}
                type="button"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Limited spots available • Priority support
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 text-blue-100">
              <Mail className="h-5 w-5" />
              <span>info@promptline.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
