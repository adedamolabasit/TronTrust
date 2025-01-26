export interface LoanContextType {
    loanAmount: number;
    setLoanAmount: (amount: number) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    loanDetails: LoanDetails
  }

export interface LoanDetails {
    amount: number
    duration: number
    collateralType: "ETN" | "BTC" | "ETH"
    collateralAmount: number
    interestRate: number
}