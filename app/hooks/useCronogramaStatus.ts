import { useMemo } from 'react';
import dayjs from 'dayjs';
import { CronogramaEtapa } from '../components/CronogramaCards';

export function useCronogramaStatus(cronograma: CronogramaEtapa[], dataConsagracao: Date) {
  return useMemo(() => {
    const hoje = new Date();
    hoje.setHours(0,0,0,0);
    let emPeriodo = false;
    let inicioProximo: Date | null = null;
    const dataFinalValida = dayjs(dataConsagracao).isValid();
    cronograma.forEach(etapa => {
      const inicio = new Date(etapa.dataInicio); inicio.setHours(0,0,0,0);
      const fim = new Date(etapa.dataFim); fim.setHours(0,0,0,0);
      if (dataFinalValida && hoje >= inicio && hoje <= fim) emPeriodo = true;
      if (dataFinalValida && !inicioProximo && hoje < inicio) inicioProximo = inicio;
    });
    const mostrarAvisoPreparatorio = !emPeriodo && inicioProximo && dataFinalValida;
    function getTextoFaltamDias() {
      if (!inicioProximo) return '';
      const diffMs = inicioProximo.getTime() - hoje.getTime();
      const diffDias = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      const diffMeses = Math.floor(diffDias / 30);
      return `${diffMeses > 0 ? `${diffMeses} ${diffMeses > 1 ? 'meses' : 'mês'} e ` : ''}${diffDias % 30} dia${diffDias % 30 !== 1 ? 's' : ''}`;
    }
    return { hoje, emPeriodo, inicioProximo, dataFinalValida, mostrarAvisoPreparatorio, getTextoFaltamDias };
  }, [cronograma, dataConsagracao]);
}
