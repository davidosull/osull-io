import { stack } from '@/lib/site';
import { SectionHeading } from '@/components/section-heading';

export function Stack() {
  return (
    <section className='pb-18'>
      <SectionHeading title='What I use' count={stack.length} />

      <ul className='flex flex-wrap gap-2'>
        {stack.map((item) => (
          <li
            key={item}
            className='rounded-[var(--radius-control)] border border-line px-2.5 py-1 font-mono text-[11.5px] text-muted'
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
