import Building from "../models/BuildingModel";

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
    1
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
    1
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
    1
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
    1
  )
];
export default buildingsList;
