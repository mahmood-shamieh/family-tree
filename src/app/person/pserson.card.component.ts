import { Component, Injectable, Input } from '@angular/core';
import { Person } from '../person.modle';

@Component({
  selector: 'person-card',
  templateUrl: './person.card.component.html',
  styleUrls: ['./person.card.component.css'],
})

export class PersonCard {
  panelOpenState = false;
  @Input() person?:Person;
}
