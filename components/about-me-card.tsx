import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

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
        <div className='grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-6 px-4 md:p-6 justify-items-start'>
          <div className='relative w-full max-w-[200px] sm:max-w-[280px] aspect-[1/1] sm:aspect-[3/4] rounded-lg overflow-hidden bg-muted shrink-0'>
            <Image
              src='/img/profile.webp'
              alt='About me'
              fill
              className='object-cover object-top sm:object-center'
              priority
            />
          </div>

          <div className='flex flex-col justify-between gap-6'>
            <div className='space-y-4'>
              <p className='text-muted-foreground leading-relaxed'>
                Hi, I’m David. I’m a freelance WordPress developer based in the
                UK with 10+ years of hands-on experience. When I’m not building
                themes and plugins for clients, I’m exploring new and emerging
                tech to build practical tools that save time and solve problems.
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                Great work starts with easy collaboration, clear communication,
                and code you can trust. If you’re looking for a reliable
                developer who speaks your language and ships solid results,
                we’ll get along just fine.
              </p>
            </div>

            <div className='space-y-4 pt-4 border-t'>
              <div className='flex flex-wrap justify-between align-center gap-6'>
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
