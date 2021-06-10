import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Newspaper } from './../../core/models/newspaper.model';
import { SnoopApiService } from './../../core/services/snoop-api.service';

@Injectable({
    providedIn: 'root'
})
export class NewspaperService {

    constructor(private snoopService: SnoopApiService) { }

    public getNewsPaperAnalysis(newspaper: string): Observable<Newspaper> {
        return this.snoopService.getNewspaperData(newspaper);
    }
}
