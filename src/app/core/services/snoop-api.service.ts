import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, share, switchMap } from 'rxjs/operators';
import { HttpService } from './http.service';
import { Newspaper } from '../models/newspaper.model';

@Injectable()
export class SnoopApiService {
    private url = 'https://snoop-app-server.vercel.app/api';
    private newsPaperList?: Observable<Newspaper[]>;

    constructor(private httpService: HttpService) { }

    public getNewspapersList(): Observable<Newspaper[]> {
        return this.newsPaperList ||
            this.httpService.get(`${this.url}/newslist`).pipe(
                switchMap((res: any) => {
                    this.newsPaperList = of(res.newslist);
                    return this.newsPaperList;
                }),
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
