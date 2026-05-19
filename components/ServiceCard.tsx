import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  className = '',
}) => {
  return (
    <div
      className={`
        p-6 lg:p-8
        bg-white rounded-xl
        border border-neutral-200
        hover:border-brand-300 hover:shadow-lg
        transition-smooth
        group
        ${className}
      `}
    >
      <div className="mb-4">
        <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center group-hover:bg-brand-200 transition-smooth">
          <Icon size={24} className="text-brand-600" aria-hidden="true" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
        {title}
      </h3>
      <p className="text-neutral-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};
