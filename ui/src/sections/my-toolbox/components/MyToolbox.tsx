import { useState } from 'react'
import { Lightbulb, Cpu, Code2, Users } from 'lucide-react'
import type { MyToolboxProps } from '@/../product/sections/my-toolbox/types'

const categoryIcons = [Lightbulb, Cpu, Code2, Users]

export function MyToolbox({ categories }: MyToolboxProps) {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const currentCategory = categories[selectedCategory]

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-[var(--background)] lg:flex-row">
      {/* Left Panel - Categories */}
      <aside className="shrink-0 border-b border-[var(--border)] bg-[var(--card)] lg:w-72 lg:border-b-0 lg:border-r">
        <div className="p-4 lg:p-6">
          <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted-foreground)]">
            Categories
          </h2>
        </div>

        <nav className="flex gap-2 overflow-x-auto px-4 pb-4 lg:flex-col lg:gap-1 lg:px-3 lg:pb-6">
          {categories.map((category, index) => {
            const isActive = selectedCategory === index
            const Icon = categoryIcons[index % categoryIcons.length]

            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(index)}
                className={`group relative flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-left transition-all duration-300 lg:w-full ${
                  isActive
                    ? 'bg-[var(--foreground)] text-[var(--background)]'
                    : 'hover:bg-[var(--secondary)]'
                }`}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 hidden h-8 w-1 -translate-y-1/2 rounded-r-full bg-[var(--accent)] lg:block" />
                )}

                <Icon
                  size={18}
                  className={isActive ? '' : 'text-[var(--muted-foreground)]'}
                />

                <div className="min-w-0">
                  <div className={`text-sm font-medium ${isActive ? '' : 'text-[var(--foreground)]'}`}>
                    {category.title}
                  </div>
                  <div className={`hidden text-xs lg:block ${isActive ? 'opacity-70' : 'text-[var(--muted-foreground)]'}`}>
                    {category.skills.length} skills
                  </div>
                </div>
              </button>
            )
          })}
        </nav>
      </aside>

      {/* Right Panel - Skills Display */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="shrink-0 border-b border-[var(--border)] bg-[var(--card)] px-6 py-6 lg:px-8">
          <div className="flex items-center gap-3">
            {(() => {
              const Icon = categoryIcons[selectedCategory % categoryIcons.length]
              return (
                <div className="rounded-lg border border-[var(--border)] bg-[var(--secondary)] p-2">
                  <Icon size={20} className="text-[var(--muted-foreground)]" />
                </div>
              )
            })()}
            <div>
              <h1 className="text-xl font-semibold text-[var(--foreground)] lg:text-2xl">
                {currentCategory?.title}
              </h1>
              <p className="text-sm text-[var(--muted-foreground)]">
                {currentCategory?.skills.length} skills in this category
              </p>
            </div>
          </div>
        </header>

        {/* Skills Grid */}
        <div className="flex-1 overflow-y-auto px-6 py-8 lg:px-8">
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {currentCategory?.skills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                description={skill.description || ''}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface SkillCardProps {
  title: string
  description: string
  index: number
}

function SkillCard({ title, description, index }: SkillCardProps) {
  return (
    <div
      className="animate-fade-in-up fill-both group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:shadow-md"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[var(--foreground)] opacity-20 group-hover:opacity-40 transition-opacity" />

      {/* Title */}
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-[var(--foreground)]/80">
        {renderContent(description)}
      </p>
    </div>
  )
}

function renderContent(text: string) {
  if (!text) return null
  const cleanText = text.replace(/\n/g, ' ')
  const parts = cleanText.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-[var(--foreground)]">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <span key={index}>{part}</span>
  })
}