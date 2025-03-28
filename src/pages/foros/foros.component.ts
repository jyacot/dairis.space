import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ForoSliders, Foros, Foro } from './forots';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-foros',
    templateUrl: './foros.component.html',
    styleUrls: ['./foros.component.scss'],
    standalone: false
})
export class ForosComponent {
  foros: Foro[] = Foros;
  id$: Subject<string> = new Subject<string>();
  foro$: BehaviorSubject<Foro> = new BehaviorSubject<Foro>(null);

  constructor(private activatedRoute: ActivatedRoute) {
    this.id$.subscribe(id => {
      const foro = this.foros.find(f => f.id === Number(id));
      this.foro$.next(foro);
    })

    this.activatedRoute.params.subscribe(data => {
      if (data?.id) {
        this.id$.next(data.id);
      }
    })

  }



}
