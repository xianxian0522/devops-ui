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
  appId = parseInt(localStorage.getItem('appId') as string, 10);

  getAppId(): void {
    // this.activatedRoute.queryParamMap.subscribe(query => {
    //   if (query && query.get('appId')) {
    //     localStorage.setItem('appId', query.get('appId') as string);
    //     this.appId = parseInt(query.get('appId') as string, 10);
    //   } else {
    //     const id = localStorage.getItem('appId') as string;
    //     this.appId = parseInt(id, 10);
    //   }
    // });
  }
}
