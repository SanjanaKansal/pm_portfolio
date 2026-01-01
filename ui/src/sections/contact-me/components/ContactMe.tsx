import type { ContactMeProps } from '@/../product/sections/contact-me/types'

export function ContactMe({ identity, socials, tagline }: ContactMeProps) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col gap-px bg-stone-200 dark:bg-stone-800">
      {/* Row 1: Identity */}
      <div className="grid flex-1 grid-cols-1 gap-px md:grid-cols-[8rem_1fr]">
        <div className="flex items-center justify-center bg-stone-50 px-4 py-3 md:py-0 dark:bg-stone-950">
          <h2 className="text-xs font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Identity
          </h2>
        </div>
        <div className="flex flex-col justify-center bg-stone-50 p-6 dark:bg-stone-950">
          <h3 className="text-xl font-medium text-stone-900 md:text-2xl dark:text-stone-100">
            {identity.name}
          </h3>
          <a
            href={`mailto:${identity.email}`}
            className="mt-4 text-sm text-stone-600 hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400"
          >
            {identity.email}
          </a>
          <a
            href={`tel:${identity.phone}`}
            className="mt-2 text-sm text-stone-600 hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400"
          >
            {identity.phone} (WhatsApp)
          </a>
        </div>
      </div>

      {/* Row 2: Socials */}
      <div className="grid flex-1 grid-cols-1 gap-px md:grid-cols-[8rem_1fr_1fr_1fr]">
        <div className="flex items-center justify-center bg-stone-50 px-4 py-3 md:py-0 dark:bg-stone-950">
          <h2 className="text-xs font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Socials
          </h2>
        </div>
        {socials.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center bg-stone-50 p-6 transition-colors hover:bg-stone-100 dark:bg-stone-950 dark:hover:bg-stone-900"
          >
            <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
              {social.platform}
            </h3>
            <p className="mt-1 text-xs text-stone-400 dark:text-stone-500">
              {social.url}
            </p>
          </a>
        ))}
      </div>

      {/* Row 3: Tagline */}
      <div className="grid grid-cols-1 gap-px md:grid-cols-[8rem_1fr]">
        <div className="flex items-center justify-center bg-stone-50 px-4 py-3 md:py-0 dark:bg-stone-950">
          <h2 className="text-xs font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Tagline
          </h2>
        </div>
        <div className="flex flex-col justify-center bg-stone-50 p-6 dark:bg-stone-950">
          <p className="text-lg text-stone-700 dark:text-stone-300">{tagline}</p>
        </div>
      </div>
    </div>
  )
}