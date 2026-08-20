export default function ProbabilityBars({ probabilities = [] }) {
  return (
    <div className="space-y-4">
      <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
        Probability Distribution
      </div>

      {probabilities.map((prob) => {
        const width = Math.max(0, Math.min(100, Number(prob.probability) * 100))

        return (
          <div key={prob.label}>
            <div className="mb-1.5 flex justify-between text-xs">
              <span className="text-slate-300">{prob.label}</span>
              <span className="font-mono text-slate-500">{prob.percentage}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-900">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-400 transition-all duration-700"
                style={{ width: `${width}%` }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
