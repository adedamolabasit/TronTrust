export function CollateralMonitor() {
    const collateralAmount = 5000;
    const liquidationThreshold = 4000;
    const currentValue = 4500;
  
    return (
      <div className="border rounded-lg shadow-md bg-white p-4">
        <div className="border-b pb-4 mb-4">
          <h2 className="text-lg font-semibold">Collateral Monitor</h2>
          <p className="text-sm text-gray-600">
            Track your collateral and liquidation threshold
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Current Value:</span>
            <span className="font-semibold">{currentValue} ETN</span>
          </div>
          <div className="flex justify-between">
            <span>Liquidation Threshold:</span>
            <span className="font-semibold">{liquidationThreshold} ETN</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
          <div
            className="bg-gray-600 h-2.5 rounded-full"
            style={{ width: `${(currentValue / collateralAmount) * 100}%` }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Your collateral is{" "}
          {((currentValue / liquidationThreshold) * 100).toFixed(2)}% above the
          liquidation threshold.
        </p>
      </div>
    );
  }
  