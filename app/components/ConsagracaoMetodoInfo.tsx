import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Info } from "lucide-react";

export function ConsagracaoMetodoInfo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="cursor-pointer" type="button" aria-label="Dica sobre o método de preparação para a consagração">
          <Info className="h-5 w-5 text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100 transition-colors" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="space-y-2 max-w-xs">
        <div className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Qual método escolher?</div>
        <p>
          Para se preparar para a consagração, você pode optar por dois caminhos tradicionais:
        </p>
        <ul className="list-disc list-inside mb-1">
          <li><strong>33 dias</strong> — etapas finais com 7 dias cada</li>
          <li><strong>30 dias</strong> — etapas finais com 6 dias cada</li>
        </ul>
        <p>
          Ambos os métodos têm a mesma essência espiritual. O que muda é apenas o tempo dedicado às três últimas etapas:
        </p>
        <ul className="list-disc list-inside mb-1">
          <li>Conhecimento de si</li>
          <li>Conhecimento de Maria</li>
          <li>Conhecimento de Jesus</li>
        </ul>
        <p className="text-sm text-muted-foreground mt-2">
          Não existe um único caminho “certo”. Escolha aquele que mais favorecer sua vivência e aprofundamento espiritual.
        </p>
      </PopoverContent>
    </Popover>
  );
}
