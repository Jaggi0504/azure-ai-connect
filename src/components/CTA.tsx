
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-[#01579b]">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Transform Your
              <span className="block">Customer Experience?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join the AI revolution and start delivering exceptional customer service today. See the difference in just 30 days.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 space-y-6 max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900">Get Started Free</h3>
            <div className="space-y-4">
              <Input 
                placeholder="Your business email" 
                type="email"
                className="h-12"
              />
              <Input 
                placeholder="Company name" 
                className="h-12"
              />
              <Button className="w-full h-12 bg-[#01579b] hover:bg-[#01579b]/90 text-white">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              No credit card required • 30-day free trial • Setup in 5 minutes
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 text-blue-100">
              <Phone className="h-5 w-5" />
              <span>1-800-AI-AGENT</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <Mail className="h-5 w-5" />
              <span>hello@aiagents.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
