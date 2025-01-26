"use client";

import { LoanForm } from "@/components/loan/LoanForm";
import { LoanSummary } from "@/components/loan/LoanSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function RequestLoanPage() {
  const handleBackClick = () => {
    window.history.back(); 
  };

  return (
    <div className="h-screen w-screen px-12 py-8 bg-gray-200">
      <button
        onClick={handleBackClick}
        className="mb-8 text-gray-500 hover:text-gray-800 flex items-center"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back
      </button>
      <h1 className="text-3xl font-bold mb-8">Request a Loan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LoanForm />
        <LoanSummary />
      </div>
    </div>
  );
}
