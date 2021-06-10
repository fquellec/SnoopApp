import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { HttpService } from './http.service';
import { Newspaper } from '../models/newspaper.model';

@Injectable()
export class SnoopApiService {
    private url = 'https://snoop-app-server.vercel.app/api';

    constructor(private httpService: HttpService) { }

    public getNewspapersList(): Observable<Newspaper[]> {
        return this.httpService.get(`${this.url}/newslist`).pipe(
            map((res: any) => res.newslist),
            share()
        );
    }

    public getNewspaperData(newspaperId: string): Observable<any> {
        return this.httpService.get(`${this.url}/news?name=${newspaperId}`).pipe(
            map((res: any) => {
                return res.news[0];
            })
        );
    }
}
