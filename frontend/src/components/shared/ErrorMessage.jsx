import { AlertTriangle } from 'lucide-react'

export default function ErrorMessage({ message }) {
  if (!message) return null

  return (
    <div className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-300">
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{message}</span>
    </div>
  )
}
