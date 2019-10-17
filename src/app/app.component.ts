import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

export interface Pokemon {
  value: string;
  viewValue: string;
  weakness: string[];
  strengths: string[];
  immunities: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Pokemon types';
  selectedValue: string;
  // toppings = new FormControl();
  // toppingList: string[] = ['Fire', 'Water', 'Grass', 'Normal', 'Fighting', 'Ground', 'Rock', 'Electric', 'Ice', 'Poison',
  // 'Flying', 'Psychic', 'Bug', 'Ghost', 'Dark', 'Dragon', 'Steel', 'Fairy' ];
  pokemen: Pokemon[] = [
    {value: 'Normal', viewValue: 'Normal', weakness: [ 'Rock', ' Steel'], strengths: ['None'], immunities: [ 'Ghost' ]},
    {value: 'Fire', viewValue: 'Fire', weakness: [ 'Dragon', ' Fire', ' Rock', ' Water'], strengths: [ 'Bug', ' Grass', ' Ice', ' Steel'],
    immunities: ['None']},
    {value: 'Water', viewValue: 'Water', weakness: [ 'Dragon', ' Grass', ' Water'], strengths: [ 'Fire', ' Ground', ' Rock'],
    immunities: [ 'None']},
    {value: 'Electric', viewValue: 'Electric', weakness: [ 'Dragon', ' Electric', ' Grass'], strengths: [ 'Flying', ' Water'],
    immunities: [ 'Ground']},
    {value: 'Grass', viewValue: 'Grass', weakness: [ 'Bug', ' Dragon', ' Fire', ' Flying', ' Grass', ' Poison', ' Steel'],
    strengths: [ 'Ground', ' Rock', ' Water'], immunities: [ 'None']},
    {value: 'Ice', viewValue: 'Ice', weakness: [ 'Fire', ' Ice', ' Steel', ' Water'],
    strengths: [ 'Dragon', ' Flying', ' Grass', ' Ground'], immunities: [ 'None']},
    {value: 'Fighting', viewValue: 'Fighting', weakness: [ ' Flying', ' Poison', ' Bug', ' Psychic', ' Fairy'],
    strengths: [ ' Normal', ' Rock', ' Steel', ' Ice', ' Dark'], immunities: [ ' Ghost']},
    {value: 'Poison', viewValue: 'Poison', weakness: [ ' Poison', ' Ground', ' Rock', ' Ghost'],
    strengths: [ ' Grass', ' Fairy'], immunities: [ ' Steel']},
    {value: 'Ground', viewValue: 'Ground', weakness: [ ' Bug', ' Grass'],
    strengths: [ ' Poison', ' Rock', ' Steel', ' Fire', ' Electric'], immunities: [ ' Flying']},
    {value: 'Flying', viewValue: 'Flying', weakness: [ ' Rock', ' Steel', ' Electric'],
    strengths: [ ' Fighting', ' Bug', ' Grass'], immunities: [ ' None']},
    {value: 'Psychic', viewValue: 'Psychic', weakness: [ ' Psychic', ' Steel'],
    strengths: [ ' Fighting', ' Poison'], immunities: [ ' Dark']},
    {value: 'Bug', viewValue: 'Bug', weakness: [ ' Fighting', ' Flying', ' Poison', ' Ghost', ' Steel', ' Water', ' Fairy'],
    strengths: [ ' Dark', ' Grass', ' Psychic'], immunities: [ ' None']},
    {value: 'Rock', viewValue: 'Rock', weakness: [ 'Fighting', ' Ground', ' Steel'], strengths: [ 'Flying', ' Bug', ' Fire', ' Ice'],
    immunities: [ 'None']},
    {value: 'Ghost', viewValue: 'Ghost', weakness: [ 'Dark' ], strengths: [ 'Ghost', ' Psychic' ], immunities: [ 'Normal' ]},
    {value: 'Dragon', viewValue: 'Dragon', weakness: [ 'Steel' ], strengths: [ 'Dragon' ], immunities: [ 'Fairy' ]},
    {value: 'Dark', viewValue: 'Dark', weakness: [ 'Fighting', ' Dark', ' Fairy' ], strengths: [ 'Ghost', ' Psychic'],
    immunities: [ 'None' ]},
    {value: 'Steel', viewValue: 'Steel', weakness: [ 'Steel', ' Fire', ' Water', ' Electric'], strengths: [ 'Rock', ' Ice', ' Fairy'],
    immunities: [ 'None']},
    {value: 'Fairy', viewValue: 'Fairy', weakness: [ 'Poison', ' Steel', ' Fire'], strengths: [ 'Fightning', ' Dragon', ' Dark'],
    immunities: [ 'None']}
  ];
}
