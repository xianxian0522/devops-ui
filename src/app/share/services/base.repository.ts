import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {App, AppReplicaSet, LogicIdcEnvResponse} from '../mode/app';
import {Bar} from '../mode/bar';

const API = '/api/v1/my';

@Injectable({
  providedIn: 'root'
})
export class BaseRepository<MODEl extends {ID?: number}> {
  constructor(protected httpClient: HttpClient) {}

  queryMenuBar(): Observable<Bar[]> {
    let api = '/api/my/bar';
    if (window.location.hostname.endsWith('dev.ops.sumscope.com')) {
      api = 'http://menu.dev.ops.sumscope.com:3000' + api;
    } else if (window.location.hostname.endsWith('ops.sumscope.com')) {
      api = 'http://menu.ops.sumscope.com' + api;
    }
    return this.httpClient.get<Bar[]>(api);
  }

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
  distributionHostToApp(bizId: number, appId: number, hostId: number): Observable<any> {
    return this.httpClient.post(`${API}/biz/${bizId}/app/${appId}/host/${hostId}`, {});
  }
  deleteDistributionHostToApp(bizId: number, appId: number, hostId: number): Observable<any> {
    return this.httpClient.delete(`${API}/biz/${bizId}/app/${appId}/host/${hostId}`);
  }


  updateOrAdd(urlFragment: string, id: number, model: MODEl, resourceUrl: string): Observable<any> {
    return this.httpClient.post(`${API}/${urlFragment}/${id}/${resourceUrl}`, model);
  }
  deleteMemberById(id: number, urlFragment: string): Observable<any> {
    return this.httpClient.delete(`${API}/${urlFragment}member/${id}`);
  }


  queryDetailsById(id: number, resourceUrl: string): Observable<MODEl> {
    return this.httpClient.get<MODEl>(`${API}/${resourceUrl}/${id}`);
  }
  updateDetailsById(id: number, model: MODEl, resourceUrl: string): Observable<MODEl> {
    return this.httpClient.patch<MODEl>(`${API}/${resourceUrl}/${id}`, model);
  }
  queryAllListByAppId(resourceUrl: string, appId: number, q?: {[key: string]: any}): Observable<MODEl[]> {
    return this.httpClient.get<MODEl[]>(`${API}/app/${appId}/${resourceUrl}`);
  }
  transferUserByAppId(appId: number, OwnerID: number): Observable<any> {
    return this.httpClient.patch(`${API}/app/${appId}/transfer`, {OwnerID});
  }

  queryAllLogicIdcEnv(): Observable<LogicIdcEnvResponse[]> {
    return this.httpClient.get<LogicIdcEnvResponse[]>(`${API}/logicidcenv`);
  }
  clusterBindLogicIdcEnv(clusterId: number, logicidcenvId: number): Observable<any> {
    return this.httpClient.post(`${API}/cluster/${clusterId}/logicidcenv/${logicidcenvId}`, {});
  }
  deleteClusterBindLogicIdcEnv(clusterId: number, logicidcenvId: number): Observable<any> {
    return this.httpClient.delete(`${API}/cluster/${clusterId}/logicidcenv/${logicidcenvId}`);
  }
  getRsByClusterId(clusterId: number): Observable<AppReplicaSet[]> {
    return this.httpClient.get<AppReplicaSet[]>(`${API}/cluster/${clusterId}/rs`);
  }
  queryRsInstance(rsId: number): Observable<any> {
    return this.httpClient.get(`${API}/rs/${rsId}/instance`);
  }
  addInstance(rsId: number, model: MODEl): Observable<any> {
    return this.httpClient.post(`${API}/rs/${rsId}`, model);
  }
  update(model: MODEl): Observable<any> {
    return this.httpClient.patch(`${API}/instnace/${model.ID}`, model);
  }
  queryAppHostInstance(appId: number, hostId: number): Observable<any> {
    return this.httpClient.get(`${API}/app/${appId}/host/${hostId}/instance`);
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
