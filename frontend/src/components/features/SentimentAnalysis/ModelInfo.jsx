import Badge from '../../ui/Badge'

export default function ModelInfo() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-nexus">
      <div className="mb-5">
        <div className="text-xs font-semibold uppercase tracking-widest text-violet-400">
          Model
        </div>
        <h2 className="mt-1 text-xl font-semibold text-white">
          Multinomial Naive Bayes
        </h2>
      </div>

      <div className="space-y-3 text-sm">
        {[
          ['Feature extraction', 'TF-IDF'],
          ['N-grams', '1–2'],
          ['Classes', 'Positive / Negative / Neutral / Irrelevant'],
          ['API', 'FastAPI'],
        ].map(([key, value]) => (
          <div
            key={key}
            className="flex flex-col gap-1 border-b border-slate-800/70 py-2 last:border-0 sm:flex-row sm:justify-between"
          >
            <span className="text-slate-500">{key}</span>
            <span className="text-right font-mono text-slate-300">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Badge label="TF-IDF" />
        <Badge label="Multinomial NB" />
        <Badge label="4 classes" />
      </div>
    </section>
  )
}
