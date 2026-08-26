import { site } from '@/lib/site';
import { GitHubIcon, LinkedInIcon } from '@/components/icons';

const iconLinkClass =
  'flex h-8 w-8 items-center justify-center rounded-[var(--radius-control)] border border-line text-muted transition-colors duration-100 hover:border-line-strong hover:bg-raised hover:text-white';

export function SiteHeader() {
  return (
    <header className='flex flex-wrap items-center justify-between gap-x-4 gap-y-5 pt-10 pb-4'>
      <div className='flex flex-col gap-0.5'>
        <span className='text-[15px] font-semibold tracking-[-0.01em] text-strong'>
          {site.name}
        </span>
        <span className='font-mono text-xs text-subtle'>
          {site.role} · {site.location}
        </span>
      </div>

      <nav className='flex items-center gap-2'>
        <a
          href={site.github}
          target='_blank'
          rel='noopener'
          title='GitHub'
          className={iconLinkClass}
        >
          <GitHubIcon />
        </a>
        <a
          href={site.linkedin}
          target='_blank'
          rel='noopener'
          title='LinkedIn'
          className={iconLinkClass}
        >
          <LinkedInIcon />
        </a>
        <a
          href={`mailto:${site.email}`}
          className='flex h-8 items-center gap-1.5 rounded-[var(--radius-control)] bg-strong px-3.5 text-[13px] font-medium text-background transition-colors duration-100 hover:bg-white'
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
