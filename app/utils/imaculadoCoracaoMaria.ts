import dayjs from 'dayjs';
import { calcularDataPascoa } from './pascoa';

// Retorna a próxima data do Imaculado Coração de Maria a partir de uma data base
export function proximaDataImaculadoCoracaoDeMaria(dataBase: dayjs.Dayjs = dayjs()): string {
  const anoAtual = dataBase.year();
  const dataAtualAno = dayjs(calcularDataImaculadoCoracaoDeMaria(anoAtual));
  if (dataAtualAno.isAfter(dataBase, 'day')) {
    return dataAtualAno.format('YYYY-MM-DD');
  } else {
    return dayjs(calcularDataImaculadoCoracaoDeMaria(anoAtual + 1)).format('YYYY-MM-DD');
  }
}

// Calcula a data da festa do Imaculado Coração de Maria para o ano informado
export function calcularDataImaculadoCoracaoDeMaria(anoReferencia: number): string {
  const dataPascoa: dayjs.Dayjs = calcularDataPascoa(anoReferencia);
  const dataPentecostes: dayjs.Dayjs = dataPascoa.add(49, 'day'); // 50º dia após Páscoa
  const segundoDomingoAposPentecostes: dayjs.Dayjs = dataPentecostes.add(14, 'day'); // 2 domingos após Pentecostes
  // Sagrado Coração de Jesus: sexta-feira após o 2º domingo após Pentecostes
  const diaSemanaSegundoDomingo: number = segundoDomingoAposPentecostes.day();
  const diasAteSextaFeira: number = (5 - diaSemanaSegundoDomingo + 7) % 7;
  const dataSagradoCoracaoDeJesus: dayjs.Dayjs = segundoDomingoAposPentecostes.add(diasAteSextaFeira, 'day');
  // Imaculado Coração de Maria: sábado seguinte ao Sagrado Coração de Jesus
  const dataImaculadoCoracaoDeMaria: dayjs.Dayjs = dataSagradoCoracaoDeJesus.add(1, 'day');
  return dataImaculadoCoracaoDeMaria.format('YYYY-MM-DD');
}
