import type { WhoAmIProps } from '@/../product/sections/who-am-i/types'

export function WhoAmI({
  background,
  education,
  experience,
}: WhoAmIProps) {
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
    <div className="flex min-h-[calc(100vh-4rem)] flex-col gap-px bg-stone-200 dark:bg-stone-800 md:h-[calc(100vh-4rem)]">
      {/* Row 1: Journey - 3 cards */}
      <div className="grid flex-1 grid-cols-1 gap-px md:grid-cols-[8rem_1fr_1fr_1fr]">
        <div className="flex items-center justify-center bg-stone-50 px-4 py-3 md:py-0 dark:bg-stone-950">
          <h2 className="text-xs font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Journey
          </h2>
        </div>
        {[0, 1, 2].map((index) => (
          <GridCard key={`journey-${index}`} content={journeyCards[index]} />
        ))}
      </div>

      {/* Row 2: Education - 1 card */}
      <div className="grid flex-1 grid-cols-1 gap-px md:grid-cols-[8rem_1fr]">
        <div className="flex items-center justify-center bg-stone-50 px-4 py-3 md:py-0 dark:bg-stone-950">
          <h2 className="text-xs font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Education
          </h2>
        </div>
        {educationCards[0] && (
          <GridCard
            title={educationCards[0].title}
            subtitle={educationCards[0].subtitle}
            content={educationCards[0].content}
          />
        )}
      </div>

      {/* Row 3: Experience - 3 cards */}
      <div className="grid flex-1 grid-cols-1 gap-px md:grid-cols-[8rem_1fr_1fr_1fr]">
        <div className="flex items-center justify-center bg-stone-50 px-4 py-3 md:py-0 dark:bg-stone-950">
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
}

function renderContent(text: string) {
  // Split by newlines first, then handle bold within each line
  const lines = text.split('\n')
  return lines.map((line, lineIndex) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g)
    const renderedParts = parts.map((part, partIndex) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={partIndex} className="font-semibold text-stone-900 dark:text-stone-100">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return <span key={partIndex}>{part}</span>
    })
    return (
      <span key={lineIndex}>
        {renderedParts}
        {lineIndex < lines.length - 1 && <br />}
      </span>
    )
  })
}

function GridCard({ title, subtitle, content }: GridCardProps) {
  return (
    <div className="flex flex-col justify-center bg-stone-50 p-6 dark:bg-stone-950">
      {title && (
        <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="mt-0.5 text-xs text-stone-400 dark:text-stone-500">
          {subtitle}
        </p>
      )}
      {content && (
        <p className={`text-sm leading-relaxed text-stone-600 dark:text-stone-400 ${title ? 'mt-2' : ''}`}>
          {renderContent(content)}
        </p>
      )}
    </div>
  )
}