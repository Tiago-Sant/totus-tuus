import dayjs from 'dayjs';
import { proximaDataImaculadoCoracaoDeMaria } from './imaculadoCoracaoMaria';

// Funções utilitárias para cálculo do cronograma de consagração

export type ModoContagem = '30' | '33';

export interface Etapa {
  nome: string;
  dias: number;
  oracoes: string[];
}

export interface CronogramaEtapa {
  nome: string;
  dataInicio: Date;
  dataFim: Date;
  oracoes: string[];
}

const etapasBase: Record<ModoContagem, Etapa[]> = {
  '33': [
    {
      nome: 'Desapego do mundo',
      dias: 12,
      oracoes: ['AveMarisStella', 'VeniCreator'],
    },
    {
      nome: 'Conhecimento de si',
      dias: 7,
      oracoes: ['LadainhaEspiritoSanto', 'AveMarisStella', 'LadainhaNossaSenhora'],
    },
    {
      nome: 'Conhecimento de Maria',
      dias: 7,
      oracoes: ['LadainhaEspiritoSanto', 'AveMarisStella', 'SantoTercoMariano'],
    },
    {
      nome: 'Conhecimento de Jesus',
      dias: 7,
      oracoes: ['AveMarisStella', 'LadainhaEspiritoSanto', 'LadainhaNomeJesus', 'LadainhaSagradoCoracao', 'OracaoJesusStoAgostinho'],
    },
  ],
  '30': [
    {
      nome: 'Desapego do mundo',
      dias: 12,
      oracoes: ['AveMarisStella', 'VeniCreator'],
    },
    {
      nome: 'Conhecimento de si',
      dias: 6,
      oracoes: ['LadainhaEspiritoSanto', 'AveMarisStella', 'LadainhaNossaSenhora'],
    },
    {
      nome: 'Conhecimento de Maria',
      dias: 6,
      oracoes: ['LadainhaEspiritoSanto', 'AveMarisStella', 'SantoTercoMariano'],
    },
    {
      nome: 'Conhecimento de Jesus',
      dias: 6,
      oracoes: ['AveMarisStella', 'LadainhaEspiritoSanto', 'LadainhaNomeJesus', 'LadainhaSagradoCoracao', 'OracaoJesusStoAgostinho'],
    },
  ],
};

export function gerarCronograma(dataConsagracao: Date, modo: ModoContagem): CronogramaEtapa[] {
  const etapas = etapasBase[modo];
  const diasPreparacao = etapas.reduce((acc, etapa) => acc + etapa.dias, 0);
  // O início da preparação é diasPreparacao dias antes do dia da consagração
  // Exemplo: consagração 08/12, preparação começa 07/12 - 33 = 05/11 (para 33 dias)
  const dataFinalDayjs = dayjs(dataConsagracao).subtract(1, 'day');
  // O início da preparação é dataConsagracao - diasPreparacao + 1
  const dataInicioPreparacao = dataFinalDayjs.subtract(diasPreparacao, 'day').add(1, 'day');

  let dataCursor = dataInicioPreparacao;
  const cronograma = etapas.map((etapa) => {
    const dataInicio = dataCursor;
    const dataFim = dataCursor.add(etapa.dias - 1, 'day');
    dataCursor = dataFim.add(1, 'day');
    return {
      nome: etapa.nome,
      dataInicio: dataInicio.toDate(),
      dataFim: dataFim.toDate(),
      oracoes: etapa.oracoes,
    };
  });

  // Adiciona o card do dia da consagração
  cronograma.push({
    nome: 'Dia da Consagração',
    dataInicio: dayjs(dataConsagracao).toDate(),
    dataFim: dayjs(dataConsagracao).toDate(),
    oracoes: ['Consagracao'],
  });

  return cronograma;
}

export const datasMarianas = [
  { nome: 'Solenidade da Imaculada Conceição', data: '2026-12-08' },
  { nome: 'Nossa Senhora Aparecida', data: '2026-10-12' },
  { nome: 'Imaculado Coração de Maria', data: proximaDataImaculadoCoracaoDeMaria() },
  { nome: 'Nossa Senhora de Fátima', data: '2026-05-13' },
  { nome: 'Nossa Senhora de Guadalupe', data: '2026-12-12' },
  { nome: 'Nossa Senhora do Carmo', data: '2026-07-16' },
  { nome: 'Nossa Senhora de Lourdes', data: '2026-02-11' },
  { nome: 'Nossa Senhora das Graças', data: '2026-11-27' },
  { nome: 'Nossa Senhora do Rosário', data: '2026-10-07' },
  { nome: 'Nossa Senhora das Dores', data: '2026-09-15' },
  { nome: 'Nossa Senhora Rainha', data: '2026-08-22' },
  { nome: 'Solenidade da Anunciação', data: '2026-03-25' },
  { nome: 'Santíssimo Nome de Maria', data: '2026-09-12' },
  { nome: 'Natividade de Maria', data: '2026-09-08' },
  { nome: 'Assunção de Maria', data: '2026-08-15' },
  { nome: 'Nossa Senhora do Perpétuo Socorro', data: '2026-06-27' },
];
