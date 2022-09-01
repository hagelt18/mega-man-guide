import React, { useState, useContext, useEffect } from 'react';
import { createContext } from 'React';
import { getGames } from '../data/data-provider';
import { AppContextData, Game } from '../types/types';
import { Text } from 'react-native';

const AppContext = createContext<AppContextData>({});

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
}

export interface AppContextProviderProps { children: any }
export const AppContextProvider: React.FC<AppContextProviderProps> = (props) => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    // If this data moves to a different location, we can implement error handling and load indication here.
    const gameData = getGames();
    setGames(gameData);
  }, []);

  if (!games?.length) {
    return <Text>loading...</Text>;
  }

  const contextData: AppContextData = {
    games
  }
  return (
    <AppContext.Provider value={contextData}>
      {props.children}
    </AppContext.Provider>
  );

}