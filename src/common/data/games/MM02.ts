import { GameID, Platform, WeaponNames_MM2 } from '../../types/enums';
import { Game } from '../../types/types';

const game: Game = {
  "id": GameID.MM02,
  "title": "Mega Man 2",
  "platforms": [Platform.NES],
  "bosses": [
    {
      "name": "Metal Man",
      "weaponDrop": WeaponNames_MM2.MetalBlade,
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM2.MegaBuster, "damage": "2" },
        { "weapon": WeaponNames_MM2.MetalBlade, "damage": "28" },
        { "weapon": WeaponNames_MM2.AirShooter, "damage": "0" },
        { "weapon": WeaponNames_MM2.BubbleLead, "damage": "0" },
        { "weapon": WeaponNames_MM2.QuickBoomerang, "damage": "8" },
        { "weapon": WeaponNames_MM2.CrashBomber, "damage": "0" },
        { "weapon": WeaponNames_MM2.TimeStopper, "damage": "0" },
        { "weapon": WeaponNames_MM2.AtomicFire, "damage": "2, 6, 8" },
        { "weapon": WeaponNames_MM2.LeafShield, "damage": "0" }
      ],
      "strategy": "",
      "stage": { "strategy": "" }
    },
    {
      "name": "Air Man",
      "weaponDrop": WeaponNames_MM2.AirShooter,
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM2.MegaBuster, "damage": "4" },
        { "weapon": WeaponNames_MM2.MetalBlade, "damage": "0" },
        { "weapon": WeaponNames_MM2.AirShooter, "damage": "0" },
        { "weapon": WeaponNames_MM2.BubbleLead, "damage": "0" },
        { "weapon": WeaponNames_MM2.QuickBoomerang, "damage": "4" },
        { "weapon": WeaponNames_MM2.CrashBomber, "damage": "0" },
        { "weapon": WeaponNames_MM2.TimeStopper, "damage": "0" },
        { "weapon": WeaponNames_MM2.AtomicFire, "damage": "4, 12, 12" },
        { "weapon": WeaponNames_MM2.LeafShield, "damage": "16" }
      ],
      "strategy": "",
      "stage": { "strategy": "" }
    },
    {
      "name": "Bubble Man",
      "weaponDrop": WeaponNames_MM2.BubbleLead,
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM2.MegaBuster, "damage": "2" },
        { "weapon": WeaponNames_MM2.MetalBlade, "damage": "8" },
        { "weapon": WeaponNames_MM2.AirShooter, "damage": "0" },
        { "weapon": WeaponNames_MM2.BubbleLead, "damage": "0" },
        { "weapon": WeaponNames_MM2.QuickBoomerang, "damage": "4" },
        { "weapon": WeaponNames_MM2.CrashBomber, "damage": "4" },
        { "weapon": WeaponNames_MM2.TimeStopper, "damage": "0" },
        { "weapon": WeaponNames_MM2.AtomicFire, "damage": "0" },
        { "weapon": WeaponNames_MM2.LeafShield, "damage": "0" }
      ],
      "strategy": "",
      "stage": { "strategy": "" }
    },
    {
      "name": "Quick Man",
      "weaponDrop": WeaponNames_MM2.QuickBoomerang,
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM2.MegaBuster, "damage": "4" },
        { "weapon": WeaponNames_MM2.MetalBlade, "damage": "0" },
        { "weapon": WeaponNames_MM2.AirShooter, "damage": "4" },
        { "weapon": WeaponNames_MM2.BubbleLead, "damage": "0" },
        { "weapon": WeaponNames_MM2.QuickBoomerang, "damage": "0" },
        { "weapon": WeaponNames_MM2.CrashBomber, "damage": "8" },
        { "weapon": WeaponNames_MM2.TimeStopper, "damage": "1 per seconds for 14 seconds" },
        { "weapon": WeaponNames_MM2.AtomicFire, "damage": "4, 12, 20" },
        { "weapon": WeaponNames_MM2.LeafShield, "damage": "0" }
      ],
      "strategy": "",
      "stage": { "strategy": "" }
    },
    {
      "name": "Crash Man",
      "weaponDrop": WeaponNames_MM2.CrashBomber,
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM2.MegaBuster, "damage": "2" },
        { "weapon": WeaponNames_MM2.MetalBlade, "damage": "0" },
        { "weapon": WeaponNames_MM2.AirShooter, "damage": "20" },
        { "weapon": WeaponNames_MM2.BubbleLead, "damage": "2" },
        { "weapon": WeaponNames_MM2.QuickBoomerang, "damage": "2" },
        { "weapon": WeaponNames_MM2.CrashBomber, "damage": "0" },
        { "weapon": WeaponNames_MM2.TimeStopper, "damage": "0" },
        { "weapon": WeaponNames_MM2.AtomicFire, "damage": "2, 6, 12" },
        { "weapon": WeaponNames_MM2.LeafShield, "damage": "0" }
      ],
      "strategy": "",
      "stage": { "strategy": "" }
    },
    {
      "name": "Flash Man",
      "weaponDrop": WeaponNames_MM2.TimeStopper,
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM2.MegaBuster, "damage": "4" },
        { "weapon": WeaponNames_MM2.MetalBlade, "damage": "8" },
        { "weapon": WeaponNames_MM2.AirShooter, "damage": "0" },
        { "weapon": WeaponNames_MM2.BubbleLead, "damage": "4" },
        { "weapon": WeaponNames_MM2.QuickBoomerang, "damage": "0" },
        { "weapon": WeaponNames_MM2.CrashBomber, "damage": "6" },
        { "weapon": WeaponNames_MM2.TimeStopper, "damage": "0" },
        { "weapon": WeaponNames_MM2.AtomicFire, "damage": "4, 12, 12" },
        { "weapon": WeaponNames_MM2.LeafShield, "damage": "0" }
      ],
      "strategy": "",
      "stage": {
        "strategy": ""
      }
    },
    {
      "name": "Heat Man",
      "weaponDrop": WeaponNames_MM2.AtomicFire,
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM2.MegaBuster, "damage": "4" },
        { "weapon": WeaponNames_MM2.MetalBlade, "damage": "2" },
        { "weapon": WeaponNames_MM2.AirShooter, "damage": "4" },
        { "weapon": WeaponNames_MM2.BubbleLead, "damage": "12" },
        { "weapon": WeaponNames_MM2.QuickBoomerang, "damage": "4" },
        { "weapon": WeaponNames_MM2.CrashBomber, "damage": "+" },
        { "weapon": WeaponNames_MM2.TimeStopper, "damage": "0" },
        { "weapon": WeaponNames_MM2.AtomicFire, "damage": "+" },
        { "weapon": WeaponNames_MM2.LeafShield, "damage": "0" }
      ],
      "strategy": "",
      "stage": {
        "strategy": ""
      }
    },
    {
      "name": "Wood Man",
      "weaponDrop": WeaponNames_MM2.LeafShield,
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM2.MegaBuster, "damage": "2" },
        { "weapon": WeaponNames_MM2.MetalBlade, "damage": "4" },
        { "weapon": WeaponNames_MM2.AirShooter, "damage": "8" },
        { "weapon": WeaponNames_MM2.BubbleLead, "damage": "0" },
        { "weapon": WeaponNames_MM2.QuickBoomerang, "damage": "0" },
        { "weapon": WeaponNames_MM2.CrashBomber, "damage": "4" },
        { "weapon": WeaponNames_MM2.TimeStopper, "damage": "0" },
        { "weapon": WeaponNames_MM2.AtomicFire, "damage": "2, 6, 28" },
        { "weapon": WeaponNames_MM2.LeafShield, "damage": "+" }
      ],
      "strategy": "",
      "stage": {
        "strategy": ""
      }
    },
    {
      "name": "Mecha Dragon",
      "weaponDrop": "NONE",
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM2.MegaBuster, "damage": "2" },
        { "weapon": WeaponNames_MM2.MetalBlade, "damage": "0" },
        { "weapon": WeaponNames_MM2.AirShooter, "damage": "0" },
        { "weapon": WeaponNames_MM2.BubbleLead, "damage": "0" },
        { "weapon": WeaponNames_MM2.QuickBoomerang, "damage": "2" },
        { "weapon": WeaponNames_MM2.CrashBomber, "damage": "2" },
        { "weapon": WeaponNames_MM2.TimeStopper, "damage": "0" },
        { "weapon": WeaponNames_MM2.AtomicFire, "damage": "2, 6, 16" },
        { "weapon": WeaponNames_MM2.LeafShield, "damage": "0" }
      ],
      "strategy": "",
      "stage": {
        "strategy": ""
      }
    },
    {
      "name": "Picopico-kun",
      "weaponDrop": "NONE",
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM2.MegaBuster, "damage": "1" },
        { "weapon": WeaponNames_MM2.MetalBlade, "damage": "1" },
        { "weapon": WeaponNames_MM2.AirShooter, "damage": "0" },
        { "weapon": WeaponNames_MM2.BubbleLead, "damage": "2" },
        { "weapon": WeaponNames_MM2.QuickBoomerang, "damage": "1" },
        { "weapon": WeaponNames_MM2.CrashBomber, "damage": "0" },
        { "weapon": WeaponNames_MM2.TimeStopper, "damage": "0" },
        { "weapon": WeaponNames_MM2.AtomicFire, "damage": "1, 2, 2" },
        { "weapon": WeaponNames_MM2.LeafShield, "damage": "0" }
      ],
      "strategy": "",
      "stage": {
        "strategy": ""
      }
    },
    {
      "name": "Guts Tank",
      "weaponDrop": "NONE",
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM2.MegaBuster, "damage": "2" },
        { "weapon": WeaponNames_MM2.MetalBlade, "damage": "0" },
        { "weapon": WeaponNames_MM2.AirShooter, "damage": "0" },
        { "weapon": WeaponNames_MM2.BubbleLead, "damage": "2" },
        { "weapon": WeaponNames_MM2.QuickBoomerang, "damage": "4" },
        { "weapon": WeaponNames_MM2.CrashBomber, "damage": "2" },
        { "weapon": WeaponNames_MM2.TimeStopper, "damage": "0" },
        { "weapon": WeaponNames_MM2.AtomicFire, "damage": "2, 6, 16" },
        { "weapon": WeaponNames_MM2.LeafShield, "damage": "0" }
      ],
      "strategy": "",
      "stage": {
        "strategy": ""
      }
    },
    {
      "name": "BooBeam Trap",
      "weaponDrop": "NONE",
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM2.MegaBuster, "damage": "0" },
        { "weapon": WeaponNames_MM2.MetalBlade, "damage": "0" },
        { "weapon": WeaponNames_MM2.AirShooter, "damage": "0" },
        { "weapon": WeaponNames_MM2.BubbleLead, "damage": "0" },
        { "weapon": WeaponNames_MM2.QuickBoomerang, "damage": "0" },
        { "weapon": WeaponNames_MM2.CrashBomber, "damage": "6" },
        { "weapon": WeaponNames_MM2.TimeStopper, "damage": "0*" },
        { "weapon": WeaponNames_MM2.AtomicFire, "damage": "0, 0, 0" },
        { "weapon": WeaponNames_MM2.LeafShield, "damage": "0" }
      ],
      "strategy": "",
      "stage": {
        "strategy": ""
      }
    },
    {
      "name": "Wily Machine 1, 1st Phase",
      "weaponDrop": "NONE",
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM2.MegaBuster, "damage": "2" },
        { "weapon": WeaponNames_MM2.MetalBlade, "damage": "2" },
        { "weapon": WeaponNames_MM2.AirShooter, "damage": "0" },
        { "weapon": WeaponNames_MM2.BubbleLead, "damage": "0" },
        { "weapon": WeaponNames_MM2.QuickBoomerang, "damage": "0" },
        { "weapon": WeaponNames_MM2.CrashBomber, "damage": "8" },
        { "weapon": WeaponNames_MM2.TimeStopper, "damage": "0" },
        { "weapon": WeaponNames_MM2.AtomicFire, "damage": "2, 6, 28" },
        { "weapon": WeaponNames_MM2.LeafShield, "damage": "0" }
      ],
      "strategy": "",
      "stage": {
        "strategy": ""
      }
    },
    {
      "name": "Wily Machine 1, 2st Phase",
      "weaponDrop": "NONE",
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM2.MegaBuster, "damage": "2" },
        { "weapon": WeaponNames_MM2.MetalBlade, "damage": "2" },
        { "weapon": WeaponNames_MM2.AirShooter, "damage": "2" },
        { "weapon": WeaponNames_MM2.BubbleLead, "damage": "0" },
        { "weapon": WeaponNames_MM2.QuickBoomerang, "damage": "2" },
        { "weapon": WeaponNames_MM2.CrashBomber, "damage": "8" },
        { "weapon": WeaponNames_MM2.TimeStopper, "damage": "8" },
        { "weapon": WeaponNames_MM2.AtomicFire, "damage": "0, 0, 0" },
        { "weapon": WeaponNames_MM2.LeafShield, "damage": "+" }
      ],
      "strategy": "",
      "stage": {
        "strategy": ""
      }
    },
    {
      "name": "Alien",
      "weaponDrop": "NONE",
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM2.MegaBuster, "damage": "+" },
        { "weapon": WeaponNames_MM2.MetalBlade, "damage": "+" },
        { "weapon": WeaponNames_MM2.AirShooter, "damage": "+" },
        { "weapon": WeaponNames_MM2.BubbleLead, "damage": "2" },
        { "weapon": WeaponNames_MM2.QuickBoomerang, "damage": "+" },
        { "weapon": WeaponNames_MM2.CrashBomber, "damage": "+" },
        { "weapon": WeaponNames_MM2.TimeStopper, "damage": "+" },
        { "weapon": WeaponNames_MM2.AtomicFire, "damage": "+, +, +" },
        { "weapon": WeaponNames_MM2.LeafShield, "damage": "+" }
      ],
      "strategy": "",
      "stage": {
        "strategy": ""
      }
    }
  ],
  "weapons": [
    {
      "name": WeaponNames_MM2.MegaBuster,
      "notes": ""
    },
    { "name": WeaponNames_MM2.MetalBlade },
    { "name": WeaponNames_MM2.AirShooter },
    { "name": WeaponNames_MM2.BubbleLead },
    { "name": WeaponNames_MM2.QuickBoomerang },
    { "name": WeaponNames_MM2.CrashBomber },
    { "name": WeaponNames_MM2.TimeStopper },
    { "name": WeaponNames_MM2.AtomicFire },
    { "name": WeaponNames_MM2.LeafShield }
  ]
}

export default game;