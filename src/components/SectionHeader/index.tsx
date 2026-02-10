import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <div className="mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
      <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
      {title}
    </h2>
    {subtitle && <p className="text-neutral-400 max-w-2xl ml-11">{subtitle}</p>}
  </div>
);

export default SectionHeader;
