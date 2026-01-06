import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle } from '../../components/ui/card';
import { Earth, Heart, Flame, Rose, Star, ArrowRightCircle } from "lucide-react";



interface EtapaCardProps {
  etapa: string;
  dataInicio: string;
  dataFim: string;
  etapaId: string;
  highlight?: boolean;
}

const etapaIconMap: Record<string, React.ReactNode> = {
  "Conhecimento de si": <Flame className="w-6 h-6 text-indigo-500 dark:text-indigo-300" />,
  "Conhecimento de Maria": <Rose className="w-6 h-6 text-indigo-500 dark:text-indigo-300" />,
  "Conhecimento de Jesus": <Heart className="w-6 h-6 text-indigo-500 dark:text-indigo-300" />,
  "Desapego do mundo": <Earth className="w-6 h-6 text-indigo-500 dark:text-indigo-300" />,
  "Consagração": <Rose className="w-6 h-6 text-indigo-500 dark:text-indigo-300" />,
  "Dia da Consagração": <Star className="w-6 h-6 text-amber-500 dark:text-amber-300" />,
};

const EtapaCard: React.FC<EtapaCardProps> = ({ etapa, dataInicio, dataFim, etapaId, highlight }) => (
  <Link href={`/etapa/${etapaId}`} className="block group w-full">
    <Card
      className={
        `w-full h-full border-2 flex flex-col justify-center items-center py-6 px-4 transition shadow-lg
        ${highlight ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/30 shadow-amber-200 dark:shadow-amber-900' : 'bg-slate-100/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700'}
        hover:shadow-xl hover:border-indigo-400 dark:hover:border-indigo-400 cursor-pointer`
      }
    >
      <CardHeader className="pb-2 w-full p-0 flex flex-col items-center relative">
        {highlight && (
          <span className="absolute -top-4 right-2 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-pulse z-10">
            Período atual
          </span>
        )}
        <div className="flex items-center gap-2 mb-1">
          {etapaIconMap[etapa]}
          <CardTitle className={`text-xl text-center font-bold group-hover:underline w-full break-words ${highlight ? 'text-amber-700 dark:text-amber-300' : 'text-indigo-700 dark:text-indigo-400'}`}>{etapa}</CardTitle>
        </div>
        <div className={`text-center text-sm mt-1 font-medium tracking-wide w-full ${highlight ? 'text-amber-700 dark:text-amber-200' : 'text-slate-700 dark:text-slate-300'}`}>
          {etapaId == 'dia-da-consagra-o' ? dataFim   : `${dataInicio} – ${dataFim}`}
        </div>
        <div className="flex items-center justify-center w-full">
          <span className="text-indigo-600 dark:text-indigo-300 font-medium underline underline-offset-2 flex items-center gap-1 group-hover:text-indigo-800 group-hover:dark:text-indigo-100 transition-colors">
            Ver orações da etapa
            <ArrowRightCircle className="w-5 h-5" aria-hidden="true" />
          </span>
        </div>
      </CardHeader>
    </Card>
  </Link>
);

export default EtapaCard;
