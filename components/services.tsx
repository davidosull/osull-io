import { services } from '@/lib/site';
import { SectionHeading } from '@/components/section-heading';

export function Services() {
  return (
    <section className='pb-18'>
      <SectionHeading title='What I do' count={services.length} />

      <div className='grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6'>
        {services.map((service) => (
          <div key={service.name} className='flex flex-col gap-1.5'>
            <span className='text-sm font-medium tracking-[-0.01em] text-strong'>
              {service.name}
            </span>
            <span className='text-[13px] leading-[1.55] text-muted'>
              {service.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
