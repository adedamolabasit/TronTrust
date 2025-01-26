import { createContext, useContext, ReactNode, useState } from 'react';
import { LoanContextType, LoanDetails } from '@/types/LoanTypes';


const LoanContext = createContext<LoanContextType | undefined>(undefined);

interface LoanProviderProps {
  children: ReactNode;
}

export const LoanProvider = ({ children }: LoanProviderProps) => {
  const [loanAmount, setLoanAmount] = useState<number>(1000);
  const [loanDetails, setLoanDetails] = useState<LoanDetails>({
    amount: 1000,
    duration: 6,
    collateralType: "ETN",
    collateralAmount: 1500,
    interestRate: 5,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setLoanDetails((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <LoanContext.Provider value={{ loanAmount, setLoanAmount, handleInputChange, loanDetails }}>
      {children}
    </LoanContext.Provider>
  );
};

export const useLoanContext = () => {
  const context = useContext(LoanContext);
  
  if (!context) {
    throw new Error('useLoanContext must be used within a LoanProvider');
  }
  
  return context;
};
