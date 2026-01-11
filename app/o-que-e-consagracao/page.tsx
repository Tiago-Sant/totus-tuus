import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Leaf, Link as LinkIcon, Flower, Heart, Feather, Clock, Sparkles, ArrowRight, Church } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OQueEConsagracaoPage() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
        <div className="fixed top-4 left-4 z-40">
          <Link href="/">
            <Button variant="outline" className="gap-2 shadow-lg">
              <Church className="w-4 h-4" />
              <span className='hidden md:block'>Voltar para início</span>
            </Button>
          </Link>
        </div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-2xl text-center flex flex-col items-center gap-1">
            <span className="flex items-center gap-2 justify-center">
              <Flower className="w-6 h-6 text-pink-500 shrink-0" />
              <span className="text-lg sm:text-2xl flex-1">O que é a Consagração a Jesus por Maria?</span>
            </span>
            <span className="text-xs text-slate-500 mt-1">(segundo São Luís Maria Grignion de Montfort)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base text-slate-700 dark:text-slate-200 text-center">
            A consagração é um caminho para quem deseja viver a santidade de forma mais segura, rápida e eficaz, entregando-se totalmente a Jesus pelas mãos de Maria.
          </p>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="mb-6">
        <AccordionItem value="oque">
          <AccordionTrigger className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-blue-500" />O que é a consagração?</AccordionTrigger>
          <AccordionContent>
            A consagração é a entrega total de si mesmo a Jesus Cristo, renovando de maneira perfeita as promessas do Batismo, vivendo tudo com Maria, por Maria e para Maria, a fim de pertencer mais plenamente a Jesus.<br />
            <span className="block mt-2 text-xs text-blue-700 dark:text-blue-300 font-medium">📘 Catecismo da Igreja Católica, 2015</span>
            <span className="block mt-1 italic text-slate-800 dark:text-slate-200">“O caminho da perfeição passa pela cruz. Não há santidade sem renúncia e combate espiritual.”</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="santidade">
          <AccordionTrigger className="flex items-center gap-2"><Leaf className="w-4 h-4 text-green-600" />A consagração é para quem busca a santidade?</AccordionTrigger>
          <AccordionContent>
            Sim. A consagração é especialmente indicada para quem decidiu buscar a santidade, isto é, conformar a própria vontade à vontade de Deus, buscando tudo o que O agrada e evitando tudo o que O desagrada.<br />
            <span className="block mt-2 text-xs text-blue-700 dark:text-blue-300 font-medium">📘 Concílio Vaticano II – Lumen Gentium, 40</span>
            <span className="block mt-1 italic text-slate-800 dark:text-slate-200">“Todos os fiéis são chamados à plenitude da vida cristã e à perfeição da caridade.”</span><br />
            <span className="block mt-2 flex items-center gap-1 text-slate-700 dark:text-slate-200"><ArrowRight className="w-4 h-4 inline" />A consagração é um meio, não um fim em si mesma.</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="diferente">
          <AccordionTrigger className="flex items-center gap-2"><LinkIcon className="w-4 h-4 text-indigo-600" />O que torna esse método diferente?</AccordionTrigger>
          <AccordionContent>
            O método de São Luís é singular porque nele entregamos tudo a Jesus pelas mãos de Maria, inclusive: nossas boas obras, nossos méritos e até os bens interiores, como indulgências e graças futuras. Essa entrega total não é comum em outros atos de consagração.<br />
            <span className="block mt-2 flex items-center gap-1 text-slate-700 dark:text-slate-200"><ArrowRight className="w-4 h-4 inline" />Nada fica reservado para si.</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="porMaria">
          <AccordionTrigger className="flex items-center gap-2"><Flower className="w-4 h-4 text-pink-500" />Por que tudo é entregue pelas mãos de Maria?</AccordionTrigger>
          <AccordionContent>
            Porque Maria é o caminho escolhido por Deus para vir até nós, e também o caminho mais seguro para nós chegarmos até Ele.<br />
            <span className="block mt-2 text-xs text-blue-700 dark:text-blue-300 font-medium">📘 Concílio Vaticano II – Lumen Gentium, 62</span>
            <span className="block mt-1 italic text-slate-800 dark:text-slate-200">“A maternidade de Maria na ordem da graça perdura continuamente.”</span><br />
            <span className="block mt-2 flex items-center gap-1 text-slate-700 dark:text-slate-200"><ArrowRight className="w-4 h-4 inline" />Maria: nos forma, nos protege, nos educa e nos conduz com suavidade a Jesus</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="mariaFaz">
          <AccordionTrigger className="flex items-center gap-2"><Heart className="w-4 h-4 text-red-500" />O que Maria faz com aquilo que oferecemos?</AccordionTrigger>
          <AccordionContent>
            Tudo o que oferecemos pelas mãos de Maria ela purifica, eleva e aperfeiçoa com suas graças, para que seja mais agradável a Deus.<br />
            <span className="block mt-2 text-xs text-blue-700 dark:text-blue-300 font-medium">📘 Nossa Senhora em Fátima</span>
            <span className="block mt-1 italic text-slate-800 dark:text-slate-200">“Meu Imaculado Coração será o teu refúgio e o caminho que te conduzirá a Deus.”</span><br />
            <span className="block mt-2 flex items-center gap-1 text-slate-700 dark:text-slate-200"><ArrowRight className="w-4 h-4 inline" />Mesmo nossas pequenas obras tornam-se mais agradáveis a Deus quando passam por Maria.</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="emocao">
          <AccordionTrigger className="flex items-center gap-2"><Feather className="w-4 h-4 text-sky-500" />A consagração é só um momento de emoção?</AccordionTrigger>
          <AccordionContent>
            Não, embora no ato de consagração possa haver emoção. A consagração não deve ser feita apenas por entusiasmo. Ela pede uma decisão firme de viver para Deus, perseverando mesmo nas quedas.<br />
            <span className="block mt-2 text-xs text-blue-700 dark:text-blue-300 font-medium">📘 Santa Teresa de Jesus</span>
            <span className="block mt-1 italic text-slate-800 dark:text-slate-200">“Determinada determinação de nunca desistir, aconteça o que acontecer.”</span><br />
            <span className="block mt-2 flex items-center gap-1 text-slate-700 dark:text-slate-200"><ArrowRight className="w-4 h-4 inline" />Não exige perfeição, mas fidelidade.</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="dias">
          <AccordionTrigger className="flex items-center gap-2"><Clock className="w-4 h-4 text-yellow-600" />E os 30 ou 33 dias de preparação?</AccordionTrigger>
          <AccordionContent>
            São duas formas legítimas de organizar o tempo de preparação espiritual. Ambas conduzem ao mesmo fim.<br />
            <span className="block mt-2 flex items-center gap-1 text-slate-700 dark:text-slate-200"><ArrowRight className="w-4 h-4 inline" />O mais importante não é a quantidade de dias, mas o espírito de entrega total com que se vive cada etapa.</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="depois">
          <AccordionTrigger className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-purple-500" />O que muda depois da consagração?</AccordionTrigger>
          <AccordionContent>
            A consagração não muda tudo de forma imediata, mas muda a direção da vida: viver tudo com Maria para pertencer mais perfeitamente a Jesus.<br />
            <span className="block mt-2 text-xs text-blue-700 dark:text-blue-300 font-medium">📘 CIC 967</span>
            <span className="block mt-1 italic text-slate-800 dark:text-slate-200">“Esta maternidade de Maria na ordem da graça perdura (…) até a consumação eterna dos eleitos.”</span><br />
            <span className="block mt-2 flex items-center gap-1 text-slate-700 dark:text-slate-200"><ArrowRight className="w-4 h-4 inline" />A consagração é um começo consciente de uma vida mariana.</span>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Card>
        <CardContent>
          <p className="text-base text-slate-700 dark:text-slate-200 text-center mt-2">
            A consagração é um meio simples, seguro e eficaz para alcançar a santidade.<br />
            Mas ela pede verdade interior, decisão e perseverança.<br />
            Este app não substitui a vida espiritual, apenas ajuda a organizá-la.<br />
            <span className="block mt-4 text-pink-600 font-medium">Maria conduz com amor aqueles que decidem não mais viver para si, mas para Deus.</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
