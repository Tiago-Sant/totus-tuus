"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";


import { ModoContagem, datasMarianas } from '../utils/calendarioConsagracao';

type ConsagracaoContextType = {
  consagracaoDate: string;
  setConsagracaoDate: (date: string) => void;
  modo: ModoContagem;
  setModo: (modo: ModoContagem) => void;
  isDataLivre: boolean;
  dataLivre: Date | undefined;
  setDataLivre: (d: Date | undefined) => void;
};

const ConsagracaoContext = createContext<ConsagracaoContextType | undefined>(undefined);


export function ConsagracaoProvider({ children }: { children: React.ReactNode }) {
  const [consagracaoDate, setConsagracaoDateState] = useState<string>(datasMarianas[0].data);
  const [modo, setModoState] = useState<ModoContagem>('33');
  const [dataLivre, setDataLivreState] = useState<Date | undefined>(undefined);
  const isDataLivre = consagracaoDate === 'livre';

  // Busca inicial do valor do cookie via API
  useEffect(() => {
    fetch("/api/consagracao", { cache: "no-store" })
      .then(res => res.json())
      .then(data => {
        setConsagracaoDateState(data.dataFinal || datasMarianas[0].data);
        setModoState((data.modo as ModoContagem) || '33');
        setDataLivreState(data.dataLivre ? new Date(data.dataLivre) : undefined);
      });
  }, []);

  // Atualiza cookie e state para qualquer campo
  const persist = useCallback((next: { dataFinal?: string; modo?: ModoContagem; dataLivre?: Date | undefined }) => {
    const newDataFinal = next.dataFinal ?? consagracaoDate;
    const newModo = next.modo ?? modo;
    const newDataLivre = next.dataLivre ?? dataLivre;
    fetch("/api/consagracao", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dataFinal: newDataFinal,
        modo: newModo,
        dataLivre: newDataLivre ? newDataLivre.toISOString() : undefined,
      }),
    });
  }, [consagracaoDate, modo, dataLivre]);

  const setConsagracaoDate = useCallback((date: string) => {
    setConsagracaoDateState(date);
    persist({ dataFinal: date });
  }, [persist]);

  const setModo = useCallback((novoModo: ModoContagem) => {
    setModoState(novoModo);
    persist({ modo: novoModo });
  }, [persist]);

  const setDataLivre = useCallback((novaDataLivre: Date | undefined) => {
    setDataLivreState(novaDataLivre);
    persist({ dataLivre: novaDataLivre });
  }, [persist]);

  return (
    <ConsagracaoContext.Provider value={{ consagracaoDate, setConsagracaoDate, modo, setModo, isDataLivre, dataLivre, setDataLivre }}>
      {children}
    </ConsagracaoContext.Provider>
  );
}

export function useConsagracao() {
  const ctx = useContext(ConsagracaoContext);
  if (!ctx) throw new Error("useConsagracao must be used within ConsagracaoProvider");
  return ctx;
}
