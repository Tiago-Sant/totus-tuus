import dayjs from 'dayjs';

// Calcula a data da Páscoa para um determinado ano (algoritmo de Meeus/Jones/Butcher)
export function calcularDataPascoa(anoLiturgico: number): dayjs.Dayjs {
  const cicloMetonico = anoLiturgico % 19;
  const seculo = Math.floor(anoLiturgico / 100);
  const anoSeculo = anoLiturgico % 100;
  const seculoDiv4 = Math.floor(seculo / 4);
  const seculoMod4 = seculo % 4;
  const seculoMais8Div25 = Math.floor((seculo + 8) / 25);
  const seculoMenosFmais1Div3 = Math.floor((seculo - seculoMais8Div25 + 1) / 3);
  const epacta = (19 * cicloMetonico + seculo - seculoDiv4 - seculoMenosFmais1Div3 + 15) % 30;
  const anoSeculoDiv4 = Math.floor(anoSeculo / 4);
  const anoSeculoMod4 = anoSeculo % 4;
  const correcao = (32 + 2 * seculoMod4 + 2 * anoSeculoDiv4 - epacta - anoSeculoMod4) % 7;
  const ajuste = Math.floor((cicloMetonico + 11 * epacta + 22 * correcao) / 451);
  const mesPascoa = Math.floor((epacta + correcao - 7 * ajuste + 114) / 31); // 3=março, 4=abril
  const diaPascoa = ((epacta + correcao - 7 * ajuste + 114) % 31) + 1;
  return dayjs(`${anoLiturgico}-${mesPascoa.toString().padStart(2, '0')}-${diaPascoa.toString().padStart(2, '0')}`);
}
