export default function ProcessedText({ data }) {
  if (!data) return null

  return (
    <details className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
      <summary className="cursor-pointer text-sm font-medium text-slate-300">
        View preprocessing
      </summary>

      <div className="mt-4 space-y-4 text-sm">
        <div>
          <div className="mb-1 text-xs uppercase tracking-widest text-slate-600">
            Original
          </div>
          <p className="break-words leading-6 text-slate-400">{data.input_text}</p>
        </div>

        <div>
          <div className="mb-1 text-xs uppercase tracking-widest text-slate-600">
            Cleaned
          </div>
          <p className="break-words leading-6 text-slate-300">{data.cleaned_text}</p>
        </div>
      </div>
    </details>
  )
}
