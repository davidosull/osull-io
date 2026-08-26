import { site } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className='border-t border-line pt-6 pb-10'>
      <span className='font-mono text-[11.5px] text-subtle'>
        © {new Date().getFullYear()} {site.name}
      </span>
    </footer>
  );
}
