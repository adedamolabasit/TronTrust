import { AlertsPanel } from "@/components/alert/AlertPanel";
import { CollateralMonitor } from "@/components/dashboard/CollateralMonitor";
import { CreditScore } from "@/components/dashboard/CreditScore";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { LoanHistory } from "@/components/loan/LoanHistory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function DashboardPage() {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="w-screen px-4 py-8 bg-gray-200 px-12">
      <DashboardHeader />
      <button
        onClick={handleBackClick}
        className="mb-8 text-gray-500 hover:text-gray-800 flex items-center"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <CreditScore />
        <CollateralMonitor />
      </div>
      <LoanHistory />
      <AlertsPanel />
    </div>
  );
}
