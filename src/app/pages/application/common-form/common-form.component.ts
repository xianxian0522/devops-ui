import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: '[app-common-form]',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.less']
})
export class CommonFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }
  
  @Input() editForm!: FormGroup;

  ngOnInit(): void {
  }

  get bindInfos(): FormArray {
    return this.editForm.get('BindInfos') as FormArray;
  }

  get envVars(): FormArray {
    return this.editForm.get('EnvVars') as FormArray;
  }

  addInfo(): void {
    this.bindInfos.push(
      this.fb.group({
        Ip: [],
        Name: [],
        Port: [],
        Protocol: []
      })
    );
  }
  addEnv(): void {
    this.envVars.push(
      this.fb.group({
        Name: [],
        Value: [],
      })
    );
  }
  removeInfo(index: number): void {
    console.log(index);
    this.bindInfos.removeAt(index);
  }
  removeEnv(index: number): void {
    this.envVars.removeAt(index);
  }
}
