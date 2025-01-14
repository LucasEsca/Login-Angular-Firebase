import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { BaseInterface, RequestOptions } from '@api/interfaces/base.interface';
import { Injectable, inject } from '@angular/core';

/**
 * A service that extends from Angular HttpClient
 */
@Injectable({ providedIn: 'root' })
export class BaseService implements BaseInterface {
  private readonly API = environment.apiUrl;
  private readonly http = inject(HttpClient);

  /**
   * GET request
   * @param {string} endPoint end point for the get by Id
   * @param {RequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public getById<T>(endPoint: string, options?: RequestOptions): Observable<T> {
    return this.http.get<T>(`${this.API}${endPoint}`, options);
  }

  /**
   * GET request
   * @param {string} endPoint end point for the get
   * @param {RequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public get<T>(endPoint: string, options?: RequestOptions): Observable<T> {
    return this.http.get<T>(`${this.API}${endPoint}`, options);
  }

  /**
   * POST request
   * @param {string} endPoint end point of the api
   * @param {RequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public post<T>(endPoint: string, options?: RequestOptions): Observable<T> {
    return this.http.post<T>(`${this.API}${endPoint}`, options);
  }

  /**
   * PUT request
   * @param {string} endPoint end point of the api
   * @param {RequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public put<T>(endPoint: string, options?: RequestOptions): Observable<T> {
    return this.http.put<T>(`${this.API}${endPoint}`, options);
  }

  /**
   * DELETE request
   * @param {string} endPoint end point of the api
   * @param {RequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public delete<T>(endPoint: string, options?: RequestOptions): Observable<T> {
    return this.http.delete<T>(`${this.API}${endPoint}`, options);
  }
}
