import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Village} from '../type/village';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VillageService {

  private http = inject(HttpClient);

  public async getVillage(villageId: number): Promise<Village> {
    return await firstValueFrom(this.http.get<Village>('http://localhost:8080/village/' + villageId));
  }

}
