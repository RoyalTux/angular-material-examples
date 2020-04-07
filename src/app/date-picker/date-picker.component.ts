import { Component, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: [ './date-picker.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class DatePickerComponent {
  startDate = new Date(1990, 0, 1);
  minDate: Date;
  maxDate: Date;

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 1, 0, 0);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  }

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  }
}