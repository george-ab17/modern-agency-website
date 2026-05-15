import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  rating?: number;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  company,
  rating = 5,
  className = '',
}) => {
  return (
    <div
      className={`
        p-6 lg:p-8
        bg-white rounded-xl
        border border-neutral-200
        hover:border-brand-300 hover:shadow-md
        transition-smooth
        ${className}
      `}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-neutral-700 mb-6 leading-relaxed italic">
        "{quote}"
      </p>

      {/* Author */}
      <div>
        <p className="font-semibold text-neutral-900">{author}</p>
        <p className="text-sm text-neutral-600">{company}</p>
      </div>
    </div>
  );
};
