import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CardComponent } from './card/card.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { TabsComponent } from './tabs/tabs.component';
import { ChipsComponent } from './chips/chips.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(public dialog: MatDialog) {}
  panelOpenState: boolean = false;

  openExampleDialog(exampleName: string) {
    switch(exampleName){
      case 'autocomplete': {
        this.dialog.open(AutocompleteComponent);
        break;
      }
      case 'card': {
        this.dialog.open(CardComponent);
        break;
      }
      case 'chips': {
        this.dialog.open(ChipsComponent);
        break;
      }
      case 'date-picker': {
        this.dialog.open(DatePickerComponent);
        break;
      }
      case 'expansion-panel': {
        this.dialog.open(ExpansionPanelComponent);
        break;
      }
      case 'progress-bar': {
        this.dialog.open(ProgressBarComponent);
        break;
      }
      case 'tabs': {
        this.dialog.open(TabsComponent);
        break;
      }
    } 
  }
}
