import { site } from '@/lib/site';
import { GitHubIcon, LinkedInIcon } from '@/components/icons';

const iconLinkClass =
  'flex h-8 w-8 items-center justify-center rounded-[var(--radius-control)] border border-line text-muted transition-colors duration-100 hover:border-line-strong hover:bg-raised hover:text-white';

export function Intro() {
  return (
    <section className='pt-20 pb-16'>
      <h1 className='mb-5 text-[34px] leading-[1.18] font-semibold tracking-[-0.022em] text-balance text-strong'>
        WordPress plugins, web and iOS apps, and the occasional SaaS.
      </h1>
      <p className='max-w-[54ch] text-[15px] leading-[1.65] text-muted'>
        I&apos;m David, an independent full stack developer with over ten years
        of experience. I build for agencies and businesses that want direct
        access to the person doing the work. When I&apos;m not coding or playing
        golf, I&apos;m usually in a campervan somewhere in Europe with my family.
      </p>

      <div className='mt-7 flex items-center gap-2'>
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
      </div>
    </section>
  );
}
