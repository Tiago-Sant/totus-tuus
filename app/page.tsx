'use client';

import { useConsagracaoSelecao } from './hooks/useConsagracaoSelecao';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween);
import { CronogramaCards } from './components/CronogramaCards';
import { Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ConsagracaoInputs } from './components/ConsagracaoInputs';

function formatarData(d: Date | string | undefined) {
  if (!d) return '';
  const dateObj = typeof d === 'string' ? dayjs(d) : dayjs(d);
  if (!dateObj.isValid()) return '';
  return dateObj.format('DD/MM/YYYY');
}

export default function Home() {
    const {
    dataFinal,
    setDataFinal,
    modo,
    setModo,
    dataLivre,
    setDataLivre,
    isDataLivre,
    dataConsagracao,
    cronograma,
  } = useConsagracaoSelecao();
  

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-slate-50 dark:bg-slate-900 py-8 px-2">
      <main className="w-full max-w-2xl flex flex-col items-center">
        <div className="mb-8 w-full flex flex-col items-center">
          <h1 className="flex items-center justify-center gap-2 text-xl md:text-3xl font-bold text-center tracking-tight text-indigo-700 dark:text-indigo-400">
            <Heart className="w-7 h-7 text-pink-500 dark:text-pink-400" aria-label="Coração" />
            Consagração a Jesus por Maria
          </h1>
          <span className="block text-center text-xs mt-1 text-slate-500 dark:text-slate-400 font-medium">
            Segundo o método de São Luís Maria Grignion de Montfort
          </span>
        </div>
        <Card className="mb-8 w-full bg-slate-100/80 dark:bg-slate-800/80 border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-slate-900 dark:text-slate-100">Escolha a data da consagração:</CardTitle>
          </CardHeader>
          <CardContent>
            <ConsagracaoInputs
              dataFinal={dataFinal}
              setDataFinal={setDataFinal}
              isDataLivre={isDataLivre}
              dataLivre={dataLivre}
              setDataLivre={setDataLivre}
              modo={modo}
              setModo={setModo}
              formatarData={formatarData}
            />
          </CardContent>
        </Card>
        <div className="flex flex-wrap justify-center gap-8 w-full">
          <CronogramaCards cronograma={cronograma} dataConsagracao={dataConsagracao} formatarData={formatarData} />
        </div>
      </main>
    </div>
  );
}
