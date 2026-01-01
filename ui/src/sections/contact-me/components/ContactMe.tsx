import type { ContactMeProps } from '@/../product/sections/contact-me/types'

export function ContactMe({ identity, socials }: ContactMeProps) {
  return (
    <div className="flex h-[calc(100vh-8rem)] flex-row gap-px bg-stone-200 dark:bg-stone-800">
      {/* Left - Identity & Email */}
      <div className="flex flex-1 flex-col gap-px">
        {/* Row label */}
        <div className="flex h-12 items-center justify-center bg-stone-50 px-4 dark:bg-stone-950">
          <h2 className="text-xs font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Identity
          </h2>
        </div>
        {/* Content */}
        <div className="flex flex-1 flex-col justify-center bg-stone-50 p-8 dark:bg-stone-950">
          <h3 className="text-2xl font-medium text-stone-900 dark:text-stone-100">
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

      {/* Right - Social Profiles */}
      <div className="flex flex-1 flex-col gap-px">
        {/* Row label */}
        <div className="flex h-12 items-center justify-center bg-stone-50 px-4 dark:bg-stone-950">
          <h2 className="text-xs font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Socials
          </h2>
        </div>
        {/* Content */}
        <div className="flex flex-1 flex-col justify-center gap-4 bg-stone-50 p-8 dark:bg-stone-950">
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <h3 className="text-sm font-medium text-stone-900 group-hover:text-amber-600 dark:text-stone-100 dark:group-hover:text-amber-400">
                {social.platform}
              </h3>
              <p className="mt-0.5 text-xs text-stone-400 dark:text-stone-500">
                {social.url}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}