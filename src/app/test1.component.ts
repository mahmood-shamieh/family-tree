import { Component } from '@angular/core';
import { Person } from './person.modle';

@Component({
  selector: 'test1',
  templateUrl: './test1.component.html',
})
export class test1 {
  psersons: Person[] = [
    {
      name: 'علاء حمشو',
      birthCity: 'دمشق',
      birthDate:'20/2/2000',
      currentCity: 'حمص',
      gender: 'ذكر',
      job: 'تاجر منسوجات',
      location: 'المزة',
      phone: '09822*****',
      pic:'assets/male.png',
    },
    {
      name: 'هناء حمشو',
      birthCity: 'دمشق',
      birthDate: '20/4/2005',
      currentCity: 'حمص',
      gender: 'ذكر',
      job: 'تاجر منسوجات',
      location: 'المزة',
      phone: '09822*****',
      pic:'assets/female.png',
    },
    {
      name: 'علاء حمشو',
      birthCity: 'دمشق',
      birthDate: '1/1/1990',
      currentCity: 'حمص',
      deathDate: '20/2/2005',
      gender: 'ذكر',
      job: 'تاجر منسوجات',
      location: 'المزة',
      phone: '09822*****',
      pic:'assets/male.png',
    },
    {
      name: 'دلال حمشو',
      birthCity: 'دمشق',
      birthDate: '1/1/1985',
      currentCity: 'حمص',
      gender: 'ذكر',
      job: 'تاجر منسوجات',
      location: 'المزة',
      phone: '09822*****',
      pic:'assets/female.png',
    },
  ];
}
