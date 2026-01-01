import type { MyToolboxProps } from '@/../product/sections/my-toolbox/types'

const colorMap = {
  stone: {
    header: 'bg-stone-100 dark:bg-stone-900',
    headerText: 'text-stone-600 dark:text-stone-400',
  },
  blue: {
    header: 'bg-blue-50 dark:bg-blue-950',
    headerText: 'text-blue-600 dark:text-blue-400',
  },
  amber: {
    header: 'bg-amber-50 dark:bg-amber-950',
    headerText: 'text-amber-600 dark:text-amber-400',
  },
  green: {
    header: 'bg-green-50 dark:bg-green-950',
    headerText: 'text-green-600 dark:text-green-400',
  },
}

export function MyToolbox({ categories }: MyToolboxProps) {
  return (
    <div className="grid h-[calc(100vh-8rem)] grid-cols-4 grid-rows-[auto_1fr_1fr_1fr_1fr] gap-px bg-stone-200 dark:bg-stone-800">
      {/* Header row */}
      {categories.map((category) => {
        const colors = colorMap[category.color]
        return (
          <div
            key={`header-${category.id}`}
            className={`flex items-center justify-center px-4 py-3 ${colors.header}`}
          >
            <h2 className={`text-xs font-medium uppercase tracking-widest ${colors.headerText}`}>
              {category.title}
            </h2>
          </div>
        )
      })}

      {/* Skill rows - 4 rows of skills */}
      {[0, 1, 2, 3].map((rowIndex) => (
        categories.map((category) => {
          const skill = category.skills[rowIndex]
          return (
            <div
              key={`${category.id}-${rowIndex}`}
              className="flex flex-col justify-center bg-stone-50 p-5 dark:bg-stone-950"
            >
              {skill && (
                <>
                  <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {skill.description}
                  </p>
                </>
              )}
            </div>
          )
        })
      ))}
    </div>
  )
}