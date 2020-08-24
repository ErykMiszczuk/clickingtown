import Building from "@/models/BuildingModel";

const buildingsList = [
  new Building(
    "mine",
    "itr_materials",
    {
      food: 2,
      materials: 10,
      weapons: 2,
      culture: 2,
      knowledge: 2
    },
    "Main resource of materials",
    './img/tiles/medieval_mine.png',
    0,
    0,
    1
  ),
  new Building(
    "farm",
    "itr_food",
    {
      food: 2,
      materials: 20,
      weapons: 2,
      culture: 2,
      knowledge: 2
    },
    "Produces food for your empire",
    './img/tiles/medieval_farm.png',
    120,
    0,
    0
  ),
  new Building(
    "cabin",
    "itr_culture",
    {
      food: 30,
      materials: 30,
      weapons: 2,
      culture: 2,
      knowledge: 2
    },
    "Spread culture across your people",
    './img/tiles/medieval_cabin.png',
    60,
    104,
    0
  ),
  new Building(
    "church",
    "itr_knowledge",
    {
      food: 35,
      materials: 40,
      weapons: 2,
      culture: 20,
      knowledge: 2
    },
    "Priests holds one of the most valuble resources - knowledge",
    './img/tiles/medieval_church.png',
    0,
    208,
    0
  ),
  new Building(
    "castle",
    "itr_weapons",
    {
      food: 40,
      materials: 40,
      weapons: 2,
      culture: 40,
      knowledge: 40
    },
    "Your empire needs weapons to stand against foes",
    './img/tiles/medieval_openCastle.png',
    120,
    208,
    0
  )
];
export default buildingsList;
