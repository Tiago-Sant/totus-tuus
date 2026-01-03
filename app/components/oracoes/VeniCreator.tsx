import React from 'react';
import { PrayerSection } from '../PrayerSection';
import { PrayerText } from '../PrayerText';
import { Flame } from 'lucide-react';
import { Resposta } from '../Resposta';

const VeniCreator: React.FC = () => (
  <PrayerSection title="Veni Creator" icon={<Flame className="w-6 h-6" />}>
    <PrayerText>
      <p>Vem, ó criador Espírito,<br/>Visita as almas tuas,<br/>
      Os corações que criastes,<br/>Enche de graça infinita.</p>
      <p>Tu, Paráclito és chamado<br/>Dom do Pai celestial,<br/>Fogo, caridade, fonte<br/>Viva unção espiritual.</p>
      <p>Tu dás septiforme graça;<br/>Dedo és da destra paterna;<br/>Do Pai, solene promessa,<br/>Dás força da voz suprema.</p>
      <p>Nossa razão esclarece,<br/>Teu amor no peito acende,<br/>Do nosso corpo a fraqueza<br/>Com tua força defende.</p>
      <p>De nós afasta o inimigo.<br/>Dá que Deus Pai e seu Filho<br/>Por ti nós bem conheçamos,<br/>E em ti, Espírito de ambos<br/>Em todo tempo creiamos.</p>
      <p>A Deus Pai se de a glória<br/>E ao Filho ressuscitado,<br/>Paráclito e a ti também<br/>Com louvor perpetuado. Amém</p>
      <p><Resposta>Oremos.</Resposta> Ó Deus, que instruíste os corações de vossos fieis com a luz do Espírito Santo;<br/>concedei-nos que no mesmo Espírito conheçamos o que é reto, e gozemos sempre as suas consolações. Por Cristo Nosso Senhor.</p>
      <p>Amém.</p>
    </PrayerText>
  </PrayerSection>
);

export default VeniCreator;
