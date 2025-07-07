export interface Building {
  id?: number;
  villageId: number;
  type: BuildingType;
  level: number;
}

export enum BuildingType {
  LUMBER_MILL = "LUMBER_MILL",
  STONE_QUARRY = "STONE_QUARRY",
  IRON_MINE = "IRON_MINE"
}
