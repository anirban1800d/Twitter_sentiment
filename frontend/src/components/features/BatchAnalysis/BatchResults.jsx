function resultClass(label) {
  if (label === 'Positive') return 'text-emerald-400'
  if (label === 'Negative') return 'text-red-400'
  if (label === 'Neutral') return 'text-sky-400'
  return 'text-violet-400'
}

export default function BatchResults({ data }) {
  if (!data?.length) return null

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left text-sm">
          <thead className="bg-slate-900 text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Comment</th>
              <th className="px-4 py-3">Prediction</th>
              <th className="px-4 py-3">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={`${index}-${item.input_text}`} className="border-t border-slate-800/70">
                <td className="px-4 py-3 font-mono text-slate-600">{index + 1}</td>
                <td className="max-w-md px-4 py-3 text-slate-400">
                  <div className="line-clamp-2">{item.input_text}</div>
                </td>
                <td className={`px-4 py-3 font-semibold ${resultClass(item.prediction)}`}>
                  {item.prediction}
                </td>
                <td className="px-4 py-3 font-mono text-slate-300">
                  {item.confidence}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
