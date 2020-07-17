export class Person {
    private _name: string;
    private _secondName: string;

    constructor() {
      this._name = '';
      this._secondName = '';
    }

    get Name(): string {
      return this._name;
    }

    set Name(value: string) {
      this._name = value;
    }

    get SecondName(): string {
      return this._secondName;
    }

    set SecondName(value: string) {
      this._secondName = value;
    }

    public get FullName(): string {
      return `${this._name} ${this._secondName}`;
    }
}
