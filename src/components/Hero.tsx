
import { Button } from "@/components/ui/button";
import { Phone, Bot, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-blue-50 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Customer
                <span className="text-[#01579b] block">Relationships</span>
                <span className="block">with AI</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Let intelligent AI agents handle customer calls 24/7, delivering personalized experiences that grow your business while you focus on what matters most.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#01579b] hover:bg-[#01579b]/90 text-white px-8 py-3 text-lg">
                Join Our Pilot Program
              </Button>
              <Button variant="outline" size="lg" className="border-[#01579b] text-[#01579b] hover:bg-[#01579b] hover:text-white px-8 py-3 text-lg">
                Schedule Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#01579b]" />
                <span className="text-sm text-gray-600">24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-[#01579b]" />
                <span className="text-sm text-gray-600">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[#01579b]" />
                <span className="text-sm text-gray-600">Growth Focused</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600">AI Agent Active</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Incoming Call</p>
                    <p className="font-medium">"Hi, I need help with my order..."</p>
                  </div>
                  
                  <div className="bg-[#01579b]/10 rounded-lg p-4">
                    <p className="text-sm text-[#01579b] mb-2">AI Response</p>
                    <p className="font-medium">"Hello! I'd be happy to help you with your order. Let me pull up your information right away..."</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Response time: 0.3s</span>
                  <span>Satisfaction: 98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
