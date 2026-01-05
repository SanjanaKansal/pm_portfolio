import type { MyToolboxProps } from '@/../product/sections/my-toolbox/types'


function renderContent(text: string) {
  if (!text) return null
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

export function MyToolbox({ categories }: MyToolboxProps) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col gap-px bg-stone-200 dark:bg-stone-800">
      {/* 4 rows - one per category */}
      {categories.map((category) => (
        <div
          key={category.id}
          className="grid flex-1 grid-cols-1 gap-px md:grid-cols-[8rem_1fr_1fr_1fr]"
        >
          {/* Row label */}
          <div className="flex items-center justify-center bg-stone-50 px-4 py-3 md:py-0 dark:bg-stone-950">
            <h2 className="text-xs font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
              {category.title}
            </h2>
          </div>
          {/* 4 skill cards */}
          {category.skills.map((skill, index) => (
            <div
              key={`${category.id}-${index}`}
              className="flex flex-col justify-center bg-stone-50 p-5 dark:bg-stone-950"
            >
              <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                {skill.title}
              </h3>
              {skill.description && (
                <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {renderContent(skill.description)}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}