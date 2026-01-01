import { useState } from 'react'
import type { WhoAmIProps } from '@/../product/sections/who-am-i/types'

interface RowState {
  [key: string]: number
}

export function WhoAmI({
  background,
  education,
  experience,
}: WhoAmIProps) {
  const [revealed, setRevealed] = useState<RowState>({
    journey: 0,
    education: 0,
    experience: 0,
  })

  const handleCardClick = (row: string, maxCols: number) => {
    setRevealed((prev) => ({
      ...prev,
      [row]: Math.min(prev[row] + 1, maxCols - 1),
    }))
  }

  // Prepare data
  const journeyCards = background.points.slice(0, 3)
  const educationCards = education.items.slice(0, 2).map((item) => ({
    title: item.institution,
    subtitle: `${item.degree}${item.years ? ` · ${item.years}` : ''}`,
    content: item.description,
  }))
  const experienceCards = experience.items.slice(0, 3).map((item) => ({
    title: item.company,
    subtitle: `${item.role}${item.years ? ` · ${item.years}` : ''}`,
    content: item.description,
  }))

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col gap-px bg-stone-200 dark:bg-stone-800">
      {/* Row 1: Journey - 3 cards */}
      <div className="grid flex-1 grid-cols-[8rem_1fr_1fr_1fr] gap-px">
        <div className="flex items-center justify-center bg-stone-50 px-4 dark:bg-stone-950">
          <h2 className="text-xs font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Journey
          </h2>
        </div>
        {[0, 1, 2].map((index) => (
          <GridCard
            key={`journey-${index}`}
            content={journeyCards[index]}
            isRevealed={revealed.journey >= index}
            onClick={() => handleCardClick('journey', journeyCards.filter(Boolean).length)}
            hasMore={revealed.journey === index && index < journeyCards.filter(Boolean).length - 1}
          />
        ))}
      </div>

      {/* Row 2: Education - 2 wider cards */}
      <div className="grid flex-1 grid-cols-[8rem_1fr_1fr] gap-px">
        <div className="flex items-center justify-center bg-stone-50 px-4 dark:bg-stone-950">
          <h2 className="text-xs font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Education
          </h2>
        </div>
        {[0, 1].map((index) => {
          const card = educationCards[index]
          return (
            <GridCard
              key={`education-${index}`}
              title={card?.title}
              subtitle={card?.subtitle}
              content={card?.content}
              isRevealed={revealed.education >= index}
              onClick={() => handleCardClick('education', educationCards.length)}
              hasMore={revealed.education === index && index < educationCards.length - 1}
            />
          )
        })}
      </div>

      {/* Row 3: Experience - 3 cards */}
      <div className="grid flex-1 grid-cols-[8rem_1fr_1fr_1fr] gap-px">
        <div className="flex items-center justify-center bg-stone-50 px-4 dark:bg-stone-950">
          <h2 className="text-xs font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Experience
          </h2>
        </div>
        {[0, 1, 2].map((index) => {
          const card = experienceCards[index]
          return (
            <GridCard
              key={`experience-${index}`}
              title={card?.title}
              subtitle={card?.subtitle}
              content={card?.content}
              isRevealed={revealed.experience >= index}
              onClick={() => handleCardClick('experience', experienceCards.length)}
              hasMore={revealed.experience === index && index < experienceCards.length - 1}
            />
          )
        })}
      </div>
    </div>
  )
}

interface GridCardProps {
  title?: string
  subtitle?: string
  content?: string
  isRevealed: boolean
  onClick: () => void
  hasMore: boolean
}

function GridCard({ title, subtitle, content, isRevealed, onClick, hasMore }: GridCardProps) {
  const isEmpty = !title && !subtitle && !content

  return (
    <button
      onClick={onClick}
      disabled={!hasMore}
      className={`flex flex-col justify-center bg-stone-50 p-6 text-left transition-all duration-300 dark:bg-stone-950 ${
        isEmpty
          ? 'cursor-default'
          : isRevealed
          ? 'opacity-100'
          : 'pointer-events-none opacity-0'
      } ${hasMore && isRevealed ? 'cursor-pointer hover:bg-stone-100 dark:hover:bg-stone-900' : ''}`}
    >
      {title && (
        <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="mt-0.5 text-xs text-stone-400 dark:text-stone-500">
          {subtitle}
        </p>
      )}
      {content && (
        <p className={`whitespace-pre-line text-sm leading-relaxed text-stone-600 dark:text-stone-400 ${title ? 'mt-2' : ''}`}>
          {content}
        </p>
      )}
      {hasMore && isRevealed && (
        <p className="mt-3 text-xs text-amber-600 dark:text-amber-400">
          Click to continue →
        </p>
      )}
    </button>
  )
}