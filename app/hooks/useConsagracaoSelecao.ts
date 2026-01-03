import { useState, useMemo, useEffect } from 'react';
import dayjs from 'dayjs';
import { gerarCronograma, datasMarianas, ModoContagem } from '../utils/calendarioConsagracao';

export function useConsagracaoSelecao() {
  // Chaves para localStorage
  const STORAGE_KEY_DATA_FINAL = 'consagracao:dataFinal';
  const STORAGE_KEY_MODO = 'consagracao:modo';
  const STORAGE_KEY_DATA_LIVRE = 'consagracao:dataLivre';

  // Inicialização segura para Next.js/SSR
  const getInitialDataFinal = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_DATA_FINAL);
      return saved || datasMarianas[0].data;
    }
    return datasMarianas[0].data;
  };
  const getInitialModo = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_MODO);
      return (saved as ModoContagem) || '33';
    }
    return '33';
  };
  const getInitialDataLivre = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_DATA_LIVRE);
      if (saved) {
        const d = new Date(saved);
        if (!isNaN(d.getTime())) return d;
      }
    }
    return undefined;
  };

  const [dataFinal, setDataFinal] = useState(getInitialDataFinal);
  const [modo, setModo] = useState<ModoContagem>(getInitialModo);
  const [dataLivre, setDataLivre] = useState<Date | undefined>(getInitialDataLivre);
  const isDataLivre = dataFinal === 'livre';

  const dataConsagracao = useMemo(() => {
    if (isDataLivre && dataLivre instanceof Date && !isNaN(dataLivre.getTime())) {
      return dataLivre;
    } else {
      // Garante que dataFinal seja interpretado corretamente como data local
      return dayjs(dataFinal).toDate();
    }
  }, [dataFinal, dataLivre, isDataLivre]);

  // Persistência local
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (dataFinal) localStorage.setItem(STORAGE_KEY_DATA_FINAL, dataFinal);
  }, [dataFinal]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (modo) localStorage.setItem(STORAGE_KEY_MODO, modo);
  }, [modo]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isDataLivre && dataLivre instanceof Date && !isNaN(dataLivre.getTime())) {
      localStorage.setItem(STORAGE_KEY_DATA_LIVRE, dataLivre.toISOString());
    } else {
      localStorage.removeItem(STORAGE_KEY_DATA_LIVRE);
    }
  }, [dataLivre, isDataLivre]);

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
