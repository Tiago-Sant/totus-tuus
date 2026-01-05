import React from 'react';
import { CalendarDays } from 'lucide-react';

import { useFaltamDias } from '../hooks/useFaltamDias';


interface AvisoPreparatorioProps {
  getTextoFaltamDias: () => string;
  dataInicio: Date | string | null | undefined;
  formatarData: (d: Date | string | undefined) => string;
}

export const AvisoPreparatorio: React.FC<AvisoPreparatorioProps> = ({ getTextoFaltamDias, dataInicio, formatarData }) => {
  const faltamDias = useFaltamDias(getTextoFaltamDias);
  if (!faltamDias) return null;
  return (
    <div className="w-full flex justify-center">
      <div className="bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-700 rounded-lg px-6 py-4 text-center text-indigo-900 dark:text-indigo-200 shadow flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          <CalendarDays className="w-5 h-5 text-indigo-700 dark:text-indigo-300" />
          <b className="text-indigo-700 dark:text-indigo-200">Preparação ainda não começou.</b>
        </div>
        Faltam {faltamDias} para iniciar a preparação.<br />
        <span className="text-xs">Início previsto: <b>{formatarData(dataInicio || undefined)}</b></span>
      </div>
    </div>
  );
};

