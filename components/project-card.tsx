import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className='flex flex-col md:flex-row overflow-hidden py-0'>
      <div className='relative w-full md:w-96 shrink-0 aspect-video md:aspect-auto'>
        <Image
          src={project.screenshot}
          alt={project.title}
          fill
          className='object-cover'
        />
      </div>
      <div className='flex flex-col flex-1 px-6 py-8'>
        <div className='flex items-start justify-between gap-4 mb-3'>
          <h3 className='text-lg font-semibold leading-tight'>{project.title}</h3>
          <Badge variant='secondary' className='shrink-0 text-xs'>{project.category}</Badge>
        </div>
        <p className='text-sm text-muted-foreground leading-relaxed flex-1'>
          {project.description}
        </p>
        <div className='mt-4'>
          {project.link ? (
            <Button variant='ghost' size='sm' asChild className='px-0 text-muted-foreground hover:text-foreground'>
              <Link href={project.link} target='_blank' rel='noopener noreferrer'>
                View Project
                <ArrowUpRight className='ml-1 h-3.5 w-3.5' />
              </Link>
            </Button>
          ) : (
            <span className='text-xs text-muted-foreground'>Coming soon</span>
          )}
        </div>
      </div>
    </Card>
  );
}
