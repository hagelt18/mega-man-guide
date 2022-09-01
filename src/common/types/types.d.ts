import { GameID, Platform } from './enums';

export interface AppContextData {
  games?: Game[];
}
export interface Game {
  id: GameID;
  title: string;
  platforms: Array<Platform>;
  bosses: Array<Boss>
  weapons: Array<Weapon>
}

export interface Boss {
  name: string;
  weaponDrop: string;
  weaponEffectiveness: Array<BossWeaponEffectiveness>;
  strategy?: string;
  stage: Stage;
}

export interface BossWeaponEffectiveness {
  weapon: string;
  damage: number;
  notes?: string;
}

export interface Stage {
  strategy?: string;
}

export interface Weapon {
  name: string;
  notes?: string;
}
