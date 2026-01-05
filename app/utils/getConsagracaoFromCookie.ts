'use server';

import { cookies } from 'next/headers';
import { datasMarianas } from './calendarioConsagracao';

export async function getConsagracaoFromCookie() {
  const cookieStore = await cookies();
  return {
    dataFinal: cookieStore.get('consagracao:dataFinal')?.value || datasMarianas[0].data,
    modo: cookieStore.get('consagracao:modo')?.value || '33',
    dataLivre: cookieStore.get('consagracao:dataLivre')?.value || undefined,
  };
}
