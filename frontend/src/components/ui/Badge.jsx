export default function Badge({ label, type = 'tech' }) {
  const styles = {
    tech: 'border-slate-700 bg-slate-900/70 text-slate-300',
    online: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
    offline: 'border-red-500/20 bg-red-500/10 text-red-300',
  }

  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-mono ${styles[type] || styles.tech}`}>
      {label}
    </span>
  )
}
