import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Newspaper } from './../../core/models/newspaper.model';
import { SnoopApiService } from './../../core/services/snoop-api.service';
import { dummyNewspaperResponse } from 'src/app/utils/testing/dummies/newspapers.dummy';

@Injectable({
    providedIn: 'root'
})
export class NewspaperService {

    constructor(private snoopService: SnoopApiService) { }

    public getNewsPaperAnalysis(newspaper: string): Observable<Newspaper> {
        return this.snoopService.getNewspaperData(newspaper);
    }
}
