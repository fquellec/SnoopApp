import { dummyNewspaperInfoResponse } from './../../utils/testing/dummies/data.dummy';
import { SnoopApiService } from './../../core/services/snoop-api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NewspaperService {

    constructor(private snoopService: SnoopApiService) { }

    public getNewsPaperAnalysis(newspaper: string): Observable<any> {
        return dummyNewspaperInfoResponse;
    }
}
