import {Injectable, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  refresh = new EventEmitter();
  appId = 0;

  getAppId(): void {
    this.activatedRoute.queryParamMap.subscribe(query => {
      if (query && query.get('id')) {
        localStorage.setItem('appId', query.get('id') as string);
        this.appId = parseInt(query.get('id') as string, 10);
      } else {
        const id = localStorage.getItem('appId') as string;
        this.appId = parseInt(id, 10);
      }
    });
  }
}
