export interface Project {
  name: string;
  icon: string;
  type: string;
  status: string;
  url: string;
  blurb: string;
}

export const projects: Project[] = [
  {
    name: 'Quiet Route',
    icon: '/img/icons/icon-quiet-route.png',
    type: 'Web and iPhone app',
    status: 'Live',
    url: 'https://quietroute.io',
    blurb:
      'Campervan trip planning for the UK and Europe. Route, overnight stops, things worth doing and a budget, night by night.',
  },
  {
    name: 'TaskClarity',
    icon: '/img/icons/icon-task-clarity.png',
    type: 'Web application',
    status: 'Live',
    url: 'https://taskclarity.io',
    blurb:
      'A client portal for independent developers. Clients submit tasks through a simple link with no login, and everything sits in one dashboard.',
  },
  {
    name: 'Open Icons for ACF',
    icon: '/img/icons/icon-open-icons.png',
    type: 'WordPress plugin',
    status: 'Live',
    url: 'https://acfopenicons.com',
    blurb:
      'A better icon picker for Advanced Custom Fields. 7,000+ icons from Lucide, Tabler and Heroicons with zero frontend JavaScript and zero CDN calls.',
  },
  {
    name: 'Open Icons for ACF (Lite)',
    icon: '/img/icons/icon-open-icons.png',
    type: 'WordPress plugin',
    status: 'Live',
    url: 'https://wordpress.org/plugins/open-icons-acf/',
    blurb:
      'The free version on WordPress.org. Adds a custom icon field to ACF with 324 bundled Heroicons and a colour palette system.',
  },
  {
    name: 'KatoSync',
    icon: '/img/icons/icon-kato-sync.png',
    type: 'WordPress plugin',
    status: 'Live',
    url: 'https://katosync.com',
    blurb:
      'Imports Kato property feeds into WordPress as a custom post type, on a schedule or on demand, skipping anything unchanged.',
  },
  {
    name: '301 Flow',
    icon: '/img/icons/icon-301-flow.png',
    type: 'Web application',
    status: 'Live',
    url: 'https://301-flow.vercel.app',
    blurb:
      'Compares old and new sitemaps and generates redirect rules for Apache, Nginx, Cloudflare Workers and IIS, with confidence scores on unmatched URLs.',
  },
  {
    name: 'Easy Invoice',
    icon: '/img/icons/icon-easy-invoice.png',
    type: 'Raycast extension',
    status: 'Live',
    url: 'https://www.raycast.com/davidosull/easy-invoice',
    blurb:
      'PDF invoices in seconds from Raycast, with automatic numbering, VAT and bank details. Clients and records stored locally on your machine.',
  },
];
