import type { MutualFitProps } from '@/../product/sections/mutual-fit/types'

const colorMap = {
  purple: 'text-purple-600 dark:text-purple-400',
  green: 'text-green-600 dark:text-green-400',
}

export function MutualFit({ rows }: MutualFitProps) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col gap-px bg-stone-200 dark:bg-stone-800 md:h-[calc(100vh-4rem)]">
      {/* 2 rows */}
      {rows.map((row) => (
        <div
          key={row.id}
          className="grid flex-1 grid-cols-1 gap-px md:grid-cols-[8rem_1fr_1fr_1fr_1fr]"
        >
          {/* Row label */}
          <div className="flex items-center justify-center bg-stone-50 px-4 py-3 md:py-0 dark:bg-stone-950">
            <h2 className={`text-xs font-medium uppercase tracking-widest ${colorMap[row.color]}`}>
              {row.title}
            </h2>
          </div>
          {/* 4 cards */}
          {row.items.map((item, index) => (
            <div
              key={`${row.id}-${index}`}
              className="flex flex-col justify-center bg-stone-50 p-5 dark:bg-stone-950"
            >
              <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}