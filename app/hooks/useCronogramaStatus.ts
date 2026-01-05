
import { useMemo } from 'react';
import dayjs from 'dayjs';
import { CronogramaEtapa } from '../components/CronogramaCards';

export function useCronogramaStatus(cronograma: CronogramaEtapa[], dataConsagracao: Date) {
  return useMemo(() => {
    const hoje = dayjs().startOf('day');
    let emPeriodo = false;
    let inicioProximo: Date | null = null;
    const dataFinalValida = dayjs(dataConsagracao).isValid();
    let idxEtapaAtual = -1;
    function atualizarStatusCronogramaComEtapa(etapa: CronogramaEtapa, idx: number) {
      const inicio = dayjs(etapa.dataInicio).startOf('day');
      const fim = dayjs(etapa.dataFim).startOf('day');
      if (dataFinalValida && hoje.isAfter(inicio.subtract(1, 'day')) && hoje.isBefore(fim.add(1, 'day'))) {
        emPeriodo = true;
        idxEtapaAtual = idx;
      }
      if (dataFinalValida && !inicioProximo && hoje.isBefore(inicio)) inicioProximo = inicio.toDate();
    }
    cronograma.forEach(atualizarStatusCronogramaComEtapa);
    // Ordena para etapa atual vir primeiro, se estiver em período
    let cronogramaOrdenado = cronograma;
    if (emPeriodo && idxEtapaAtual > 0) {
      cronogramaOrdenado = [cronograma[idxEtapaAtual], ...cronograma.slice(0, idxEtapaAtual), ...cronograma.slice(idxEtapaAtual+1)];
    }
    const mostrarAvisoPreparatorio = !emPeriodo && !!inicioProximo && dataFinalValida;
    function getTextoFaltamDias() {
      if (!inicioProximo) return '';
      const diffDias =  dayjs(inicioProximo).diff(hoje, 'day');
      const diffMeses = Math.floor(diffDias / 30);
      return `${diffMeses > 0 ? `${diffMeses} ${diffMeses > 1 ? 'meses' : 'mês'} e ` : ''}${diffDias % 30} dia${diffDias % 30 !== 1 ? 's' : ''}`;
    }
    return {
      hoje: hoje.toDate(),
      emPeriodo,
      inicioProximo: inicioProximo,
      dataFinalValida,
      mostrarAvisoPreparatorio,
      getTextoFaltamDias,
      cronogramaOrdenado
    };
  }, [cronograma, dataConsagracao]);
}
