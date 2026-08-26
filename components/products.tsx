import Image from 'next/image';
import { projects } from '@/lib/projects';
import { ArrowUpRightIcon } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';

export function Products() {
  return (
    <section className='pb-24'>
      <SectionHeading title='Products' count={projects.length} />

      <div className='grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3'>
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target='_blank'
            rel='noopener'
            className='group flex flex-col gap-3.5 rounded-[var(--radius-card)] border border-line bg-linear-to-b from-white/[0.02] to-transparent to-60% p-5 transition-colors duration-150 hover:border-line-strong hover:bg-raised'
          >
            <span className='flex items-center justify-between'>
              <Image
                src={project.icon}
                alt=''
                width={36}
                height={36}
                className='h-9 w-9 rounded-lg'
              />
              <span className='text-subtle transition-colors duration-150 group-hover:text-muted'>
                <ArrowUpRightIcon />
              </span>
            </span>

            <span className='flex flex-col gap-1.5'>
              <span className='text-[15px] font-medium tracking-[-0.01em] text-strong'>
                {project.name}
              </span>
              <span className='text-[13px] leading-[1.55] text-muted'>
                {project.blurb}
              </span>
            </span>

            <span className='mt-auto font-mono text-[11px] text-subtle'>
              {project.type} · {project.status}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
