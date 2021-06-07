import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class SnoopApiService {
    constructor(private httpService: HttpService) { }

    public getNewspaperData(newspaperUrl: string): any {
        return this.httpService.get(newspaperUrl);
    }
}
