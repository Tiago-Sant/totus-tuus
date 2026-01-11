"use client";

import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);
import { CronogramaCards } from './components/CronogramaCards';
import { Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ConsagracaoInputs } from './components/ConsagracaoInputs';
import Link from 'next/link';

export default function HomeConsagracao() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-slate-50 dark:bg-slate-900 py-8 px-2">
      <main className="w-full max-w-2xl flex flex-col items-center">
        <div className="mb-8 w-full flex flex-col items-center">
          <h1 className="flex items-center justify-center gap-2 text-xl md:text-3xl font-bold text-center tracking-tight text-indigo-700 dark:text-indigo-400">
            <Heart className="w-7 h-7 text-pink-500 dark:text-pink-400" aria-label="Coração" />
            Consagração a Jesus por Maria
          </h1>
          <span className="block text-center text-xs mt-1 text-slate-500 dark:text-slate-400 font-medium">
            Segundo o método de São Luís Maria Grignion de Montfort
          </span>
        </div>
        <div className="w-full flex justify-center mb-3">
          <Link
            href="/o-que-e-consagracao"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-blue-700 dark:text-blue-300 font-semibold bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 dark:hover:bg-blue-900 shadow-sm transition-colors underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Saiba o que é a Consagração"
          >
            <span className="flex items-center gap-2">
              <span>Saiba mais sobre a consagração</span>
              <svg className="w-5 h-5 text-blue-500 dark:text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </Link>
        </div>
        <Card className="mb-8 w-full bg-slate-100/80 dark:bg-slate-800/80 border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-slate-900 dark:text-slate-100">Escolha a data da consagração:</CardTitle>
          </CardHeader>
          <CardContent>
            <ConsagracaoInputs />
          </CardContent>
        </Card>
        <div className="flex flex-wrap justify-center gap-8 w-full">
          <CronogramaCards />
        </div>
      </main>
    </div>
  );
}