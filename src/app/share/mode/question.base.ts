export class QuestionBase<T> {
  value: T;
  id: string;

  constructor(options: {
    value?: T;
    id?: string;
  } = {}) {
    this.id = options.id || '';
    this.value = options.value as T;
  }
}
