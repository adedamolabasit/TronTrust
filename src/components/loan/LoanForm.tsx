import { useLoanContext } from "@/context/LoanContext";

export const LoanForm = () => {
  const { handleInputChange, loanDetails } = useLoanContext();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Loan Details</h2>
        <p className="text-sm text-gray-500">
          Fill in the details for your loan request
        </p>
      </div>
      <form className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="amount"
          >
            Loan Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={loanDetails.amount}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="duration"
          >
            Loan Duration (months)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={loanDetails.duration}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="collateralType"
          >
            Collateral Type
          </label>
          <select
            id="collateralType"
            name="collateralType"
            value={loanDetails.collateralType}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm"
          >
            <option value="ETN">ETN</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="collateralAmount"
          >
            Collateral Amount
          </label>
          <input
            type="number"
            id="collateralAmount"
            name="collateralAmount"
            value={loanDetails.collateralAmount}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="interestRate"
          >
            Interest Rate (%)
          </label>
          <input
            type="number"
            id="interestRate"
            name="interestRate"
            value={loanDetails.interestRate}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm"
          />
        </div>
      </form>
    </div>
  );
};
