import { useLoanContext } from "@/context/LoanContext";

export const LoanSummary = () => {
  const { loanDetails } = useLoanContext();
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Loan Summary</h2>
        <p className="text-sm text-gray-500">
          Review your loan details before submitting
        </p>
      </div>
      <ul className="space-y-2 text-sm">
        <li>
          <span className="font-medium">Loan Amount:</span> {loanDetails.amount}{" "}
          ETN
        </li>
        <li>
          <span className="font-medium">Loan Duration:</span>{" "}
          {loanDetails.duration} months
        </li>
        <li>
          <span className="font-medium">Collateral Type:</span>{" "}
          {loanDetails.collateralType}
        </li>
        <li>
          <span className="font-medium">Collateral Amount:</span>{" "}
          {loanDetails.collateralAmount} ETN
        </li>
        <li>
          <span className="font-medium">Interest Rate:</span>{" "}
          {loanDetails.interestRate}%
        </li>
      </ul>
    </div>
  );
};
