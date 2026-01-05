import { useState } from 'react'
import { ChevronRight, Lightbulb, Brain, Zap, Target } from 'lucide-react'
import type { WhoAmIProps, StoryItem } from '@/../product/sections/who-am-i/types'

const storyIcons = {
  context: ChevronRight,
  insight: Lightbulb,
  reasoning: Brain,
  action: Zap,
  impact: Target,
}

export function WhoAmI({ experience }: WhoAmIProps) {
  const [selectedExp, setSelectedExp] = useState(0)
  const [selectedStory, setSelectedStory] = useState(0)

  const currentExp = experience.items[selectedExp]
  const stories = (currentExp as any)?.stories as StoryItem[] | undefined
  const currentStory = stories?.[selectedStory]

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-[var(--background)] lg:flex-row">
      {/* Left Panel - Company Timeline */}
      <aside className="shrink-0 border-b border-[var(--border)] bg-[var(--card)] lg:w-72 lg:border-b-0 lg:border-r">
        <div className="p-4 lg:p-6">
          <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted-foreground)]">
            Experience
          </h2>
        </div>

        <nav className="flex gap-2 overflow-x-auto px-4 pb-4 lg:flex-col lg:gap-1 lg:px-3 lg:pb-6">
          {experience.items.map((item, index) => {
            const isActive = selectedExp === index
            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedExp(index)
                  setSelectedStory(0)
                }}
                className={`group relative shrink-0 rounded-lg px-4 py-3 text-left transition-all duration-300 lg:w-full ${
                  isActive
                    ? 'bg-[var(--foreground)] text-[var(--background)]'
                    : 'hover:bg-[var(--secondary)]'
                }`}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 hidden h-8 w-1 -translate-y-1/2 rounded-r-full bg-[var(--accent)] lg:block" />
                )}

                <div className={`text-sm font-medium ${isActive ? '' : 'text-[var(--foreground)]'}`}>
                  {item.company}
                </div>
                <div className={`mt-0.5 hidden text-xs lg:block ${isActive ? 'opacity-70' : 'text-[var(--muted-foreground)]'}`}>
                  {item.role}
                </div>
                <div className={`mt-1 hidden text-xs lg:block ${isActive ? 'opacity-50' : 'text-[var(--muted-foreground)] opacity-60'}`}>
                  {item.years}
                </div>
              </button>
            )
          })}
        </nav>
      </aside>

      {/* Right Panel - Story Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Company Header */}
        <header className="shrink-0 border-b border-[var(--border)] bg-[var(--card)] px-6 py-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-xl font-semibold text-[var(--foreground)] lg:text-2xl">
                  {currentExp?.company}
                </h1>
                <p className="mt-1 text-[var(--accent)]">
                  {currentExp?.role}
                </p>
                {(currentExp as any)?.tagline && (
                  <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                    {(currentExp as any).tagline}
                  </p>
                )}
              </div>
              <span className="hidden rounded-full bg-[var(--secondary)] px-3 py-1 text-xs text-[var(--muted-foreground)] sm:inline-block">
                {currentExp?.years}
              </span>
            </div>

            {/* Story Selector */}
            {stories && stories.length > 1 && (
              <div className="mt-6 flex gap-2">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedStory(index)}
                    className={`relative rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-300 ${
                      selectedStory === index
                        ? 'bg-[var(--foreground)] text-[var(--background)]'
                        : 'bg-[var(--secondary)] text-[var(--muted-foreground)] hover:bg-[var(--border)] hover:text-[var(--foreground)]'
                    }`}
                  >
                    Story {index + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Story Grid */}
        {currentStory && (
          <div className="flex-1 overflow-y-auto px-6 py-8 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-5">
              {(['context', 'insight', 'reasoning', 'action', 'impact'] as const).map((key, index) => (
                <StoryCard
                  key={key}
                  type={key}
                  content={currentStory[key]}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

interface StoryCardProps {
  type: 'context' | 'insight' | 'reasoning' | 'action' | 'impact'
  content: string
  index: number
}

function StoryCard({ type, content, index }: StoryCardProps) {
  const Icon = storyIcons[type]
  const labels = {
    context: 'Context',
    insight: 'Insight',
    reasoning: 'Reasoning',
    action: 'Action',
    impact: 'Impact',
  }

  return (
    <div
      className="animate-fade-in-up fill-both group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:shadow-md"
      style={{ animationDelay: `${index * 75}ms` }}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[var(--foreground)] opacity-20 group-hover:opacity-40 transition-opacity" />

      {/* Icon Badge */}
      <div className="mb-3 inline-flex items-center gap-2 text-[var(--muted-foreground)]">
        <Icon size={14} strokeWidth={2.5} />
        <span className="text-xs font-semibold uppercase tracking-wider">
          {labels[type]}
        </span>
      </div>

      {/* Content */}
      <p className="text-sm leading-relaxed text-[var(--foreground)]/80">
        {content}
      </p>
    </div>
  )
}