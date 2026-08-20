import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react'

const meta = {
  Positive: {
    icon: CheckCircle2,
    color: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
  },
  Negative: {
    icon: XCircle,
    color: 'text-red-400',
    border: 'border-red-500/20',
    bg: 'bg-red-500/5',
  },
  Neutral: {
    icon: AlertCircle,
    color: 'text-sky-400',
    border: 'border-sky-500/20',
    bg: 'bg-sky-500/5',
  },
  Irrelevant: {
    icon: AlertCircle,
    color: 'text-violet-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/5',
  },
}

export default function ResultCard({ data }) {
  if (!data) return null

  const style = meta[data.prediction] || meta.Neutral
  const Icon = style.icon

  return (
    <div className={`rounded-2xl border ${style.border} ${style.bg} p-6`}>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Prediction
          </div>
          <div className="flex items-center gap-3">
            <Icon className={`h-7 w-7 ${style.color}`} />
            <h3 className="text-3xl font-bold text-white">{data.prediction}</h3>
          </div>
        </div>

        <div className="sm:text-right">
          <div className="text-xs uppercase tracking-widest text-slate-500">
            Confidence
          </div>
          <div className="mt-1 text-3xl font-bold font-mono text-slate-100">
            {data.confidence}
          </div>
        </div>
      </div>
    </div>
  )
}
