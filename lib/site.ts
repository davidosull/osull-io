export const site = {
  name: "David O'Sullivan",
  role: 'Indie dev',
  location: 'North West England',
  github: 'https://github.com/davidosull',
  linkedin: 'https://www.linkedin.com/in/davidosull',
  email: 'hello@osull.io',
} as const;

export const services = [
  {
    name: 'Automation and AI',
    description:
      'n8n pipelines and Claude-backed tooling wired into real business workflows.',
  },
  {
    name: 'Consulting',
    description:
      'Architecture and tooling advice for agencies and developers who want a second opinion.',
  },
  {
    name: 'iOS builds',
    description:
      'Native SwiftUI app builds, designed and shipped through to the App Store.',
  },
  {
    name: 'Web applications',
    description:
      'Next.js and Supabase products with Stripe billing, designed and built end to end.',
  },
  {
    name: 'WordPress plugins',
    description:
      'Commercial plugins for ACF and agency builds, shipped on WordPress.org and direct.',
  },
  {
    name: 'WordPress websites',
    description:
      'Full site builds for agencies and businesses, from clean themes to complex integrations.',
  },
] as const;

export const stack = [
  'TypeScript',
  'PHP',
  'Swift',
  'Next.js',
  'React',
  'SwiftUI',
  'Vite',
  'Tailwind CSS',
  'shadcn/ui',
  'WordPress',
  'ACF',
  'Contentful',
  'Supabase',
  'Postgres',
  'Upstash',
  'Stripe',
  'Shopify',
  'Resend',
  'Anthropic',
  'n8n',
  'Playwright',
  'Vitest',
  'Sentry',
  'Vercel',
  'Netlify',
  'AWS',
] as const;
