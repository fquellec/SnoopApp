import { dummyTrendsResponse } from './../../utils/testing/dummies/data.dummy';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from './../../core/services/http.service';

@Injectable({
    providedIn: 'root'
})
export class TrendsService {

    constructor(private httpService: HttpService) { }

    public getTrends(): Observable<any> {
        return dummyTrendsResponse;
    }
}
