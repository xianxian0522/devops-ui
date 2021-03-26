import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API = '/api/v1/my';

@Injectable({
  providedIn: 'root'
})
export class BaseRepository<MODEl extends {ID?: number}> {
  constructor(protected httpClient: HttpClient) {}

  queryAll(url: string): Observable<MODEl[]> {
    return this.httpClient.get<MODEl[]>(`${API}/${url}`);
  }
  queryBizDetailsById(bizId: number): Observable<MODEl> {
    return this.httpClient.get<MODEl>(`${API}/biz/${bizId}`);
  }
  updateBizDetailsById(bizId: number, model: MODEl): Observable<MODEl> {
    return this.httpClient.patch<MODEl>(`${API}/biz/${bizId}`, model);
  }
  queryAllListByBizId(resourceUrl: string, bizId: number, q?: {[key: string]: any}): Observable<MODEl[]> {
    const params = this.genParams(q);
    const url = `${API}/biz/${bizId}/${resourceUrl}?${params.toString()}`;
    return this.httpClient.get<MODEl[]>(url);
  }
  transferUserByBizId(bizId: number, OwnerID: number): Observable<any> {
    return this.httpClient.patch(`${API}/biz/${bizId}/transfer`, {OwnerID});
  }
  updateOrAdd(bizId: number, model: MODEl): Observable<any> {
    return this.httpClient.post(`${API}/biz/${bizId}/member`, model);
  }
  deleteBizMemberById(id: number): Observable<any> {
    return this.httpClient.delete(`${API}/bizmember/${id}`);
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
