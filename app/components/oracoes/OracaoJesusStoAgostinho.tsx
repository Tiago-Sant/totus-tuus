import React from "react";
import { PrayerSection } from "../PrayerSection";
import { PrayerText } from "../PrayerText";
import { Heart } from "lucide-react";

const OracaoJesusStoAgostinho: React.FC = () => (
  <PrayerSection title="Oração a Jesus de Santo Agostinho" icon={<Heart className="w-6 h-6" />}>
    <PrayerText>
      <p>Vós sois, ó Jesus, o Cristo, meu Pai santo, meu Deus misericordioso, meu Rei infinitamente grande; sois meu bom pastor, meu único mestre, meu auxílio cheio de bondade, meu bem-amado de uma beleza maravilhosa, meu pão vivo, meu sacerdote eterno, meu guia para a pátria, minha verdadeira luz, minha santa doçura, meu reto caminho, sapiência minha preclara, minha pura simplicidade, minha paz e concórdia; sois, enfim, toda a minha salvaguarda, minha herança preciosa, minha eterna salvação…</p>
      <p>Ó Jesus Cristo, amável Senhor, por que, em toda minha vida, amei, por que desejei outra coisa senão vós? Onde estava eu quando não pensava em vós?</p>
      <p>Ah! que, pelo menos, a partir deste momento meu coração só deseje a vós e por vós se abrase, Senhor Jesus!</p>
      <p>Desejos de minha alma, correi, que já bastante tardastes; apressai-vos para o fim a que aspirais; procurai em verdade aquele que procurais.</p>
      <p>Ó Jesus, anátema seja quem não vos ama. Aquele que não vos ama seja repleto de amarguras.</p>
      <p>Ó doce Jesus, sede o amor, as delícias, a admiração de todo coração dignamente consagrado à vossa glória. Deus de meu coração e minha partilha, Jesus Cristo, que em vós meu coração desfaleça, e sede vós mesmo a minha vida.</p>
      <p>Acenda-se em minha alma a brasa ardente de vosso amor e se converta num incêndio todo divino, a arder para sempre no altar de meu coração; que inflame o íntimo de meu ser, e abrase o âmago de minha alma; para que no dia de minha morte eu apareça diante de vós inteiramente consumido em vosso amor.</p>
      <p>Amém.</p>
    </PrayerText>
  </PrayerSection>
);

export default OracaoJesusStoAgostinho;
