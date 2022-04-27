import { Injectable } from '@angular/core';
import { Data } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  datas: Data[] = [];

  constructor() { }

  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getDatas(): Data[] {
    this.datas.push({
      sensorId: 1,
      measuredValue: this.randomIntFromInterval(1, 100)
    });
    return this.datas;
  }
}
