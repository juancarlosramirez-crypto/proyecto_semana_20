import { useState } from 'react';

export const CampoTexto = () => {
  const [texto, setTexto] = useState('');

  return (
    <div>
      <input
        type='text'
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder='Escribe algo...'
      />
    </div>
  );
};
