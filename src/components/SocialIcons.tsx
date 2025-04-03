
import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

export function SocialIcons({ className, iconSize = 20 }: SocialIconsProps) {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      hoverClass: 'hover:text-royal-600 dark:hover:text-royal-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      hoverClass: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:yashashmathur2005@gmail.com',
      hoverClass: 'hover:text-red-500 dark:hover:text-red-400'
    }
  ];

  return (
    <div className={cn('flex items-center gap-5', className)}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn('transition-all duration-300', link.hoverClass)}
          aria-label={link.name}
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}
