import { HeroService } from '../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[];
  selectedHero : Hero;
    constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.heroService.getHero().subscribe(heroes => this.heroes = heroes);
    }
  onSelect(hero : Hero):void{
    this.selectedHero = hero;
  }
  
}
