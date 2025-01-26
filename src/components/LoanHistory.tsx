export function LoanHistory() {
    const loanHistory = [
      { id: 1, amount: 1000, interest: "5%", status: "Active", nextPayment: "2023-07-15" },
      { id: 2, amount: 500, interest: "4.5%", status: "Repaid", nextPayment: "-" },
      { id: 3, amount: 2000, interest: "5.5%", status: "Active", nextPayment: "2023-08-01" },
    ];
  
    return (
      <div className="bg-white shadow-md rounded-lg mt-6">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Loan History</h2>
          <p className="text-sm text-gray-500">Your active and past loans</p>
        </div>
        <div className="p-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-sm font-semibold text-gray-600">Amount (ETN)</th>
                <th className="p-3 text-sm font-semibold text-gray-600">Interest Rate</th>
                <th className="p-3 text-sm font-semibold text-gray-600">Status</th>
                <th className="p-3 text-sm font-semibold text-gray-600">Next Payment</th>
              </tr>
            </thead>
            <tbody>
              {loanHistory.map((loan) => (
                <tr key={loan.id} className="border-t">
                  <td className="p-3 text-sm text-gray-700">{loan.amount}</td>
                  <td className="p-3 text-sm text-gray-700">{loan.interest}</td>
                  <td
                    className={`p-3 text-sm font-medium ${
                      loan.status === "Active"
                        ? "text-blue-600"
                        : loan.status === "Repaid"
                        ? "text-green-600"
                        : "text-gray-600"
                    }`}
                  >
                    {loan.status}
                  </td>
                  <td className="p-3 text-sm text-gray-700">{loan.nextPayment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  