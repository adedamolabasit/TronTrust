import { CheckCircle } from "lucide-react";

const benefits = [
  "Lower interest rates for high-score borrowers",
  "Transparent credit evaluation process",
  "Improved loan terms based on your blockchain activity",
  "Opportunity to build credit through DeFi interactions",
  "Reduced risk for lenders, leading to a more stable ecosystem",
  "Quick and easy loan application process",
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Benefits of Using TrustFi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start text-lg text-gray-700">
              <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
