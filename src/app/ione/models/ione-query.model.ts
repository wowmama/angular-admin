
export interface IoneQueryGroup {
  [propName: string]: IoneQueryControl;
}
export interface IoneQueryControl {
  setValue: () => IoneQueryControl;
  setAttibutes: () => IoneQueryControl;
  setName: () => IoneQueryControl;
  setNameAndValue: () => IoneQueryControl;
  setLogical: () => IoneQueryControl;
  setOperator: () => IoneQueryControl;
  setType: () => IoneQueryControl;
  readonly params: any;
  readonly isRsql: boolean;
}

export class IoneQueryBuilder {
  public static control(
    value: string = '',
    attributes: Array<string> = [],
    name: string = '',
    logical: 'and' | 'or' = 'or',
    operator: 'equalTo' | 'notEqualTo' | 'lessThan' | 'lessThanOrEqualTo'
      | 'greaterThan' | 'greaterThanOrEqualTo' | 'in' | 'notIn' | 'contains'
      | 'startWith' | 'endWith' | 'inRange' = 'contains',
    type: 'normal' | 'rsql' = 'rsql',
  ): IoneQueryControl {
    return new IoneQueryControlImpl(
      value,
      attributes,
      name,
      logical,
      operator,
      type
    );
  }

  public static getParams(group: IoneQueryGroup): any {
    const rsql = Object.keys(group)
      .filter(key => group[key].isRsql)
      .map(key => group[key].params)
      .filter(param => !!param)
      .join(';');
    const params = Object.keys(group)
      .filter(key => !group[key].isRsql)
      .reduce((results, key) => {
        return {
          ...results,
          ...group[key].params
        };
      }, {});

    return {
      rsql,
      ...params,
    };
  }
}

class IoneQueryControlImpl implements IoneQueryControl {
  constructor(
    private value: string = '',
    private attributes: Array<string> = [],
    private name: string = '',
    private logical: 'and' | 'or' = 'or',
    private operator: 'equalTo' | 'notEqualTo' | 'lessThan' | 'lessThanOrEqualTo'
      | 'greaterThan' | 'greaterThanOrEqualTo' | 'in' | 'notIn' | 'contains'
      | 'startWith' | 'endWith' | 'inRange' = 'contains',
    private type: 'normal' | 'rsql' = 'rsql',

  ) {
    if (!this.name) {
      this.name = this.value;
    }
  }

  setValue(value: string = ''): IoneQueryControlImpl {
    return new IoneQueryControlImpl(
      value,
      this.attributes,
      this.name,
      this.logical,
      this.operator,
      this.type
    );
  }
  setAttibutes(attributes: Array<string> = []): IoneQueryControlImpl {
    return new IoneQueryControlImpl(
      this.value,
      attributes,
      this.name,
      this.logical,
      this.operator,
      this.type
    );
  }
  setName(name: string = ''): IoneQueryControlImpl {
    return new IoneQueryControlImpl(
      this.value,
      this.attributes,
      name,
      this.logical,
      this.operator,
      this.type
    );
  }
  setNameAndValue(value: string = ''): IoneQueryControlImpl {
    return new IoneQueryControlImpl(
      value,
      this.attributes,
      value,
      this.logical,
      this.operator,
      this.type
    );
  }
  setLogical(logical: 'and' | 'or' = 'or'): IoneQueryControlImpl {
    return new IoneQueryControlImpl(
      this.value,
      this.attributes,
      this.name,
      logical,
      this.operator,
      this.type
    );
  }
  setOperator(operator: 'equalTo' | 'notEqualTo' | 'lessThan' | 'lessThanOrEqualTo'
    | 'greaterThan' | 'greaterThanOrEqualTo' | 'in' | 'notIn' | 'contains'
    | 'startWith' | 'endWith' = 'contains'): IoneQueryControlImpl {
    return new IoneQueryControlImpl(
      this.value,
      this.attributes,
      this.name,
      this.logical,
      operator,
      this.type
    );
  }
  setType(type: 'normal' | 'rsql' = 'rsql'): IoneQueryControlImpl {
    return new IoneQueryControlImpl(
      this.value,
      this.attributes,
      this.name,
      this.logical,
      this.operator,
      type
    );
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
    if (!this.value) {
      return { rsql: '' };
    }
    let rsql = '(';
    this.attributes.forEach(attribute => {
      switch (this.operator) {
        case 'equalTo':
          rsql += `${attribute}==${this.value}${this.queryLogical}`;
          break;
        case 'notEqualTo':
          rsql += `${attribute}!=${this.value}${this.queryLogical}`;
          break;
        case 'startWith':
          rsql += `${attribute}==${this.value}*${this.queryLogical}`;
          break;
        case 'endWith':
          rsql += `${attribute}==*${this.value}${this.queryLogical}`;
          break;
        case 'contains':
          rsql += `${attribute}==*${this.value}*${this.queryLogical}`;
          break;
        case 'lessThan':
          rsql += `${attribute}<${this.value}${this.queryLogical}`;
          break;
        case 'lessThanOrEqualTo':
          rsql += `${attribute}=le=${this.value}${this.queryLogical}`;
          break;
        case 'greaterThan':
          rsql += `${attribute}>${this.value}${this.queryLogical}`;
          break;
        case 'greaterThanOrEqualTo':
          rsql += `${attribute}=ge=${this.value}${this.queryLogical}`;
          break;
        case 'in':
          rsql += `${attribute}=in=(${this.value})${this.queryLogical}`;
          break;
        case 'notIn':
          rsql += `${attribute}=out=(${this.value})${this.queryLogical}`;
          break;
        default:
          rsql += `${attribute}==${this.value}${this.queryLogical}`;
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
          [attribute]: this.value,
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

}
