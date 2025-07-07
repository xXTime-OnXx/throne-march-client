import {Component, inject, OnInit, signal} from '@angular/core';
import {Resource} from '../../shared/ui/resource/resource';
import {ResourceType} from '../../shared/ui/resource/resource.type';
import {VillageService} from '../data/service/village.service';
import {Village} from '../data/type/village';
import {Building, BuildingType} from '../data/type/building';
import {BuildingService} from '../data/service/building.service';

@Component({
  selector: 'app-village-overview',
  imports: [
    Resource
  ],
  templateUrl: './village-overview.html',
  styleUrl: './village-overview.scss'
})
export class VillageOverview implements OnInit {

  private villageService = inject(VillageService);
  private buildingService = inject(BuildingService);

  protected readonly ResourceType = ResourceType;

  public village = signal<Village | undefined>(undefined);
  public buildings: BuildingType[] = Object.values(BuildingType)

  async ngOnInit(): Promise<void> {
    await this.updateVillage();
  }

  private async updateVillage() {
    this.village.set(await this.villageService.getVillage(1));
  }

  public getBuildingByType(type: BuildingType): Building | undefined {
    const village = this.village();
    return village?.buildings.find(b => b.type === type);
  }

  public async upgradeBuilding(buildingType: BuildingType): Promise<void> {
    if (this.village() === undefined) {
      return;
    }
    const building = this.getBuildingByType(buildingType);
    if (!building) {
      await this.buildingService.create(this.village()!, buildingType);
    } else {
      await this.buildingService.upgrade(this.village()!, building!)
    }
    await this.updateVillage();
  }
}
