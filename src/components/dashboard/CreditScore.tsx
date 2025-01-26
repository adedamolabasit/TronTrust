import { Info } from "lucide-react";

export function CreditScore() {
  const score = 750;
  const maxScore = 1000;

  return (
    <div className="border rounded-lg shadow-md bg-white p-4">
      <div className="border-b pb-4 mb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            Credit Score
            <div className="relative group">
              <Info className="h-4 w-4 text-gray-500 cursor-pointer" />
              <div className="absolute left-1/2 -translate-x-1/2 top-6 w-56 p-2 bg-gray-800 text-white text-sm rounded shadow-md hidden group-hover:block">
                Your credit score is calculated based on your on-chain activity
                and transaction history.
              </div>
            </div>
          </h2>
        </div>
        <p className="text-sm text-gray-600">
          Your current credit score and its impact on loan terms
        </p>
      </div>
      <div className="text-4xl font-bold mb-4">
        {score} / {maxScore}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-gray-600 h-2.5 rounded-full"
          style={{ width: `${(score / maxScore) * 100}%` }}
        ></div>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        A higher score can lead to better interest rates and loan terms.
      </p>
    </div>
  );
}
