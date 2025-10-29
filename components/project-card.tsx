import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className='flex flex-col'>
      <CardHeader>
        <div className='flex items-start justify-between gap-4'>
          <h3 className='text-xl font-semibold'>{project.title}</h3>
          <Badge variant='secondary'>{project.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className='flex-1 space-y-4'>
        <div className='relative w-full aspect-video rounded-lg overflow-hidden bg-muted'>
          <Image
            src={project.screenshot}
            alt={project.title}
            fill
            className='object-cover'
          />
        </div>
        <p className='text-muted-foreground leading-relaxed'>
          {project.description}
        </p>
      </CardContent>
      <CardFooter>
        {project.link ? (
          <Button variant='default' asChild className='w-full'>
            <Link href={project.link} target='_blank' rel='noopener noreferrer'>
              View Project
              <ExternalLink className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        ) : (
          <Button variant='outline' disabled className='w-full'>
            Coming soon
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
