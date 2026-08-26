import Image from 'next/image';

export function Intro() {
  return (
    <section className='pt-20 pb-16'>
      <div className='flex flex-wrap items-start gap-6'>
        <div className='min-w-0 flex-1 basis-70'>
          <h1 className='mb-5 text-[34px] leading-[1.18] font-semibold tracking-[-0.022em] text-balance text-strong'>
            WordPress plugins, web and iOS apps, and the occasional SaaS.
          </h1>
          <p className='max-w-[54ch] text-[15px] leading-[1.65] text-muted'>
            I&apos;m David, an independent full stack developer with over ten
            years of experience. I build for agencies and businesses that want
            direct access to the person doing the work. When I&apos;m not coding
            or playing golf, I&apos;m usually in a campervan somewhere in Europe
            with my family.
          </p>
        </div>

        <Image
          src='/img/portrait.webp'
          alt="David O'Sullivan"
          width={128}
          height={160}
          priority
          className='mt-1.5 h-40 w-32 shrink-0 rounded-[var(--radius-portrait)] border border-line object-cover'
        />
      </div>
    </section>
  );
}
