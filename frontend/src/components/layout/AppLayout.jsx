import Navbar from './Navbar'
import ApiStatusIndicator from '../shared/ApiStatusIndicator'
import Badge from '../ui/Badge'
import ModelInfo from '../features/SentimentAnalysis/ModelInfo'
import SingleInput from '../features/SentimentAnalysis/SingleInput'
import BatchInput from '../features/BatchAnalysis/BatchInput'

export default function AppLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-200">
      <div className="nexus-background" aria-hidden="true">
        <div className="nexus-grid" />
        <div className="nexus-orb nexus-orb-one" />
        <div className="nexus-orb nexus-orb-two" />
        <div className="nexus-orb nexus-orb-three" />
        <div className="nexus-scanline" />
        <div className="nexus-noise" />
      </div>

      <div className="nexus-content">
        <Navbar />

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
        <section className="mb-10 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2">
            <ApiStatusIndicator />
          </div>

          <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-violet-400">
            AI TEXT INTELLIGENCE
          </p>

          <h1 className="bg-gradient-to-r from-white via-violet-200 to-indigo-300 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-6xl">
            TWITTER SENTIMENT
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Analyze social media comments with a four-class sentiment classifier
            powered by TF-IDF and Multinomial Naive Bayes.
          </p>
          <div className="mx-auto mt-5 max-w-3xl rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-4 text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Dataset Notice
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
                This model was trained on a Twitter sentiment dataset. It is optimized
                for Twitter-style language and may perform poorly on general text,
                formal writing, or content outside its training domain.
            </p>
          </div>
          

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <Badge label="TF-IDF" />
            <Badge label="Multinomial NB" />
            <Badge label="FastAPI" />
            <Badge label="Real-time" />
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,.65fr)]">
          <div className="space-y-8">
            <SingleInput />
            <BatchInput />
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <ModelInfo />

            <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Backend status
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-slate-400">FastAPI engine</span>
                <ApiStatusIndicator />
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-600">
                Status is checked automatically every 5 seconds.
              </p>
            </section>
          </aside>
        </div>
        </main>

        <footer className="border-t border-slate-900/80 py-6 text-center text-xs text-slate-600">
          NEXUS SENTIMENT · TF-IDF + MULTINOMIAL NAIVE BAYES
        </footer>
      </div>
    </div>
  )
}
