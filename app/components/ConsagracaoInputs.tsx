
import React from 'react';
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from '../../components/ui/button';
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../../components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../components/ui/popover';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { DatePicker } from './DatePicker';
import { ConsagracaoMetodoInfo } from './ConsagracaoMetodoInfo';
import { datasMarianas, ModoContagem } from '../utils/calendarioConsagracao';
import dayjs from 'dayjs';
import { useConsagracao } from '../context/ConsagracaoContext';

export const ConsagracaoInputs: React.FC = () => {
  const {
    consagracaoDate,
    setConsagracaoDate,
    modo,
    setModo,
    isDataLivre,
    dataLivre,
    setDataLivre
  } = useConsagracao();

  // Preparar as opções para o combobox
  const datasOptions = datasMarianas.map((d) => ({
    value: d.data,
    label: `${d.nome} (${dayjs(d.data).format('DD/MM/YYYY')})`,
  }));
  datasOptions.push({ value: 'livre', label: 'Escolher outra data no calendário...' });

  const [open, setOpen] = React.useState(false);
  const [calendarOpen, setCalendarOpen] = React.useState(false);
  // Flag para saber se foi seleção manual
  const calendarShouldOpenOnSelect = React.useRef(false);

  React.useEffect(() => {
    if (isDataLivre && calendarShouldOpenOnSelect.current) {
      setCalendarOpen(true);
      calendarShouldOpenOnSelect.current = false;
    }
  }, [isDataLivre]);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full mb-4 flex items-center justify-between gap-2"
            style={{ minHeight: 40 }}
          >
            <span className="truncate block text-left flex-1">
              {consagracaoDate
                ? datasOptions.find((opt) => opt.value === consagracaoDate)?.label
                : "Selecione a data"}
            </span>
            <ChevronsUpDown className="opacity-50 shrink-0" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full min-w-50 p-0">
          <Command
            filter={(value, search) => {
              // "livre" (Outra data...) deve sempre aparecer
              if (value === 'livre') return 1;
              const option = datasOptions.find((opt) => opt.value === value);
              if (!option) return 0;
              const normalize = (str: string) => str.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
              return normalize(option.label).includes(normalize(search)) ? 1 : 0;
            }}
          >
            <CommandInput placeholder="Buscar data..." className="h-9" />
            <CommandList>
              <CommandEmpty>Nenhuma data encontrada.</CommandEmpty>
              <CommandGroup>
                {datasOptions.map((opt) => (
                  <CommandItem
                    key={opt.value}
                    value={opt.value}
                    onSelect={(currentValue) => {
                      setConsagracaoDate(currentValue === consagracaoDate ? '' : currentValue);
                      setOpen(false);
                      if (currentValue === 'livre') {
                        calendarShouldOpenOnSelect.current = true;
                      }
                    }}
                  >
                    {opt.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        consagracaoDate === opt.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {isDataLivre && (
        <div className="mb-4 flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-1">Escolha a data desejada:</label>
          <DatePicker date={dataLivre} setDate={setDataLivre} open={calendarOpen} setOpen={setCalendarOpen} />
        </div>
      )}
      <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">Modo de contagem:  <ConsagracaoMetodoInfo /></div>
      <RadioGroup value={modo} onValueChange={(v) => setModo(v as ModoContagem)} className="flex gap-4 mb-2">
        <div
          className={`flex items-center space-x-2 px-2 py-1 rounded transition-colors ${
            modo === '33'
              ? 'bg-blue-100 dark:bg-blue-900/40 border border-blue-400 dark:border-blue-600'
              : ''
          }`}
        >
          <RadioGroupItem value="33" id="modo-33" />
          <label htmlFor="modo-33" className="text-sm cursor-pointer px-2 py-1">33 dias</label>
        </div>
        <div
          className={`flex items-center space-x-2 px-2 py-1 rounded transition-colors ${
            modo === '30'
              ? 'bg-blue-100 dark:bg-blue-900/40 border border-blue-400 dark:border-blue-600'
              : ''
          }`}
        >
          <RadioGroupItem value="30" id="modo-30" />
          <label htmlFor="modo-30" className="text-sm cursor-pointer px-2 py-1">30 dias</label>
        </div>
      </RadioGroup>
    </>
  );
};
