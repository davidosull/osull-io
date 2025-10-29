export interface Project {
  title: string;
  description: string;
  link?: string;
  screenshot: string;
  category: string;
}

export const projects: Project[] = [
  {
    title: 'KatoSync',
    description:
      'With a simple setup, flexible auto-sync cadences, and on-demand syncing, KatoSync delivers fresh Kato data into WordPress reliably — giving you control, not complications.',
    link: 'https://katosync.com',
    screenshot: '/img/project-katosync.webp',
    category: 'WordPress Plugin',
  },
  {
    title: 'ACF Open Icons',
    description:
      "Adds a new field type 'Open Icons' that allows you to select icons from popular MIT licensed icon libraries such as Lucide, Heroicons, and more.",
    screenshot: '/img/project-acf-icons.webp',
    category: 'WordPress Plugin',
  },
];
