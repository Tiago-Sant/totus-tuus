import { notFound } from 'next/navigation';
import AveMarisStella from '../../components/oracoes/AveMarisStella';
import VeniCreator from '../../components/oracoes/VeniCreator';
import LadainhaEspiritoSanto from '../../components/oracoes/LadainhaEspiritoSanto';
import LadainhaNossaSenhora from '../../components/oracoes/LadainhaNossaSenhora';
import LadainhaSantissimoNomeJesus from '../../components/oracoes/LadainhaSantissimoNomeJesus';
import LadainhaSagradoCoracao from '../../components/oracoes/LadainhaSagradoCoracao';
import OracaoJesusStoAgostinho from '../../components/oracoes/OracaoJesusStoAgostinho';
import Consagracao from '../../components/oracoes/Consagracao';
import React from 'react';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { Church, Heart } from 'lucide-react';

const ETAPAS: Record<string, { titulo: string; oracoes: React.ReactNode[] }> = {
    'dia-da-consagracao': {
      titulo: 'Dia da Consagração',
      oracoes: [<Consagracao key="consagracao" />],
    },
  'desapego-do-mundo': {
    titulo: 'Desapego do mundo',
    oracoes: [<VeniCreator key="veni" />, <AveMarisStella key="ave" />],
  },
  'conhecimento-de-si': {
    titulo: 'Conhecimento de si',
    oracoes: [<AveMarisStella key="ave" />, <LadainhaEspiritoSanto key="espirito" />, <LadainhaNossaSenhora key="nsra" />],
  },
  'conhecimento-de-maria': {
    titulo: 'Conhecimento de Maria',
    oracoes: [
      <AveMarisStella key="ave" />,
      <LadainhaEspiritoSanto key="espirito" />,
      <div key="terco-titulo" className="flex items-center justify-center gap-2 mt-2 mb-4">
        <Heart className="text-2xl text-indigo-400 dark:text-indigo-200" aria-hidden="true" />
        <span className="text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-slate-100 font-serif tracking-tight">Rezar o Santo Terço Mariano</span>
      </div>
    ],
  },
  'conhecimento-de-jesus': {
    titulo: 'Conhecimento de Jesus',
    oracoes: [
      <AveMarisStella key="ave" />,
      <LadainhaEspiritoSanto key="espirito" />,
      <LadainhaSantissimoNomeJesus key="nomejesus" />, 
      <LadainhaSagradoCoracao key="coracao" />,
      <OracaoJesusStoAgostinho key="agostinho" />
    ],
  },
};

interface EtapaPageProps {
  params: { etapaId: string };
}

export default async function EtapaPage({ params }: EtapaPageProps) {
  const { etapaId } = await params;
  const etapa = ETAPAS[etapaId];
  if (!etapa) return notFound();
  return (
    <main className="max-w-2xl mx-auto py-8 px-4 md:px-0">
      <div className="mb-6 flex items-center">
        <div className="fixed top-4 left-4 z-40">
          <Link href="/">
            <Button variant="outline" className="gap-2 shadow-lg">
              <Church className="w-4 h-4" />
              <span className='hidden md:block'>Voltar para início</span>
            </Button>
          </Link>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-center mb-6 text-indigo-700 dark:text-indigo-400">{etapa.titulo}</h1>
      <div className="space-y-8">
        {etapa.oracoes}
      </div>
    </main>
  );
}
