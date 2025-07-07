import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Village} from '../type/village';
import {firstValueFrom} from 'rxjs';
import {Building, BuildingType} from '../type/building';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  private http = inject(HttpClient);

  async create(village: Village, buildingType: BuildingType): Promise<void> {
    const villageId = village.id;
    return await firstValueFrom(
      this.http.post<void>('http://localhost:8080/village/' + villageId + '/create/' + buildingType, {})
    );
  }

  public async upgrade(village: Village, building: Building): Promise<void> {
    const villageId = village.id;
    const buildingId = building.id;
    return await firstValueFrom(
      this.http.put<void>('http://localhost:8080/village/' + villageId + '/upgrade/' + buildingId, {})
    );
  }

}
