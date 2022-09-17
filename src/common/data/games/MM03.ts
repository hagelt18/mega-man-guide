import { GameID, Platform, WeaponNames_MM3 } from '../../types/enums';
import { Game } from '../../types/types';

const game: Game = {
  "id": GameID.MM03,
  "title": "Mega Man 3",
  "platforms": [Platform.NES],
  "bosses": [
    {
      "name": "Needle Man",
      "weaponDrop": WeaponNames_MM3.NeedleCannon,
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM3.MegaBuster, "damage": "1" },
        { "weapon": WeaponNames_MM3.NeedleCannon, "damage": "4" },
        { "weapon": WeaponNames_MM3.MagnetMissile, "damage": "1" },
        { "weapon": WeaponNames_MM3.GeminiLaser, "damage": "7" },
        { "weapon": WeaponNames_MM3.HardKnuckle, "damage": "0" },
        { "weapon": WeaponNames_MM3.TopSpin, "damage": "1" },
        { "weapon": WeaponNames_MM3.SearchSnake, "damage": "1" },
        { "weapon": WeaponNames_MM3.SparkShock, "damage": "0" },
        { "weapon": WeaponNames_MM3.ShadowBlade, "damage": "2" }
      ],
      "strategy": "",
      "stage": { "strategy": "" }
    },
    {
      "name": "Magnet Man",
      "weaponDrop": WeaponNames_MM3.MagnetMissile,
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM3.MegaBuster, "damage": "2" },
        { "weapon": WeaponNames_MM3.NeedleCannon, "damage": "1" },
        { "weapon": WeaponNames_MM3.MagnetMissile, "damage": "4" },
        { "weapon": WeaponNames_MM3.GeminiLaser, "damage": "2" },
        { "weapon": WeaponNames_MM3.HardKnuckle, "damage": "2" },
        { "weapon": WeaponNames_MM3.TopSpin, "damage": "1" },
        { "weapon": WeaponNames_MM3.SearchSnake, "damage": "1" },
        { "weapon": WeaponNames_MM3.SparkShock, "damage": "7" },
        { "weapon": WeaponNames_MM3.ShadowBlade, "damage": "7" }
      ],
      "strategy": "",
      "stage": { "strategy": "" }
    },
    {
      "name": "Gemini Man",
      "weaponDrop": WeaponNames_MM3.GeminiLaser,
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM3.MegaBuster, "damage": "1" },
        { "weapon": WeaponNames_MM3.NeedleCannon, "damage": "1" },
        { "weapon": WeaponNames_MM3.MagnetMissile, "damage": "2" },
        { "weapon": WeaponNames_MM3.GeminiLaser, "damage": "4" },
        { "weapon": WeaponNames_MM3.HardKnuckle, "damage": "2" },
        { "weapon": WeaponNames_MM3.TopSpin, "damage": "2" },
        { "weapon": WeaponNames_MM3.SearchSnake, "damage": "5" },
        { "weapon": WeaponNames_MM3.SparkShock, "damage": "1" },
        { "weapon": WeaponNames_MM3.ShadowBlade, "damage": "2" }
      ],
      "strategy": "",
      "stage": { "strategy": "" }
    },
    {
      "name": "Hard Man",
      "weaponDrop": WeaponNames_MM3.HardKnuckle,
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM3.MegaBuster, "damage": "1" },
        { "weapon": WeaponNames_MM3.NeedleCannon, "damage": "0" },
        { "weapon": WeaponNames_MM3.MagnetMissile, "damage": "4" },
        { "weapon": WeaponNames_MM3.GeminiLaser, "damage": "1" },
        { "weapon": WeaponNames_MM3.HardKnuckle, "damage": "4" },
        { "weapon": WeaponNames_MM3.TopSpin, "damage": "0" },
        { "weapon": WeaponNames_MM3.SearchSnake, "damage": "0" },
        { "weapon": WeaponNames_MM3.SparkShock, "damage": "0" },
        { "weapon": WeaponNames_MM3.ShadowBlade, "damage": "0" }
      ],
      "strategy": "",
      "stage": { "strategy": "" }
    },
    {
      "name": "Top Man",
      "weaponDrop": WeaponNames_MM3.TopSpin,
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM3.MegaBuster, "damage": "2" },
        { "weapon": WeaponNames_MM3.NeedleCannon, "damage": "2" },
        { "weapon": WeaponNames_MM3.MagnetMissile, "damage": "1" },
        { "weapon": WeaponNames_MM3.GeminiLaser, "damage": "0" },
        { "weapon": WeaponNames_MM3.HardKnuckle, "damage": "7" },
        { "weapon": WeaponNames_MM3.TopSpin, "damage": "4" },
        { "weapon": WeaponNames_MM3.SearchSnake, "damage": "1" },
        { "weapon": WeaponNames_MM3.SparkShock, "damage": "1" },
        { "weapon": WeaponNames_MM3.ShadowBlade, "damage": "1" }
      ],
      "strategy": "",
      "stage": { "strategy": "" }
    },
    {
      "name": "Snake Man",
      "weaponDrop": WeaponNames_MM3.SearchSnake,
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM3.MegaBuster, "damage": "1" },
        { "weapon": WeaponNames_MM3.NeedleCannon, "damage": "4" },
        { "weapon": WeaponNames_MM3.MagnetMissile, "damage": "0" },
        { "weapon": WeaponNames_MM3.GeminiLaser, "damage": "1" },
        { "weapon": WeaponNames_MM3.HardKnuckle, "damage": "2" },
        { "weapon": WeaponNames_MM3.TopSpin, "damage": "2" },
        { "weapon": WeaponNames_MM3.SearchSnake, "damage": "4" },
        { "weapon": WeaponNames_MM3.SparkShock, "damage": "1" },
        { "weapon": WeaponNames_MM3.ShadowBlade, "damage": "2" }
      ],
      "strategy": "",
      "stage": {
        "strategy": ""
      }
    },
    {
      "name": "Spark Man",
      "weaponDrop": WeaponNames_MM3.SparkShock,
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM3.MegaBuster, "damage": "1" },
        { "weapon": WeaponNames_MM3.NeedleCannon, "damage": "2" },
        { "weapon": WeaponNames_MM3.MagnetMissile, "damage": "0" },
        { "weapon": WeaponNames_MM3.GeminiLaser, "damage": "1" },
        { "weapon": WeaponNames_MM3.HardKnuckle, "damage": "2" },
        { "weapon": WeaponNames_MM3.TopSpin, "damage": "1" },
        { "weapon": WeaponNames_MM3.SearchSnake, "damage": "0" },
        { "weapon": WeaponNames_MM3.SparkShock, "damage": "4" },
        { "weapon": WeaponNames_MM3.ShadowBlade, "damage": "4" }
      ],
      "strategy": "",
      "stage": {
        "strategy": ""
      }
    },
    {
      "name": "Shadow Man",
      "weaponDrop": WeaponNames_MM3.SparkShock,
      "weaponEffectiveness": [
        { "weapon": WeaponNames_MM3.MegaBuster, "damage": "1" },
        { "weapon": WeaponNames_MM3.NeedleCannon, "damage": "1" },
        { "weapon": WeaponNames_MM3.MagnetMissile, "damage": "1" },
        { "weapon": WeaponNames_MM3.GeminiLaser, "damage": "1" },
        { "weapon": WeaponNames_MM3.HardKnuckle, "damage": "2" },
        { "weapon": WeaponNames_MM3.TopSpin, "damage": "7" },
        { "weapon": WeaponNames_MM3.SearchSnake, "damage": "1" },
        { "weapon": WeaponNames_MM3.SparkShock, "damage": "1" },
        { "weapon": WeaponNames_MM3.ShadowBlade, "damage": "4" }
      ],
      "strategy": "",
      "stage": {
        "strategy": ""
      }
    }
  ],
  "weapons": [
    {
      "name": WeaponNames_MM3.MegaBuster,
      "notes": ""
    },
    { "name": WeaponNames_MM3.NeedleCannon },
    { "name": WeaponNames_MM3.MagnetMissile },
    { "name": WeaponNames_MM3.GeminiLaser },
    { "name": WeaponNames_MM3.HardKnuckle },
    { "name": WeaponNames_MM3.TopSpin },
    { "name": WeaponNames_MM3.SearchSnake },
    { "name": WeaponNames_MM3.SparkShock },
    { "name": WeaponNames_MM3.ShadowBlade }
  ]
}

export default game;