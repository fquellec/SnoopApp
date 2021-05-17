import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
    private serviceUrl: string = '';

    constructor(private http: HttpClient) { }

    /**
     * Get a resource
     * @template T Resource type
     * @param url Resource's url
     * @returns get Resource(s) retrieved
     */
    public get<T>(url: string): Observable<T> {
        return this.http.get<T>(url);
    }

    /**
   * Post a resource
   * @template T Resource type
   * @param url Resource's url
   * @param body Resource to post
   * @returns post HTTP Result
   */
    public post<T>(url: string, body: any): Observable<T> {
        return this.http.post<T>(url, body);
    }

    /**
     * Modify a resource
     * @template T Resource type
     * @param url Resource's url
     * @param body Resource to modify
     * @returns put Resource modified
     */
    public put<T>(url: string, body: any): Observable<T> {
        return this.http.put<T>(url, body);
    }

    /**
   * Delete a resource 
   * @template T Resource type
   * @param url Resource's url
   * @returns delete Resource deleted
   */
    public delete<T>(url: string): Observable<T> {
        return this.http.delete<T>(url);
    }
}