import React from 'react';

interface RespostaProps {
  children: React.ReactNode;
}

export const Resposta: React.FC<RespostaProps> = ({ children }) => (
  <span className="font-semibold text-indigo-700 dark:text-indigo-300">{children}</span>
);
