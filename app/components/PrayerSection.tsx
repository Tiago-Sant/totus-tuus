import React from "react";
import { cn } from "../../lib/utils";

interface PrayerSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const PrayerSection: React.FC<PrayerSectionProps> = ({ title, icon, children, className }) => (
  <section className={cn("w-full max-w-2xl mx-auto mb-0 flex flex-col items-center pt-6 md:pt-8", className)}>
    <div className="flex items-center gap-2 mb-4">
      {icon && <span className="text-2xl text-indigo-400 dark:text-indigo-200">{icon}</span>}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-slate-100 font-serif tracking-tight">{title}</h2>
    </div>
    <div className="w-full">
      {children}
    </div>
    <div className="my-8 border-t border-slate-200 dark:border-slate-700 w-1/2 opacity-40" />
  </section>
);
