import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { tap, switchMap } from 'rxjs/operators';
import { dummyNewspaperResponse } from 'src/app/utils/testing/dummies/data.dummy';

@Injectable()
export class SnoopApiService {
    private url = 'https://snoop-app-server.vercel.app/api/newsMedia.js';
    constructor(private httpService: HttpService) { }

    public getNewspaperData(newspaperUrl: string): any {
        return this.httpService.get(this.url).pipe(
            switchMap(res => {
                console.log(res)
                return dummyNewspaperResponse;//this.httpService.get(newspaperUrl);
            })
        );
        //return this.httpService.get(newspaperUrl);
    }
}
