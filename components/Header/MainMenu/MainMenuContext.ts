import { createContext, Dispatch, SetStateAction } from 'react';

interface MainMenuContextProps {
  setActiveLevel: Dispatch<SetStateAction<string>>;
  activeLevel: string;
}

export const MainMenuContext = createContext({} as MainMenuContextProps);
