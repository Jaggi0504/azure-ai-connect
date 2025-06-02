
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Clock, Users, BarChart3, Shield, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Conversations",
      description: "Our AI understands context, emotion, and intent to provide natural, human-like interactions that customers love."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a customer call again. Our AI agents work around the clock to ensure every customer gets immediate assistance."
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Each interaction is tailored to the customer's history, preferences, and needs for a truly personalized experience."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights into customer interactions, satisfaction scores, and business metrics to drive growth."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security and compliance ensure your customer data is always protected and secure."
    },
    {
      icon: Zap,
      title: "Instant Integration",
      description: "Seamlessly integrate with your existing systems and workflows. Get up and running in minutes, not months."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Why Choose Our <span className="text-[#01579b]">AI Solution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our cutting-edge AI technology transforms customer service into a competitive advantage for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-[#01579b]/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-[#01579b]/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-[#01579b]" />
                </div>
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
