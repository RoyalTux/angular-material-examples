import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

export interface Car {
    vin;
    year;
    brand;
    color;
}

@Component({
  selector: 'app-prime-ng-table',
  templateUrl: './prime-ng-table.component.html',
  styleUrls: ['./prime-ng-table.component.css']
})
export class PrimeNgTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}