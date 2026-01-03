import { useCallback } from 'react';
import dayjs from 'dayjs';

export function useEtapaCardHighlight(hoje: Date, dataFinalValida: boolean) {
  return useCallback((etapaNome: string, etapaDataInicio: Date | string, etapaDataFim: Date | string) => {
    let etapaId = etapaNome.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    if (etapaNome === 'Dia da Consagração') etapaId = 'dia-da-consagracao';
    const inicio = dayjs(etapaDataInicio).startOf('day');
    const fim = dayjs(etapaDataFim).startOf('day');
    let highlight = false;
    if (dataFinalValida) {
      highlight = dayjs(hoje).isAfter(inicio.subtract(1, 'day')) && dayjs(hoje).isBefore(fim.add(1, 'day'));
      if (etapaNome === 'Dia da Consagração') {
        highlight = dayjs(hoje).isSame(inicio, 'day');
      }
    }
    return { etapaId, highlight };
  }, [hoje, dataFinalValida]);
}
