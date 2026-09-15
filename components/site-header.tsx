import Image from 'next/image';
import { site } from '@/lib/site';
import { MailIcon } from '@/components/icons';

export function SiteHeader() {
  return (
    <header className='flex items-center justify-between gap-4 pt-10 pb-4'>
      <div className='flex min-w-0 items-center gap-3'>
        <Image
          src='/img/avatar.webp'
          alt=''
          width={36}
          height={36}
          priority
          className='h-9 w-9 shrink-0 rounded-full border border-line object-cover'
        />
        <div className='flex min-w-0 flex-col gap-0.5'>
          <span className='text-[15px] font-semibold tracking-[-0.01em] text-strong'>
            {site.name}
          </span>
          <span className='font-mono text-xs text-subtle'>
            {site.role} · {site.location}
          </span>
        </div>
      </div>

      <a
        href={`mailto:${site.email}`}
        title='Get in touch'
        className='flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-control)] bg-strong text-[13px] font-medium text-background transition-colors duration-100 hover:bg-white md:w-auto md:px-3.5'
      >
        <span className='md:hidden'>
          <MailIcon />
        </span>
        <span className='sr-only md:not-sr-only'>Get in touch</span>
      </a>
    </header>
  );
}
