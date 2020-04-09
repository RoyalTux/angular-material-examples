import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CardComponent } from './card/card.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { TabsComponent } from './tabs/tabs.component';
import { ChipsComponent } from './chips/chips.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { PrimengTableComponent } from './primeng-table/primeng-table.component';
import { PaginatorModule } from 'primeng/primeng'; // Here
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    TableModule,
    PaginatorModule
  ],
  declarations: [
    AppComponent,
    DatePickerComponent,
    AutocompleteComponent,
    CardComponent,
    ExpansionPanelComponent,
    TabsComponent,
    ChipsComponent,
    ProgressBarComponent,
    PrimengTableComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
   useValue: { appearance: 'fill' }
   }],
  entryComponents: [
    DatePickerComponent,
    AutocompleteComponent,
    CardComponent,
    ExpansionPanelComponent,
    TabsComponent,
    ChipsComponent,
    ProgressBarComponent
  ]
})
export class AppModule { }
