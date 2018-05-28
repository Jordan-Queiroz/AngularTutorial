import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  data = [
    {
      name: 'Mehul',
      online: true
    },
    {
      name: 'ABC',
      online: false
    },
    {
      name: 'XYZ',
      online: true
    },
    {
      name: 'ABC',
      online: false
    },
    {
      name: 'XYZ',
      online: true
    },
    {
      name: 'ABC',
      online: false
    },
    {
      name: 'XYZ',
      online: true
    }
  ]

  constructor() { }

  getData() {
    return this.data;
  }

  updateData() {
    this.data[2].name = 'Jordan'
  }
}
