
import { getConsagracaoFromCookie } from './utils/getConsagracaoFromCookie';
import HomeConsagracao from './HomeConsagracao';

export default async function Home() {
  const consagracaoCookie = await getConsagracaoFromCookie();
  return <HomeConsagracao {...consagracaoCookie} />;
}
