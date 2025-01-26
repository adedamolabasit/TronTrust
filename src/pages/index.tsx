import { AlertsPanel } from "@/components/alert/AlertPanel"
import { CollateralMonitor } from "@/components/CollateralMonitor"
import { CreditScore } from "@/components/CreditScore"
import { DashboardHeader } from "@/components/DashboardHeader"
import { LoanHistory } from "@/components/loan/LoanHistory"

export default function DashboardPage() {
  return (
    <div className="w-screen px-4 py-8 bg-gray-200">
      <DashboardHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <CreditScore />
        <CollateralMonitor />
      </div>
      <LoanHistory />
      <AlertsPanel />
    </div>
  )
}

