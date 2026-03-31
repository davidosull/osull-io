import { Badge } from '@/components/ui/badge';

export function HeroSection() {
  const skills = ['Next.js', 'WordPress', 'Supabase', 'Anthropic', 'n8n'];

  return (
    <section className='pt-24 pb-16 space-y-6 sm:space-y-8'>
      <div className='space-y-2 sm:space-y-4'>
        <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight'>
          I build things that{' '}
          <span className='text-muted-foreground'>work</span>. Plugins,{' '}
          <span className='text-muted-foreground'>apps</span>, and the
          occasional <span className='text-muted-foreground'>SaaS</span>.
        </h1>
      </div>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
        <div className='flex flex-wrap gap-2'>
          {skills.map((skill) => (
            <Badge key={skill} variant='outline' className='text-sm'>
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
