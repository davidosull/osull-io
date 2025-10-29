import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Twitter, Github, Linkedin } from 'lucide-react';

export function AboutMeCard() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/davidosull',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/osulldotio/',
    },
  ];

  return (
    <Card className='overflow-hidden'>
      <CardContent className='p-0'>
        <div className='grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-6 p-4 md:p-6'>
          <div className='relative w-full max-w-[400px] sm:max-w-[280px] aspect-[3/4] rounded-lg overflow-hidden bg-muted shrink-0'>
            <Image
              src='/img/profile.webp'
              alt='About me'
              fill
              className='object-cover'
              priority
            />
          </div>

          <div className='flex flex-col justify-between gap-6'>
            <div className='space-y-4'>
              <p className='text-muted-foreground leading-relaxed'>
                I&apos;m David, a freelance WordPress developer based in the UK
                with over 10 years under my belt. Outside of working with
                WordPress I like to explore new and emerging tech to build tools
                that can help me and other developers out.
              </p>
            </div>

            <div className='space-y-4 pt-4 border-t'>
              <div className='flex flex-wrap justify-between align-center gap-4'>
                <div className='flex gap-4'>
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-foreground hover:text-foreground/80 transition-colors'
                        aria-label={social.name}
                      >
                        <Icon className='h-5 w-5' />
                      </Link>
                    );
                  })}
                </div>

                <Button asChild variant='default' className='w-full sm:w-auto'>
                  <Link href='mailto:david@osull.io'>
                    Let&apos;s talk
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
