export function CTASection() {
    return (
      <section className="bg-gray-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your DeFi Lending Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join TrustFi today and unlock the power of your on-chain credit score for better loan terms and a more secure
            lending ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="lg:px-8 lg:py-3 px-6 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition-all">
              Check Your Score
            </button>
            <button className="lg:px-8 lg:py-3 px-6 py-2 border-2 border-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition-all">
              Get a Loan
            </button>
          </div>
        </div>
      </section>
    );
  }
  