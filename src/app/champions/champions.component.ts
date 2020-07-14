import { Component, OnInit } from '@angular/core';
import { Champion } from '../champion'
// import { CHAMPIONS } from '../mock-champions'
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {
  champion: Champion = {
    id: 1,
    name: 'Spider-Man'
  };
  getChampions(): void {
    this.championService.getChampions().subscribe(champions => this.champions = champions)
  }
  champions: Champion[]
  selectedChampion: Champion;
  onSelect(champion: Champion): void {
    this.selectedChampion = champion;
  }

  constructor(private championService: ChampionService) { }

  ngOnInit(): void {
    this.getChampions();
  }

}
