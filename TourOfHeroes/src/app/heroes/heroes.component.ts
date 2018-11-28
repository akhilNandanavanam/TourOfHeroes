import { HeroService } from '../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../message.service';
import { Location } from "@angular/common";
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[];
  selectedHero : Hero;
  private message : string;
    constructor(private heroService : HeroService, private messageService : MessageService) { }

  ngOnInit() {
    this.heroService.getHero().subscribe(heroes => this.heroes = heroes);
    this.messageService.add("Heroes Fetched");
    }
  onSelect(hero : Hero):void{
    this.selectedHero = hero;
    this.message = this.selectedHero.name+" has been chosen"; 
    this.messageService.add(this.message);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  
  
}
