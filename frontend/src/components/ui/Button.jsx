export default function Button({
  children,
  loading = false,
  disabled = false,
  variant = 'primary',
  type = 'button',
  onClick,
  className = '',
}) {
  const variants = {
    primary:
      'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-900/20',
    secondary:
      'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700',
    danger:
      'bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/20',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-medium transition disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
    >
      {loading ? 'Processing...' : children}
    </button>
  )
}
