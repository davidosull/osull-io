export interface Project {
  title: string;
  description: string;
  link?: string;
  screenshot: string;
  category: string;
}

export const projects: Project[] = [
  {
    title: 'Open Icons for ACF',
    description:
      'A better icon picker for Advanced Custom Fields. Access 7,000+ icons from Lucide, Tabler, and Heroicons with zero frontend JavaScript, zero CDN calls, and zero performance impact.',
    link: 'https://acfopenicons.com',
    screenshot: '/img/screen-oi-acf.webp',
    category: 'WordPress Plugin',
  },
  {
    title: 'Open Icons for ACF (Lite)',
    description:
      'The free version of Open Icons, available on WordPress.org. Adds a custom icon field to ACF with 324 bundled Heroicons, a colour palette system, and a clean PHP helper function.',
    link: 'https://wordpress.org/plugins/open-icons-acf/',
    screenshot: '/img/screen-oi-acf-lite.webp',
    category: 'WordPress Plugin',
  },
  {
    title: 'TaskClarity',
    description:
      'A client portal for independent developers. Clients submit tasks through a simple link — no login required. One dashboard for every request, conversation, and approval.',
    link: 'https://taskclarity.io',
    screenshot: '/img/screen-task-clarity.webp',
    category: 'Web Application',
  },
  {
    title: 'KatoSync',
    description:
      'With a simple setup, flexible auto-sync cadences, and on-demand syncing, KatoSync delivers fresh Kato data into WordPress reliably — giving you control, not complications.',
    link: 'https://katosync.com',
    screenshot: '/img/screen-kato-sync.webp',
    category: 'WordPress Plugin',
  },
  {
    title: 'Easy Invoice',
    description:
      'Create and manage professional PDF invoices in seconds from Raycast. Track clients, export records, and get paid faster — all stored locally.',
    link: 'https://www.raycast.com/davidosull/easy-invoice',
    screenshot: '/img/screen-raycast-easy-invoice.webp',
    category: 'Raycast Extension',
  },
  {
    title: '301 Flow',
    description:
      'Avoid site-breaking mistakes by automating your redirect mapping. Compare sitemaps and generate production-ready redirect rules instantly.',
    link: 'https://301-flow.vercel.app',
    screenshot: '/img/screen-301-flow.webp',
    category: 'Web Application',
  },
];
