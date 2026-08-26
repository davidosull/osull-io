import { SiteHeader } from '@/components/site-header';
import { Intro } from '@/components/intro';
import { Services } from '@/components/services';
import { Stack } from '@/components/stack';
import { Products } from '@/components/products';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <div className='relative min-h-screen'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-x-0 top-0 h-50 overflow-hidden'
      >
        <div className='absolute -top-55 left-1/2 h-105 w-180 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,var(--accent)_0%,transparent_65%)]' />
      </div>

      <div className='sticky top-0 z-20 bg-background/85 backdrop-blur-md'>
        <div className='mx-auto max-w-[680px] px-6'>
          <SiteHeader />
        </div>
      </div>

      <div className='relative mx-auto max-w-[680px] px-6'>
        <main>
          <Intro />
          <Services />
          <Stack />
          <Products />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
