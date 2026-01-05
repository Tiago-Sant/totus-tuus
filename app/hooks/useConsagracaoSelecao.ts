import { useState, useMemo } from 'react';
import dayjs from 'dayjs';
import { gerarCronograma, datasMarianas, ModoContagem } from '../utils/calendarioConsagracao';
import { setConsagracaoCookie } from '../utils/setConsagracaoCookie';


interface UseConsagracaoSelecaoProps {
  initialDataFinal: string;
  initialModo: string;
  initialDataLivre?: string;
}

export function useConsagracaoSelecao({ initialDataFinal, initialModo, initialDataLivre }: UseConsagracaoSelecaoProps) {
  const [dataFinal, setDataFinalState] = useState(initialDataFinal || datasMarianas[0].data);
  const [modo, setModoState] = useState<ModoContagem>((initialModo as ModoContagem) || '33');
  const [dataLivre, setDataLivreState] = useState<Date | undefined>(
    initialDataLivre ? new Date(initialDataLivre) : undefined
  );
  const isDataLivre = dataFinal === 'livre';

  // Sempre que mudar, atualize o cookie via API
  const setDataFinal = (novaDataFinal: string) => {
    setDataFinalState(novaDataFinal);
    setConsagracaoCookie({ dataFinal: novaDataFinal, modo, dataLivre: dataLivre?.toISOString() });
  };
  const setModo = (novoModo: ModoContagem) => {
    setModoState(novoModo);
    setConsagracaoCookie({ dataFinal, modo: novoModo, dataLivre: dataLivre?.toISOString() });
  };
  const setDataLivre = (novaDataLivre: Date | undefined) => {
    setDataLivreState(novaDataLivre);
    setConsagracaoCookie({ dataFinal, modo, dataLivre: novaDataLivre?.toISOString() });
  };

  const dataConsagracao = useMemo(() => {
    if (isDataLivre && dataLivre instanceof Date && !isNaN(dataLivre.getTime())) {
      return dataLivre;
    } else {
      // Garante que dataFinal seja interpretado corretamente como data local
      return dayjs(dataFinal).toDate();
    }
  }, [dataFinal, dataLivre, isDataLivre]);

  const cronograma = useMemo(() => gerarCronograma(dataConsagracao, modo), [dataConsagracao, modo]);

  return {
    dataFinal,
    setDataFinal,
    modo,
    setModo,
    dataLivre,
    setDataLivre,
    isDataLivre,
    dataConsagracao,
    cronograma,
  };
}
