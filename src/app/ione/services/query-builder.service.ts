import { Injectable } from '@angular/core';
import { QueryControl, QueryGroup } from '../models/query.model';



@Injectable()
export class QueryBuilder {

  constructor() { }

  control(
    value: string = '',
    attributes: Array<string> = [],
    name: string = '',
    logical: 'and' | 'or' = 'or',
    operator: 'equalTo' | 'notEqualTo' | 'lessThan' | 'lessThanOrEqualTo'
      | 'greaterThan' | 'greaterThanOrEqualTo' | 'in' | 'notIn' | 'contains'
      | 'startWith' | 'endWith' | 'inRange' = 'contains',
    type: 'normal' | 'rsql' = 'rsql',
  ): QueryControl {
    return new QueryControl(
      value,
      attributes,
      name,
      logical,
      operator,
      type
    );
  }

  group(controlsConfig: { [key: string]: any }) {
    const controls: { [key: string]: QueryControl } = this.reduceControls(controlsConfig);
    return new QueryGroup(controls);
  }

  reduceControls(controlsConfig: { [k: string]: any }) {
    const controls: { [key: string]: QueryControl } = {};
    Object.keys(controlsConfig).forEach(controlName => {
      controls[controlName] = this.createControl(controlsConfig[controlName]);
    });
    return controls;
  }

  createControl(controlConfig: any): QueryControl {
    if (controlConfig instanceof QueryControl) {
      return controlConfig;
    } else if (Array.isArray(controlConfig)) {
      const value = controlConfig[0];
      const attributes: Array<string> = controlConfig.length > 1 ? controlConfig[1] : [];
      const name: string = controlConfig.length > 2 ? controlConfig[2] : '';
      const logical: 'and' | 'or' = controlConfig.length > 3 ? controlConfig[3] : 'or';
      const operator: 'equalTo' | 'notEqualTo' | 'lessThan' | 'lessThanOrEqualTo'
        | 'greaterThan' | 'greaterThanOrEqualTo' | 'in' | 'notIn' | 'contains'
        | 'startWith' | 'endWith' | 'inRange' = controlConfig.length > 4 ? controlConfig[4] : 'contains';
      const type: 'normal' | 'rsql' = controlConfig.length > 5 ? controlConfig[5] : 'rsql';
      return this.control(value, attributes, name, logical, operator, type);
    } else {
      return this.control(controlConfig);
    }
  }

}
