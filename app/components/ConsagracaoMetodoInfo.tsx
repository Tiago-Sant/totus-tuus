import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert";
import { Info } from "lucide-react";

export function ConsagracaoMetodoInfo() {
  return (
    <Alert variant="default">
      <Info className="h-4 w-4 text-indigo-700 dark:text-indigo-300" />
      <AlertTitle className="dark:text-indigo-300">Importante</AlertTitle>
      <AlertDescription className="space-y-2">
        <p>
          Existem <strong>duas formas tradicionais</strong> de realizar a
          preparação para a consagração:
        </p>

        <ul className="list-disc list-inside">
          <li><strong>33 dias</strong></li>
          <li><strong>30 dias</strong></li>
        </ul>

        <p>
          Em ambos os métodos, a estrutura espiritual é a mesma.
          <br />
          <strong>O que muda é apenas a duração das três últimas etapas:</strong>
        </p>

        <ul className="list-disc list-inside">
          <li>Conhecimento de si</li>
          <li>Conhecimento de Maria</li>
          <li>Conhecimento de Jesus</li>
        </ul>

        <p>
          <strong>33 dias:</strong> cada uma dessas etapas dura 7 dias
          <br />
          <strong>30 dias:</strong> cada uma dessas etapas dura 6 dias
        </p>

        <p className="text-sm text-muted-foreground">
          Não existe um método “certo” ou “errado”.  
          Escolha aquele que melhor ajudar sua vivência espiritual.
        </p>
      </AlertDescription>
    </Alert>
  );
}
