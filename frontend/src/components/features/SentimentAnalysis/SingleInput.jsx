import { useState } from 'react'
import { Send } from 'lucide-react'
import { analyzeSingle } from '../../../services/api'
import { validateSingleText } from '../../../utils/validation'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import LoadingSpinner from '../../shared/LoadingSpinner'
import ErrorMessage from '../../shared/ErrorMessage'
import ResultCard from './ResultCard'
import ProbabilityBars from './ProbabilityBars'
import ProcessedText from './ProcessedText'

export default function SingleInput() {
  const [text, setText] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleAnalyze() {
    const validationError = validateSingleText(text)
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const data = await analyzeSingle(text.trim())
      setResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-nexus">
      <div className="mb-5">
        <div className="text-xs font-semibold uppercase tracking-widest text-violet-400">
          Single analysis
        </div>
        <h2 className="mt-1 text-xl font-semibold text-white">
          Analyze a comment
        </h2>
      </div>

      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={loading}
        rows={8}
        placeholder="Enter a social media comment..."
      />

      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-slate-600">{text.length} characters</span>
        <Button
          onClick={handleAnalyze}
          loading={loading}
          disabled={!text.trim()}
        >
          <Send className="h-4 w-4" />
          Analyze
        </Button>
      </div>

      <div className="mt-5">
        <ErrorMessage message={error} />
        {loading && <LoadingSpinner />}
        {result && !loading && (
          <div className="space-y-5">
            <ResultCard data={result} />
            <ProbabilityBars probabilities={result.probabilities} />
            <ProcessedText data={result} />
          </div>
        )}
      </div>
    </section>
  )
}
