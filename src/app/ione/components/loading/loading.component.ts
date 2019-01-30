import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, ReplaySubject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
})
export class LoadingComponent implements OnInit {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  private linesSubject = new BehaviorSubject<number>(13);
  @Input() set lines(lines: number) {
    this.linesSubject.next(lines);
  }
  private lengthSubject = new BehaviorSubject<number>(20);
  @Input() set length(length: number) {
    this.lengthSubject.next(length);
  }
  private widthSubject = new BehaviorSubject<number>(5);
  @Input() set width(width: number) {
    this.widthSubject.next(width);
  }
  private radiusSubject = new BehaviorSubject<number>(15);
  @Input() set radius(radius: number) {
    this.radiusSubject.next(radius);
  }
  private cornersSubject = new BehaviorSubject<number>(10);
  @Input() set corners(corners: number) {
    this.cornersSubject.next(corners);
  }
  private colorSubject = new BehaviorSubject<string>('#ffffff');
  @Input() set color(color: string) {
    this.colorSubject.next(color);
  }
  private fadeColorSubject = new BehaviorSubject<string>('#000000');
  @Input() set fadeColor(fadeColor: string) {
    this.fadeColorSubject.next(fadeColor);
  }
  private textSubject = new BehaviorSubject<string>('');
  @Input() set text(text: string) {
    this.textSubject.next(text);
  }


  spinnerItems$ = combineLatest(
    this.linesSubject,
    this.lengthSubject,
    this.widthSubject,
    this.radiusSubject,
    this.cornersSubject,
    this.colorSubject,
    this.fadeColorSubject,
  ).pipe(
    map(([lines, length, width, radius, corners, color, fadeColor]) => {
      const degreeUnit = 360 / lines;
      const duration = 1 / lines;
      return new Array(lines)
        .fill({})
        .map((spinnerItem, index) => {
          const spinnerItemStyle = {
            width: `${length}px`,
            height: `${width}px`,
            'background-color': `${fadeColor}`,
            top: `-${width / 2}px`,
            'border-radius': `${corners}px`,
            transform: `rotate(${degreeUnit * index}deg) translateX(${radius}px)`
          };
          const innerStyle = {
            'background-color': `${color}`,
            animation: `spinner-line-fade-quick 1s linear ${duration * index - 1}s infinite normal none running`,
            'border-radius': `${corners}px`
          };
          return {
            spinnerItemStyle,
            innerStyle
          };
        });
    }),
    takeUntil(this.destroyed$)
  );

  loadingText$ = combineLatest(
    this.lengthSubject,
    this.radiusSubject,
    this.colorSubject,
    this.fadeColorSubject,
    this.textSubject
  ).pipe(
    map(([length, radius, color, fadeColor, text]) => {
      const style = {
        top: `calc(50% + ${length + radius}px)`,
      };
      const spanStyle = {
        color: `${fadeColor}`,
      };
      return {
        style,
        spanStyle,
        text
      };
    }),
    takeUntil(this.destroyed$)
  );

  constructor() {

  }

  ngOnInit() {
  }

}
