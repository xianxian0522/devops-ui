import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API = '/api/v1/my';

@Injectable({
  providedIn: 'root'
})
export class BaseRepository<MODEl extends {id?: number}> {
  constructor(protected httpClient: HttpClient) {}

  queryAll(): Observable<any> {
    return this.httpClient.get(`${API}/biz`);
  }
  queryBizAllApp(bizId?: number): Observable<any> {
    const url = `${API}/biz/${encodeURIComponent('{biz-id}')}/app`;
    return this.httpClient.patch(url, null);
  }

  queryPage(page: number, size: number, q?: {[key: string]: any}): Observable<any> {
    const params = this.genParams(q);
    const requestUrl = `${API}?size=${size}&page=${page}&${params.toString()}`;
    return this.httpClient.get(requestUrl);
  }

  protected genParams(q?: {[key: string]: any}): URLSearchParams {
    const params = new URLSearchParams();
    const addValue = (key: string, value: any) => {
      if (value === 0) {
        value = '0';
      }
      if (value === false) {
        value = 'false';
      }
      if (value) {
        params.append(key, value);
      }
    };
    if (q) {
      Object.keys(q).forEach(k => {
        const v = q[k];
        if (v instanceof Array) {
          v.forEach(vv => addValue(k, vv));
          return;
        }
        addValue(k, v);
      });
    }
    return params;
  }

}
