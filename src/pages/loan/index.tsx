"use client";

import { useState } from "react";
import { LoanForm } from "@/components/loan/LoanForm";
import { LoanSummary } from "@/components/loan/LoanSummary";

export default function RequestLoanPage() {
  const [loanDetails, setLoanDetails] = useState({
    amount: 1000,
    duration: 6,
    collateralType: "ETN",
    collateralAmount: 1500,
    interestRate: 5,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoanDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Request a Loan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LoanForm />
        <LoanSummary />
      </div>
    </div>
  );
}
