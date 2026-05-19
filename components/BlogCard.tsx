import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Newspaper, User } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: number;
  date: string;
  href: string;
  featured?: boolean;
  className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  category,
  author,
  readTime,
  date,
  href,
  featured = false,
  className = '',
}) => {
  return (
    <Link href={href} aria-label={`Read ${title}`}>
      <div
        className={`
          bg-white rounded-xl
          border border-neutral-200
          hover:border-brand-300 hover:shadow-lg
          transition-smooth
          cursor-pointer
          h-full
          flex flex-col
          overflow-hidden
          group
          ${featured ? 'md:col-span-2 md:row-span-2' : ''}
          ${className}
        `}
      >
        <div className="w-full h-48 md:h-64 bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-brand-700/20 group-hover:from-brand-600/20 group-hover:to-brand-700/30 transition-smooth" />
          <div className="text-brand-300 text-center z-10" aria-hidden="true">
            <Newspaper size={56} className="opacity-40" />
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-brand-100 text-brand-700 text-xs font-medium rounded-full">
              {category}
            </span>
          </div>

          <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-3 line-clamp-2 group-hover:text-brand-600 transition-smooth">
            {title}
          </h3>

          <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
            {excerpt}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-200 text-xs text-neutral-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User size={14} aria-hidden="true" />
                {author}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} aria-hidden="true" />
                {readTime} min
              </div>
            </div>
            <ArrowRight
              size={16}
              className="text-brand-600 opacity-0 group-hover:opacity-100 transition-smooth"
              aria-hidden="true"
            />
          </div>

          <p className="text-xs text-neutral-400 mt-2">{date}</p>
        </div>
      </div>
    </Link>
  );
};
