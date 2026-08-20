export default function Input({
  value,
  onChange,
  placeholder,
  disabled = false,
  rows = 8,
}) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      disabled={disabled}
      rows={rows}
      placeholder={placeholder}
      className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-violet-500/70 focus:ring-2 focus:ring-violet-500/10 disabled:opacity-50"
    />
  )
}
