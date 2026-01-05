import React from 'react';
import EtapaCard from './EtapaCard';
import { AvisoPreparatorio } from './AvisoPreparatorio';
import { useCronogramaStatus } from '../hooks/useCronogramaStatus';
import { useEtapaCardHighlight } from '../hooks/useEtapaCardHighlight';
import dayjs from 'dayjs';

export interface CronogramaEtapa {
  nome: string;
  dataInicio: Date | string;
  dataFim: Date | string;
  oracoes: unknown[];
}

interface CronogramaProps {
  cronograma: CronogramaEtapa[];
  dataConsagracao: Date;
}
export const CronogramaCards: React.FC<CronogramaProps> = ({ cronograma, dataConsagracao }) => {
  const { hoje, getTextoFaltamDias, inicioProximo, dataFinalValida, mostrarAvisoPreparatorio, cronogramaOrdenado } = useCronogramaStatus(cronograma, dataConsagracao);
  const getEtapaCardHighlight = useEtapaCardHighlight(hoje, dataFinalValida);

  const formatarData = (d: Date | string | undefined) =>
    d ? dayjs(d).format('DD/MM/YYYY') : '';

  return (
    <>
      {mostrarAvisoPreparatorio && (
        <AvisoPreparatorio getTextoFaltamDias={getTextoFaltamDias} dataInicio={inicioProximo} formatarData={formatarData} />
      )}
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
