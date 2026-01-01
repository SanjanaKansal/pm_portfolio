interface ScrollColumnProps {
  title: string
  children: React.ReactNode
}

export function ScrollColumn({ title, children }: ScrollColumnProps) {
  return (
    <div className="flex h-full flex-col border-r border-stone-200/60 last:border-r-0 dark:border-stone-800/60">
      {/* Fixed Header */}
      <div className="sticky top-0 z-10 border-b border-stone-200/60 bg-stone-50/95 px-5 py-4 backdrop-blur-sm dark:border-stone-800/60 dark:bg-stone-950/95">
        <h2 className="text-xs font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
          {title}
        </h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-5 py-6">
        {children}
      </div>
    </div>
  )
}