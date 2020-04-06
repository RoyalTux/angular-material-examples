import { Component } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html'
})
export class ExpansionPanelComponent {
  isDisabled: boolean = false;
  slideContent: string = 'Disable expansion panel';

  onSlideChange() {
    this.isDisabled = !this.isDisabled;
    if (!this.isDisabled) {
      this.slideContent = 'Disable expansion panel'
    }
    else {
    this.slideContent = 'Enable expansion panel'
    }
  }
}