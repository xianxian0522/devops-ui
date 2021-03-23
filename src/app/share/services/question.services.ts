import {Injectable} from '@angular/core';
import {QuestionBase} from '../mode/question.base';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionServices {
  constructor() {}

  toFormGroup(questions: QuestionBase<string>[]): FormGroup {
    const group: any = {};

    questions.forEach(question => {
      group[question.id] = new FormControl(question.value || null);
    });

    return new FormGroup(group);
  }
}
