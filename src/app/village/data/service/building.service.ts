import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {BuildingType} from '../type/building';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  private http = inject(HttpClient);

  async create(villageId: string, buildingType: BuildingType): Promise<void> {
    return await firstValueFrom(
      this.http.post<void>('http://localhost:8080/village/' + villageId + '/create/' + buildingType, {})
    );
  }

  public async upgrade(villageId: string, buildingId: string): Promise<void> {
    return await firstValueFrom(
      this.http.put<void>('http://localhost:8080/village/' + villageId + '/upgrade/' + buildingId, {})
    );
  }

}
