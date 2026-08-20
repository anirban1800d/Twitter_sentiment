import { ExternalLink } from 'lucide-react'
import { API_BASE_URL } from '../../api/client'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 font-bold text-white shadow-lg shadow-violet-900/30">
            N
          </div>
          <div>
            <div className="font-bold tracking-wider text-slate-100">NEXUS</div>
            <div className="text-[10px] font-mono tracking-widest text-slate-500">
              SENTIMENT ENGINE
            </div>
          </div>
        </div>

        <a
          href={`${API_BASE_URL}/docs`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
        >
          API Docs
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  )
}
