import { Shield, TrendingUp, Lock, Zap } from "lucide-react";

// Define a type for feature items
interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Type for React component icons
}

const features: Feature[] = [
  {
    title: "Blockchain-Powered Credit Scores",
    description:
      "Our advanced algorithms analyze your on-chain activity to generate a fair and transparent credit score.",
    icon: Shield,
  },
  {
    title: "Low-Risk Lending",
    description:
      "Benefit from better borrowing terms as we minimize default risks through intelligent credit assessment.",
    icon: TrendingUp,
  },
  {
    title: "Secure Collateralization",
    description:
      "Loans are backed by over-collateralization in ETN, ensuring stability and trust in our lending ecosystem.",
    icon: Lock,
  },
  {
    title: "Instant Approval",
    description: "Get approved for loans quickly with our efficient, automated credit evaluation process.",
    icon: Zap,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <feature.icon className="w-12 h-12 mb-4 mx-auto text-gray-900" />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mt-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
