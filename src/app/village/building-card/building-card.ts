import {Component, computed, inject, input, output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Building} from '../data/type/building';
import {BuildingService} from '../data/service/building.service';

@Component({
  selector: 'app-building-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './building-card.html',
  styleUrl: './building-card.scss'
})
export class BuildingCard {

  building = input<Building>();
  updated = output<void>();

  private buildingService = inject(BuildingService);

  improveButtonText = computed(() => {
    if (this.building()?.level == 0) {
      return "Build";
    }
    return "Upgrade";
  })

  public async upgradeBuilding(): Promise<void> {
    if (this.building()?.level == 0) {
      await this.buildingService.create('1', this.building()!.type);
    } else {
      await this.buildingService.upgrade('1', this.building()!.id!.toString());
    }
    this.updated.emit();
  }

}
