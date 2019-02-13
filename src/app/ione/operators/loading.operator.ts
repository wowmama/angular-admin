import { Observable, of, OperatorFunction } from 'rxjs';
import { catchError, concat, switchMap } from 'rxjs/operators';
import * as UUID from 'uuid';
import { AddLoading, RemoveLoading } from '../stores/actions/loading.action';

export function switchMapAndLoading(observable: (...args: any[]) => Observable<any>, text: string = ''): OperatorFunction<any, any> {
  return function (source$: Observable<any>): Observable<any> {
    const uuid: string = UUID.v4();
    return source$.pipe(
      switchMap((...args: any[]) => {
        return of(new AddLoading(text, uuid)).pipe(
          concat(observable(...args).pipe(
            concat(of(new RemoveLoading(uuid))),
            catchError(err => {
              return of(new RemoveLoading(uuid));
            }),
          ))
        );
      })
    );
  };
}
