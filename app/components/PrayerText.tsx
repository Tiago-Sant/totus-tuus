import React from "react";

interface PrayerTextProps {
  children: React.ReactNode;
}

export const PrayerText: React.FC<PrayerTextProps> = ({ children }) => (
  <div className="leading-6 text-lg md:text-xl pt-2 text-slate-800 dark:text-slate-100 font-serif space-y-4">
    {children}
  </div>
);
