import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { dataFinal, modo, dataLivre } = await req.json();

  const res = NextResponse.json({ ok: true });

  // Cookies HTTP-only, expiram em 1 ano
  res.cookies.set('consagracao:dataFinal', dataFinal, { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 365 });
  res.cookies.set('consagracao:modo', modo, { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 365 });
  if (dataLivre) {
    res.cookies.set('consagracao:dataLivre', dataLivre, { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 365 });
  } else {
    res.cookies.delete('consagracao:dataLivre');
  }

  return res;
}
