import { Injectable } from '@angular/core';
import { Champion } from './champion'
import { CHAMPIONS } from './mock-champions'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  getChampions(): Observable<Champion[]> {
    return of(CHAMPIONS)
  }

  constructor() { }
}
