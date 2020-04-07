import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html'
})
export class ChipsComponent {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  carControl = new FormControl();
  filteredCars: Observable<string[]>;
  cars: string[] = ['Toyota'];
  allCars: string[] = ['Toyota', 'BMW', 'Mersedes', 'Range Rover'];

  @ViewChild('carInput') carInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredCars = this.carControl.valueChanges.pipe(
        startWith(null),
        map((car: string | null) => car ? this.filter(car) : this.allCars.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.cars.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.carControl.setValue(null);
  }

  remove(car: string): void {
    const index = this.cars.indexOf(car);

    if (index >= 0) {
      this.cars.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.cars.push(event.option.viewValue);
    this.carInput.nativeElement.value = '';
    this.carControl.setValue(null);
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allCars.filter(car => car.toLowerCase().indexOf(filterValue) === 0);
  }
}