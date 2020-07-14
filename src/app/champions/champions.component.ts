import { Component, OnInit } from '@angular/core';
import { Champion } from '../champion'
import { CHAMPIONS } from '../mock-CHAMPIONS'

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
  champions = CHAMPIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
