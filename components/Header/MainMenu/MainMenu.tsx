import { useState } from 'react';
import { Level1, Level2 } from './levels';
import { MainMenuContext } from './MainMenuContext';

export const MainMenu = () => {
  const [activeLevel, setActiveLevel] = useState('shop');
  return (
    <MainMenuContext.Provider value={{ setActiveLevel, activeLevel }}>
      <nav>
        <Level1 />
        <Level2 />
      </nav>
    </MainMenuContext.Provider>
  );
};
