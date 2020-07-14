import { Component, OnInit } from '@angular/core';
import { Champion } from '../champion'

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
  constructor() { }

  ngOnInit(): void {
  }

}
