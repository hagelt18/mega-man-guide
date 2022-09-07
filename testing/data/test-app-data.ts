import { AppContextData } from '@src/common/types/types';
import { getTestGames } from './test-game-data';

export const getTestAppData = (): AppContextData => {
  return {
    games: getTestGames()
  }
}