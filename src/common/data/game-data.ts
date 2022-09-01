
import { GameID, Platform, WeaponNames_MM1 } from '../types/enums';
import { Game } from '../types/types';

const gameList: Game[] = [
  {
    "id": GameID.MM01,
    "title": "Mega Man",
    "platforms": [Platform.NES],
    "bosses": [
      {
        "name": "Cut Man",
        "weaponDrop": "Rolling Cutter",
        "weaponEffectiveness": [
          { "weapon": WeaponNames_MM1.MegaBuster, "damage": 3 },
          { "weapon": WeaponNames_MM1.RollingCutter, "damage": 1 },
          { "weapon": WeaponNames_MM1.SuperArm, "damage": 14 },
          { "weapon": WeaponNames_MM1.IceSlasher, "damage": 3 },
          { "weapon": WeaponNames_MM1.HyperBomb, "damage": 3 },
          { "weapon": WeaponNames_MM1.FireStorm, "damage": 3 },
          { "weapon": WeaponNames_MM1.ThunderBeam, "damage": 3 }
        ],
        "strategy": "",
        "stage": { "strategy": "" }
      },
      {
        "name": "Guts Man",
        "weaponDrop": "Super Arm",
        "weaponEffectiveness": [
          { "weapon": WeaponNames_MM1.MegaBuster, "damage": 2 },
          { "weapon": WeaponNames_MM1.RollingCutter, "damage": 1 },
          { "weapon": WeaponNames_MM1.SuperArm, "damage": 1 },
          { "weapon": WeaponNames_MM1.IceSlasher, "damage": 0 },
          { "weapon": WeaponNames_MM1.HyperBomb, "damage": 10 },
          { "weapon": WeaponNames_MM1.FireStorm, "damage": 2 },
          { "weapon": WeaponNames_MM1.ThunderBeam, "damage": 1 }
        ],
        "strategy": "Jump right before he lands to avoid getting stunned. Shortly after he lands, he will throw a rock at you, so prepare to jump to avoid that as well.",
        "stage": { "strategy": "" }
      },
      {
        "name": "Ice Man",
        "weaponDrop": "Ice Slasher",
        "weaponEffectiveness": [
          { "weapon": WeaponNames_MM1.MegaBuster, "damage": 1 },
          { "weapon": WeaponNames_MM1.RollingCutter, "damage": 2 },
          { "weapon": WeaponNames_MM1.SuperArm, "damage": 0 },
          { "weapon": WeaponNames_MM1.IceSlasher, "damage": 0 },
          { "weapon": WeaponNames_MM1.HyperBomb, "damage": 4 },
          { "weapon": WeaponNames_MM1.FireStorm, "damage": 1 },
          { "weapon": WeaponNames_MM1.ThunderBeam, "damage": 10 }
        ],
        "strategy": "",
        "stage": { "strategy": "" }
      },
      {
        "name": "Bomb Man",
        "weaponDrop": "Hyper Bomb",
        "weaponEffectiveness": [
          { "weapon": WeaponNames_MM1.MegaBuster, "damage": 2 },
          { "weapon": WeaponNames_MM1.RollingCutter, "damage": 2 },
          { "weapon": WeaponNames_MM1.SuperArm, "damage": 0 },
          { "weapon": WeaponNames_MM1.IceSlasher, "damage": 0 },
          { "weapon": WeaponNames_MM1.HyperBomb, "damage": 1 },
          { "weapon": WeaponNames_MM1.FireStorm, "damage": 4 },
          { "weapon": WeaponNames_MM1.ThunderBeam, "damage": 2 }
        ],
        "strategy": "",
        "stage": { "strategy": "" }
      },
      {
        "name": "Fire Man",
        "weaponDrop": "Fire Storm",
        "weaponEffectiveness": [
          { "weapon": WeaponNames_MM1.MegaBuster, "damage": 2 },
          { "weapon": WeaponNames_MM1.RollingCutter, "damage": 2 },
          { "weapon": WeaponNames_MM1.SuperArm, "damage": 0 },
          { "weapon": WeaponNames_MM1.IceSlasher, "damage": 4 },
          { "weapon": WeaponNames_MM1.HyperBomb, "damage": 1 },
          { "weapon": WeaponNames_MM1.FireStorm, "damage": 1 },
          { "weapon": WeaponNames_MM1.ThunderBeam, "damage": 1 }
        ],
        "strategy": "",
        "stage": { "strategy": "" }
      },
      {
        "name": "Elec Man",
        "weaponDrop": "Thunder Beam",
        "weaponEffectiveness": [
          { "weapon": WeaponNames_MM1.MegaBuster, "damage": 1 },
          { "weapon": WeaponNames_MM1.RollingCutter, "damage": 10 },
          { "weapon": WeaponNames_MM1.SuperArm, "damage": 4 },
          { "weapon": WeaponNames_MM1.IceSlasher, "damage": 0 },
          { "weapon": WeaponNames_MM1.HyperBomb, "damage": 2 },
          { "weapon": WeaponNames_MM1.FireStorm, "damage": 1 },
          { "weapon": WeaponNames_MM1.ThunderBeam, "damage": 1 }
        ],
        "strategy": "",
        "stage": {
          "strategy": "It's recommended to have the Super Arm or Thunder Beam before going to this stage in order to obtain the Magent Beam located here."
        }
      }

    ],
    "weapons": [
      {
        "name": WeaponNames_MM1.MegaBuster,
        "notes": "This weapon can only damage bosses from behind (if effective) when fighting them on their stage."
      },
      { "name": WeaponNames_MM1.RollingCutter },
      { "name": WeaponNames_MM1.SuperArm },
      { "name": WeaponNames_MM1.IceSlasher },
      { "name": WeaponNames_MM1.HyperBomb },
      { "name": WeaponNames_MM1.FireStorm }
    ]
  }
]


export default gameList;