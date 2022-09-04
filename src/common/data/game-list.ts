
import { GameID, Platform, WeaponNames_MM1 } from '../types/enums';
import { Game } from '../types/types';
import MM01 from './games/MM01';
import MM02 from './games/MM02';
import MM03 from './games/MM03';
import MM04 from './games/MM04';
import MM05 from './games/MM05';
import MM06 from './games/MM06';

const gameList: Game[] = [
  MM01,
  MM02,
  MM03,
  MM04,
  MM05,
  MM06
]


export default gameList;