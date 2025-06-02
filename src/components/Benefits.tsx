
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Rocket, Target } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Reduce customer wait times to zero",
    "Handle unlimited concurrent calls",
    "Provide consistent brand experience",
    "Capture and analyze every interaction",
    "Scale support without hiring",
    "Integrate with existing CRM systems"
  ];

  return (
    <section id="benefits" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#01579b]/10 text-[#01579b] hover:bg-[#01579b]/20">
                Pilot Program
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Join Our Exclusive
                <span className="text-[#01579b] block">Pilot Program</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Be among the first businesses to experience the future of customer service. We're currently running a pilot program with select partners to perfect our AI solution.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#01579b] flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#01579b]/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-[#01579b]" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#01579b]">Limited</div>
                  <div className="font-semibold text-gray-900">Pilot Spots</div>
                  <div className="text-sm text-gray-600">Exclusive access to early version</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#01579b]/10 rounded-lg flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-[#01579b]" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#01579b]">Special</div>
                  <div className="font-semibold text-gray-900">Pilot Pricing</div>
                  <div className="text-sm text-gray-600">Exclusive discounts with promo code</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#01579b]/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#01579b]" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#01579b]">1:1</div>
                  <div className="font-semibold text-gray-900">Support</div>
                  <div className="text-sm text-gray-600">Dedicated onboarding assistance</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#01579b]/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-[#01579b]" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#01579b]">Beta</div>
                  <div className="font-semibold text-gray-900">Features</div>
                  <div className="text-sm text-gray-600">Early access to new capabilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
