import {Component, inject, OnInit, signal} from '@angular/core';
import {Resource} from '../../shared/ui/resource/resource';
import {ResourceType} from '../../shared/ui/resource/resource.type';
import {VillageService} from '../data/service/village.service';
import {Village} from '../data/type/village';
import {Building, BuildingType} from '../data/type/building';
import {BuildingCard} from '../building-card/building-card';

@Component({
  selector: 'app-village-overview',
  imports: [
    Resource,
    BuildingCard
  ],
  templateUrl: './village-overview.html',
  styleUrl: './village-overview.scss'
})
export class VillageOverview implements OnInit {

  private villageService = inject(VillageService);

  protected readonly ResourceType = ResourceType;

  public village = signal<Village | undefined>(undefined);
  public buildings = signal<Building[]>([]);

  async ngOnInit(): Promise<void> {
    await this.loadVillageData();
  }

  private async loadVillageData() {
    this.village.set(await this.villageService.getVillage(1));
    this.buildings.set(this.createBuildingListFromVillage());
  }

  public getBuildingByType(type: BuildingType): Building | undefined {
    const village = this.village();
    return village?.buildings.find(b => b.type === type);
  }

  private createBuildingListFromVillage(): Building[] {
    const buildings = [];
    for (const buildingType of Object.values(BuildingType)) {
      const building = this.getBuildingByType(buildingType);
      if (building) {
        buildings.push(building);
      } else {
        buildings.push(this.createNonBuiltBuilding(buildingType));
      }
    }
    return buildings;
  }

  private createNonBuiltBuilding(buildingType: BuildingType): Building {
    return {
      villageId: this.village()!.id!,
      type: buildingType,
      level: 0
    };
  }

  async reloadBuildings(): Promise<void> {
    await this.loadVillageData();
  }
}
