import React from 'react';
import { PrayerSection } from '../PrayerSection';
import { PrayerText } from '../PrayerText';
import { Star } from 'lucide-react';

const AveMarisStella: React.FC = () => (
  <PrayerSection title="Ave Maris Stella" icon={<Star className="w-6 h-6" />}>
    <PrayerText>
      <p>Ave do mar Estrela,<br/>
      de Deus Mãe bela,<br/>
      sempre Virgem,<br/>
      da morada Celeste feliz entrada.</p>
      <p>Ó tu que ouviste da boca do anjo a saudação;<br/>dá-nos paz e quietação e o nome de Eva troca.</p>
      <p>As prisões aos réus desata<br/>e a nós, cegos, alumia;<br/>de tudo que nos maltrata<br/>nos livra, o bem nos granjeia.</p>
      <p>Ostenta que és Mãe, fazendo<br/>que os rogos do povo seu<br/>ouça aquele que, nascendo por nós,<br/>quis ser Filho teu.</p>
      <p>Ó Virgem especiosa,<br/>toda cheia de ternura,<br/>extintos nossos pecados,<br/>dá-nos pureza e brandura.</p>
      <p>Dá-nos uma vida pura,<br/>Põe-nos em via segura,<br/>Para que a Jesus gozemos,<br/>e sempre nos alegremos.</p>
      <p>A Deus Pai veneremos,<br/>a Jesus Cristo também,<br/>e ao Espírito Santo;<br/>demos aos três um louvor.</p>
      <p>Amém.</p>
    </PrayerText>
  </PrayerSection>
);

export default AveMarisStella;
