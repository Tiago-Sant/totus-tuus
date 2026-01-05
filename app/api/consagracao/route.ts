import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';


export async function GET() {
  const cookieStore = await cookies();
  const dataFinal = cookieStore.get('consagracao:dataFinal')?.value || null;
  const modo = cookieStore.get('consagracao:modo')?.value || null;
  const dataLivre = cookieStore.get('consagracao:dataLivre')?.value || null;
  return NextResponse.json({ dataFinal, modo, dataLivre });
}


export async function POST(req: Request) {
  const { dataFinal, modo, dataLivre } = await req.json();
  const res = NextResponse.json({ ok: true });
  if (dataFinal) {
    res.cookies.set('consagracao:dataFinal', dataFinal, { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 365 });
  }
  if (modo) {
    res.cookies.set('consagracao:modo', modo, { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 365 });
  }
  if (dataLivre) {
    res.cookies.set('consagracao:dataLivre', dataLivre, { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 365 });
  } else {
    res.cookies.delete('consagracao:dataLivre');
  }
  return res;
}
