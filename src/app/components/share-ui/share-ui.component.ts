import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-share-ui',
  templateUrl: './share-ui.component.html',
  styleUrls: ['./share-ui.component.scss'],
})
export class ShareUiComponent implements OnInit {
  filesFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.filesFormGroup = this._formBuilder.group({
      fileControl: ['', Validators.required],
    });
  }

  fileOnChange(): void {
    console.log(this.filesFormGroup.value.fileControl);
  }
}
