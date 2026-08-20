import { Activity } from 'lucide-react'
import useApiStatus from '../../hooks/useApiStatus'

export default function ApiStatusIndicator() {
  const { status } = useApiStatus()

  const online = status === 'online'
  const checking = status === 'checking'

  return (
    <div className="flex items-center gap-2">
      <Activity
        className={`h-4 w-4 ${
          online ? 'text-emerald-400' : checking ? 'text-amber-400' : 'text-red-400'
        }`}
      />
      <span
        className={`text-xs font-mono ${
          online ? 'text-emerald-400' : checking ? 'text-amber-400' : 'text-red-400'
        }`}
      >
        {online ? 'ENGINE ONLINE' : checking ? 'CHECKING...' : 'DISCONNECTED'}
      </span>
    </div>
  )
}
