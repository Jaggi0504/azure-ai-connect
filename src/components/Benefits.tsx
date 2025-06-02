
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, DollarSign, Users } from "lucide-react";

const Benefits = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "85%",
      label: "Increase in Customer Satisfaction",
      description: "AI agents provide consistent, accurate responses"
    },
    {
      icon: DollarSign,
      value: "60%",
      label: "Reduction in Support Costs",
      description: "Automate routine inquiries and scale efficiently"
    },
    {
      icon: Users,
      value: "90%",
      label: "First-Call Resolution Rate",
      description: "Resolve customer issues on the first interaction"
    },
    {
      icon: CheckCircle,
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Always available when your customers need help"
    }
  ];

  const benefits = [
    "Reduce customer wait times to zero",
    "Handle unlimited concurrent calls",
    "Provide consistent brand experience",
    "Capture and analyze every interaction",
    "Scale support without hiring",
    "Integrate with existing CRM systems"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#01579b]/10 text-[#01579b] hover:bg-[#01579b]/20">
                Proven Results
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Measurable Impact on Your
                <span className="text-[#01579b] block">Business Growth</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join hundreds of businesses that have transformed their customer service and achieved remarkable results with our AI solution.
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
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#01579b]/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-[#01579b]" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-[#01579b]">{stat.value}</div>
                    <div className="font-semibold text-gray-900">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
