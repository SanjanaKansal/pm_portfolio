import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface RevealBlockProps {
  preview: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
}

export function RevealBlock({ preview, children, defaultOpen = false }: RevealBlockProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-stone-200/60 dark:border-stone-800/60">
      {/* Preview - always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between py-4 text-left transition-colors hover:bg-stone-100/50 dark:hover:bg-stone-900/50"
      >
        <div className="flex-1 pr-4">{preview}</div>
        <ChevronDown
          className={`mt-1 h-4 w-4 flex-shrink-0 text-stone-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Revealed content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          {children}
        </div>
      </div>
    </div>
  )
}