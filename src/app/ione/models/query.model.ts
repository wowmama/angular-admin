import { FormControl, FormGroup } from '@angular/forms';

export class QueryGroup {

  constructor(public controls: { [key: string]: QueryControl } = {}) {

  }

  setControl(name: string, control: QueryControl): void {
    delete (this.controls[name]);
    this.controls[name] = control;
  }

  removeControl(name: string): void {
    delete (this.controls[name]);
  }

  contains(controlName: string): boolean {
    return this.controls.hasOwnProperty(controlName);
  }

  setValue(value: { [key: string]: any }): void {
    this.checkAllValuesPresent(value);
    Object.keys(value).forEach(name => {
      this.throwIfControlMissing(name);
      this.controls[name].setValue(value[name]);
    });
  }

  patchValue(value: { [key: string]: any }): QueryGroup {
    Object.keys(value).forEach(name => {
      if (this.controls[name]) {
        this.controls[name].setValue(value[name]);
      }
    });
    return this;
  }

  private forEachChild(cb: (v: any, k: string) => void): void {
    Object.keys(this.controls).forEach(k => cb(this.controls[k], k));
  }

  private checkAllValuesPresent(value: any): void {
    this.forEachChild((control: QueryControl, name: string) => {
      if (value[name] === undefined) {
        throw new Error(`Must supply a value for form control with name: '${name}'.`);
      }
    });
  }

  private throwIfControlMissing(name: string): void {
    if (!Object.keys(this.controls).length) {
      throw new Error(`
        There are no query controls registered with this group yet.`);
    }
    if (!this.controls[name]) {
      throw new Error(`Cannot find query control with name: ${name}.`);
    }
  }

  get params(): any {
    const rsql = Object.keys(this.controls)
      .filter(key => this.controls[key].isRsql)
      .map(key => this.controls[key].params)
      .filter(param => !!param)
      .join(';');
    const params = Object.keys(this.controls)
      .filter(key => !this.controls[key].isRsql)
      .reduce((results, key) => {
        return {
          ...results,
          ...this.controls[key].params
        };
      }, {});

    return {
      rsql,
      ...params,
    };
  }

  get formGroup(): FormGroup {
    const controls: { [key: string]: FormControl } = {};
    Object.keys(this.controls).forEach(controlName => {
      controls[controlName] = this.controls[controlName].formControl;
    });
    return new FormGroup(controls);
  }
}

export class QueryControl {
  constructor(
    private _value: string = '',
    private attributes: Array<string> = [],
    private name: string = '',
    private logical: 'and' | 'or' = 'or',
    private operator: 'equalTo' | 'notEqualTo' | 'lessThan' | 'lessThanOrEqualTo'
      | 'greaterThan' | 'greaterThanOrEqualTo' | 'in' | 'notIn' | 'contains'
      | 'startWith' | 'endWith' | 'inRange' = 'contains',
    private type: 'normal' | 'rsql' = 'rsql') {
    if (!this.name) {
      this.name = this._value;
    }
  }

  get value(): string {
    return this._value;
  }

  setValue(value: string = ''): QueryControl {
    this._value = value;
    return this;
  }
  setAttibutes(attributes: Array<string> = []): QueryControl {
    this.attributes = attributes;
    return this;
  }
  setName(name: string = ''): QueryControl {
    this.name = name;
    return this;
  }
  setNameAndValue(value: string = ''): QueryControl {
    this._value = value;
    this.name = value;
    return this;
  }
  setLogical(logical: 'and' | 'or' = 'or'): QueryControl {
    this.logical = logical;
    return this;
  }
  setOperator(operator: 'equalTo' | 'notEqualTo' | 'lessThan' | 'lessThanOrEqualTo'
    | 'greaterThan' | 'greaterThanOrEqualTo' | 'in' | 'notIn' | 'contains'
    | 'startWith' | 'endWith' = 'contains'): QueryControl {
    this.operator = operator;
    return this;
  }

  setType(type: 'normal' | 'rsql' = 'rsql'): QueryControl {
    this.type = type;
    return this;
  }

  private get queryLogical(): ';' | ',' {
    switch (this.logical) {
      case 'and':
        return ';';
      default:
      case 'or':
        return ',';
    }
  }

  private getRsql(): { rsql: string } {
    if (!this._value) {
      return { rsql: '' };
    }
    let rsql = '(';
    this.attributes.forEach(attribute => {
      switch (this.operator) {
        case 'equalTo':
          rsql += `${attribute}==${this._value}${this.queryLogical}`;
          break;
        case 'notEqualTo':
          rsql += `${attribute}!=${this._value}${this.queryLogical}`;
          break;
        case 'startWith':
          rsql += `${attribute}==${this._value}*${this.queryLogical}`;
          break;
        case 'endWith':
          rsql += `${attribute}==*${this._value}${this.queryLogical}`;
          break;
        case 'contains':
          rsql += `${attribute}==*${this._value}*${this.queryLogical}`;
          break;
        case 'lessThan':
          rsql += `${attribute}<${this._value}${this.queryLogical}`;
          break;
        case 'lessThanOrEqualTo':
          rsql += `${attribute}=le=${this._value}${this.queryLogical}`;
          break;
        case 'greaterThan':
          rsql += `${attribute}>${this._value}${this.queryLogical}`;
          break;
        case 'greaterThanOrEqualTo':
          rsql += `${attribute}=ge=${this._value}${this.queryLogical}`;
          break;
        case 'in':
          rsql += `${attribute}=in=(${this._value})${this.queryLogical}`;
          break;
        case 'notIn':
          rsql += `${attribute}=out=(${this._value})${this.queryLogical}`;
          break;
        default:
          rsql += `${attribute}==${this._value}${this.queryLogical}`;
          break;
      }
    });
    rsql = `${rsql.slice(0, -1)})`;
    return {
      rsql
    };
  }

  get params(): any {
    if (this.attributes.length <= 0) {
      return {};
    }
    if (this.type === 'normal') {
      return this.attributes.reduce((params: any, attribute) => {
        return {
          ...params,
          [attribute]: this._value,
        };
      }, {});
    }
    if (this.type === 'rsql') {
      return this.getRsql().rsql;
    }
  }

  get isRsql(): boolean {
    return this.type === 'rsql';
  }

  get formControl(): FormControl {
    return new FormControl(this.value);
  }

}
