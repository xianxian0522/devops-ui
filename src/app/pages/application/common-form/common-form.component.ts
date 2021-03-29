import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: '[app-common-form]',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.less']
})
export class CommonFormComponent implements OnInit {

  constructor() { }
  
  @Input() editForm!: FormGroup;

  ngOnInit(): void {
  }

  get bindInfos(): FormArray {
    return this.editForm.get('BindInfos') as FormArray;
  }

  get envVars(): FormArray {
    return this.editForm.get('EnvVars') as FormArray;
  }

}
