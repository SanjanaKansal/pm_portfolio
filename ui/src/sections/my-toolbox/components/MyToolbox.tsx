import type { MyToolboxProps } from '@/../product/sections/my-toolbox/types'

const colorMap = {
  stone: 'text-stone-600 dark:text-stone-400',
  blue: 'text-blue-600 dark:text-blue-400',
  amber: 'text-amber-600 dark:text-amber-400',
  green: 'text-green-600 dark:text-green-400',
}

export function MyToolbox({ categories }: MyToolboxProps) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col gap-px bg-stone-200 dark:bg-stone-800 md:h-[calc(100vh-4rem)]">
      {/* 4 rows - one per category */}
      {categories.map((category) => (
        <div
          key={category.id}
          className="grid flex-1 grid-cols-1 gap-px md:grid-cols-[8rem_1fr_1fr_1fr_1fr]"
        >
          {/* Row label */}
          <div className="flex items-center justify-center bg-stone-50 px-4 py-3 md:py-0 dark:bg-stone-950">
            <h2 className={`text-xs font-medium uppercase tracking-widest ${colorMap[category.color]}`}>
              {category.title}
            </h2>
          </div>
          {/* 4 skill cards */}
          {category.skills.map((skill, index) => (
            <div
              key={`${category.id}-${index}`}
              className="flex flex-col justify-center bg-stone-50 p-5 dark:bg-stone-950"
            >
              <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
                {skill.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}