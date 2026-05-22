import React from 'react';

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const paddingMap: Record<string, string> = {
  xs: 'py-8 px-4 sm:px-6 lg:px-8',
  sm: 'py-12 px-4 sm:px-6 lg:px-8',
  md: 'py-16 px-4 sm:px-6 lg:px-8',
  lg: 'py-20 px-4 sm:px-6 lg:px-8',
  xl: 'py-24 px-4 sm:px-6 lg:px-8',
  '2xl': 'py-32 px-4 sm:px-6 lg:px-8',
};

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = '',
  padding = 'lg',
  ...props
}) => {
  return (
    <section className={`${paddingMap[padding]} ${className}`} {...props}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};
