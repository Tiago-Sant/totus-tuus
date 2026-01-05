import { useEffect, useState } from 'react';

export function useFaltamDias(getTextoFaltamDias: () => string) {
  const [faltamDias, setFaltamDias] = useState<string>("");
  useEffect(() => {
    setFaltamDias(getTextoFaltamDias());
     
  }, [getTextoFaltamDias]);
  return faltamDias;
}
