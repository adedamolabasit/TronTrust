import { useRouter } from "next/router"

export function HeroSection() {
    const router = useRouter()

    return (
      <section className="bg-gradient-to-r from-gray-500 to-gray-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Low-Risk Lending with Blockchain-Powered Credit Scores
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            TrustFi revolutionizes DeFi lending by leveraging your on-chain activity to provide fair and transparent
            credit scores.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => router.push('/dashboard')} className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-300 transition-all duration-300">
              Check Your Score
            </button>
            <button onClick={() => router.push('/loan')}  className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-600 transition-all duration-300">
              Get a Loan
            </button>
          </div>
        </div>
      </section>
    )
  }
  