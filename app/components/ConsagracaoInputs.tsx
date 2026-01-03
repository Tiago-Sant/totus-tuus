import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { DatePicker } from './DatePicker';
import { ConsagracaoMetodoInfo } from './ConsagracaoMetodoInfo';
import { datasMarianas, ModoContagem } from '../utils/calendarioConsagracao';

interface ConsagracaoInputsProps {
  dataFinal: string;
  setDataFinal: (v: string) => void;
  isDataLivre: boolean;
  dataLivre: Date | undefined;
  setDataLivre: (d: Date | undefined) => void;
  modo: ModoContagem;
  setModo: (m: ModoContagem) => void;
  formatarData: (d: Date | string | undefined) => string;
}

export const ConsagracaoInputs: React.FC<ConsagracaoInputsProps> = ({
  dataFinal,
  setDataFinal,
  isDataLivre,
  dataLivre,
  setDataLivre,
  modo,
  setModo,
  formatarData,
}) => (
  <>
    <Select value={dataFinal} onValueChange={setDataFinal}>
      <SelectTrigger className="w-full mb-4">
        <SelectValue placeholder="Selecione a data" />
      </SelectTrigger>
      <SelectContent>
        {datasMarianas.map((d) => (
          <SelectItem key={d.data} value={d.data}>
            {d.nome} (Consagração: {formatarData(d.data)})
          </SelectItem>
        ))}
        <SelectItem value="livre">Outra data...</SelectItem>
      </SelectContent>
    </Select>
    {isDataLivre && (
      <div className="mb-4 flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-1">Escolha a data desejada:</label>
        <DatePicker date={dataLivre} setDate={setDataLivre} />
      </div>
    )}
    <div className="mb-2 font-semibold text-slate-900 dark:text-slate-100">Modo de contagem:</div>
    <RadioGroup value={modo} onValueChange={(v) => setModo(v as ModoContagem)} className="flex gap-4 mb-2">
      <div
        className={`flex items-center space-x-2 px-2 py-1 rounded cursor-pointer transition-colors ${
          modo === '33'
            ? 'bg-blue-100 dark:bg-blue-900/40 border border-blue-400 dark:border-blue-600'
            : ''
        }`}
      >
        <RadioGroupItem value="33" id="modo-33" />
        <label htmlFor="modo-33" className="text-sm">33 dias</label>
      </div>
      <div
        className={`flex items-center space-x-2 px-2 py-1 rounded cursor-pointer transition-colors ${
          modo === '30'
            ? 'bg-blue-100 dark:bg-blue-900/40 border border-blue-400 dark:border-blue-600'
            : ''
        }`}
      >
        <RadioGroupItem value="30" id="modo-30" />
        <label htmlFor="modo-30" className="text-sm">30 dias</label>
      </div>
    </RadioGroup>
    <ConsagracaoMetodoInfo />
  </>
);
