import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

 @Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})

export class SpinnerComponent implements OnInit {
  spinner: boolean;

  constructor(private _spinnerService: SpinnerService) {
    this._spinnerService.returnSpinner().subscribe((spinner: boolean) => {
      this.spinner = spinner;
    });
  }

  ngOnInit() {
  }
}
