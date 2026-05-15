import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  variant?: 'dark' | 'light';
  className?: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  title,
  description,
  primaryButtonText = 'Get Started',
  secondaryButtonText = 'Learn More',
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
  variant = 'dark',
  className = '',
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={`
        py-16 lg:py-20 px-4 sm:px-6 lg:px-8
        rounded-2xl
        ${
          isDark
            ? 'bg-gradient-to-r from-brand-600 to-brand-700'
            : 'bg-gradient-to-r from-neutral-100 to-neutral-50'
        }
        ${className}
      `}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className={`
            text-3xl md:text-4xl lg:text-5xl
            font-bold mb-4
            ${isDark ? 'text-white' : 'text-neutral-900'}
          `}
        >
          {title}
        </h2>

        <p
          className={`
            text-lg mb-8
            ${isDark ? 'text-blue-100' : 'text-neutral-600'}
          `}
        >
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant={isDark ? 'secondary' : 'primary'}
            size="lg"
            onClick={onPrimaryClick}
            className="min-w-fit"
          >
            {primaryButtonText}
            <ArrowRight size={18} />
          </Button>
          {secondaryButtonText && (
            <Button
              variant={isDark ? 'outline' : 'ghost'}
              size="lg"
              onClick={onSecondaryClick}
              className={`min-w-fit ${
                isDark ? 'border-blue-200 text-blue-100 hover:bg-white/10' : ''
              }`}
            >
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
