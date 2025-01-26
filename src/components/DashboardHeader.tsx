export function DashboardHeader() {
    return (
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">TrustFi Dashboard</h1>
        <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-blue-700 transition">
          Request Loan
        </button>
      </header>
    );
  }
  