export function SectionHeading({
  title,
  count,
}: {
  title: string;
  count: number;
}) {
  return (
    <div className='mb-5 flex items-baseline justify-between border-b border-line pb-3'>
      <h2 className='text-[13px] font-medium tracking-[0.02em] text-strong'>
        {title}
      </h2>
      <span className='font-mono text-[11.5px] tabular-nums text-subtle'>
        {String(count).padStart(2, '0')}
      </span>
    </div>
  );
}
