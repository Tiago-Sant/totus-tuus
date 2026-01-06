
import React, { useMemo } from 'react';
import { BookOpen } from 'lucide-react';
import EtapaCard from './EtapaCard';
import { AvisoPreparatorio } from './AvisoPreparatorio';
import { useCronogramaStatus } from '../hooks/useCronogramaStatus';
import { useEtapaCardHighlight } from '../hooks/useEtapaCardHighlight';
import dayjs from 'dayjs';
import { useConsagracao } from '../context/ConsagracaoContext';
import { gerarCronograma } from '../utils/calendarioConsagracao';

export const CronogramaCards: React.FC = () => {
  const { consagracaoDate, modo, isDataLivre, dataLivre } = useConsagracao();

  // Determina a data de consagração efetiva
  const dataConsagracao: Date = useMemo(() => {
    if (isDataLivre && dataLivre instanceof Date && !isNaN(dataLivre.getTime())) {
      return dataLivre;
    }
    return dayjs(consagracaoDate).toDate();
  }, [consagracaoDate, isDataLivre, dataLivre]);

  // Gera o cronograma conforme modo e data
  const cronograma = useMemo(() => gerarCronograma(dataConsagracao, modo), [dataConsagracao, modo]);

  const { hoje, getTextoFaltamDias, inicioProximo, dataFinalValida, mostrarAvisoPreparatorio, cronogramaOrdenado } = useCronogramaStatus(cronograma, dataConsagracao);
  const getEtapaCardHighlight = useEtapaCardHighlight(hoje, dataFinalValida);

  const formatarData = (d: Date | string | undefined) =>
    d ? dayjs(d).format('DD/MM/YYYY') : '';

  return (
    <>
      {mostrarAvisoPreparatorio && (
        <AvisoPreparatorio getTextoFaltamDias={getTextoFaltamDias} dataInicio={inicioProximo} formatarData={formatarData} />
      )}

      <div className="flex items-center justify-center gap-2 mb-4 mt-2 w-full">
        <BookOpen className="text-blue-600 dark:text-blue-400 w-6 h-6" aria-hidden="true" />
        <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
          Etapas e orações da consagração
        </h2>
      </div>

      {cronogramaOrdenado.map((etapa) => {
        const { etapaId, highlight } = getEtapaCardHighlight(
          etapa.nome,
          etapa.dataInicio,
          etapa.dataFim
        );
        return (
          <div key={etapaId} className="flex-1 min-w-65 max-w-xs flex justify-center">
            <EtapaCard
              etapa={etapa.nome}
              dataInicio={formatarData(etapa.dataInicio)}
              dataFim={formatarData(etapa.dataFim)}
              etapaId={etapaId}
              highlight={highlight}
            />
          </div>
        );
      })}
    </>
  );
};
