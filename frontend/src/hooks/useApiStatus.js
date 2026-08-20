import { useCallback, useEffect, useState } from 'react'
import { getHealth } from '../services/api'

export default function useApiStatus(intervalMs = 5000) {
  const [status, setStatus] = useState('checking')
  const [health, setHealth] = useState(null)

  const check = useCallback(async () => {
    try {
      const data = await getHealth()
      setHealth(data)
      setStatus(data?.status === 'running' ? 'online' : 'offline')
    } catch {
      setHealth(null)
      setStatus('offline')
    }
  }, [])

  useEffect(() => {
    check()
    const timer = setInterval(check, intervalMs)
    return () => clearInterval(timer)
  }, [check, intervalMs])

  return { status, health, refresh: check }
}
