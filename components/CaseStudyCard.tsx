import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  company: string;
  metrics: Array<{ label: string; value: string }>;
  description: string;
  href: string;
  tags?: string[];
  className?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  company,
  metrics,
  description,
  href,
  tags = [],
  className = '',
}) => {
  return (
    <Link href={href} aria-label={`Read case study for ${company}`}>
      <div
        className={`
          p-6 lg:p-8
          bg-white rounded-xl
          border border-neutral-200
          hover:border-brand-300 hover:shadow-lg
          transition-smooth
          cursor-pointer
          h-full
          flex flex-col
          ${className}
        `}
      >
        {/* Header */}
        <div className="mb-6">
          <p className="text-sm font-medium text-brand-600 mb-2">{company}</p>
          <h3 className="text-xl font-bold text-neutral-900 mb-2">
            {title}
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6 py-6 border-t border-b border-neutral-200">
          {metrics.map((metric, i) => (
            <div key={i}>
              <p className="text-sm font-medium text-brand-600">
                {metric.value}
              </p>
              <p className="text-xs text-neutral-600">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Tags and CTA */}
        <div className="flex justify-between items-end mt-auto">
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-brand-50 text-brand-700 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <ArrowRight size={20} className="text-brand-600" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
};
