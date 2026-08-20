import { useMemo, useState } from 'react'
import { Trash2 } from 'lucide-react'
import { analyzeBatch } from '../../../services/api'
import { splitBatchText, validateBatchTexts } from '../../../utils/validation'
import Button from '../../ui/Button'
import LoadingSpinner from '../../shared/LoadingSpinner'
import ErrorMessage from '../../shared/ErrorMessage'
import BatchResults from './BatchResults'

export default function BatchInput() {
  const [text, setText] = useState('')
  const [results, setResults] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const lines = useMemo(() => splitBatchText(text), [text])

  async function handleAnalyze() {
    const validationError = validateBatchTexts(lines)
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    setError('')
    setResults(null)

    try {
      const data = await analyzeBatch(lines)
      setResults(data.results || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function clear() {
    setText('')
    setResults(null)
    setError('')
  }

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-nexus">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-violet-400">
            Batch analysis
          </div>
          <h2 className="mt-1 text-xl font-semibold text-white">
            Analyze up to 100 comments
          </h2>
        </div>
        <span className="whitespace-nowrap font-mono text-xs text-slate-500">
          {lines.length} / 100
        </span>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={loading}
        rows={10}
        placeholder={'One comment per line...\nI love this product.\nThis update is terrible.'}
        className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950/70 p-4 font-mono text-sm leading-6 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-violet-500/70 focus:ring-2 focus:ring-violet-500/10"
      />

      <div className="mt-3 flex justify-end gap-2">
        <Button variant="secondary" onClick={clear} disabled={loading || !text}>
          <Trash2 className="h-4 w-4" />
          Clear
        </Button>
        <Button onClick={handleAnalyze} loading={loading} disabled={!lines.length}>
          Analyze batch
        </Button>
      </div>

      <div className="mt-5 space-y-5">
        <ErrorMessage message={error} />
        {loading && <LoadingSpinner label={`Analyzing ${lines.length} comments...`} />}
        {results && !loading && (
          <BatchResults data={results} />
        )}
      </div>
    </section>
  )
}
