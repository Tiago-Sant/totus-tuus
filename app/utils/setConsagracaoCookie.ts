export async function setConsagracaoCookie({ dataFinal, modo, dataLivre }: { dataFinal: string, modo: string, dataLivre?: string }) {
  await fetch('/api/consagracao-cookie', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ dataFinal, modo, dataLivre }),
  });
}
