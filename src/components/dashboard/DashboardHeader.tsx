import { useRouter } from "next/router";


export function DashboardHeader() {
  const router = useRouter()
  const requestLoan = () => {
    router.push("loan")
  }

    return (
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">TrustFi Dashboard</h1>
        
        <button onClick={requestLoan} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
          Request Loan
        </button>
      </header>
    );
  }
  