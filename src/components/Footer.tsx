
import { SocialIcons } from '@/components/SocialIcons';
import { HeartIcon } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-secondary/80 dark:bg-secondary/20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <a href="#home" className="font-bold text-2xl text-royal-700 dark:text-royal-400 mb-4">
            Yashash<span className="text-royal-500">.dev</span>
          </a>
          
          <SocialIcons className="mb-6" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1 mb-2">
              Made with <HeartIcon className="h-4 w-4 text-red-500 animate-pulse" /> by Yashash Mathur
            </p>
            <p>&copy; {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
