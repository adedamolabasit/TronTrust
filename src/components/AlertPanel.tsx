import { Bell } from "lucide-react"

const alerts = [
  { id: 1, message: "Loan payment due in 3 days", type: "warning" },
  { id: 2, message: "Collateral nearing liquidation threshold", type: "danger" },
  { id: 3, message: "Credit score increased by 20 points", type: "success" },
]

export function AlertsPanel() {
  return (
    <div className="mt-6 border rounded-lg shadow-md bg-white">
      <div className="px-4 py-3 border-b bg-gray-50">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-800">Alerts</h2>
        </div>
        <p className="text-sm text-gray-600">Important notifications about your account</p>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          {alerts.map((alert) => (
            <li
              key={alert.id}
              className={`p-3 rounded-md text-sm font-medium ${
                alert.type === "warning"
                  ? "bg-yellow-100 text-yellow-800"
                  : alert.type === "danger"
                  ? "bg-red-100 text-red-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {alert.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
