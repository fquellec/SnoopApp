import { Component, OnInit } from '@angular/core';
import { SnoopApiService } from './../../../core/services/snoop-api.service';
import { Newspaper } from './../../../core/models/newspaper.model';

@Component({
    selector: 'ana-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    public loading = true;
    public newspaperList: Newspaper[] = [];
    constructor(private snoopService: SnoopApiService) { }

    public ngOnInit(): void {
        this.snoopService.getNewspapersList().subscribe({
            next: res => {
                this.newspaperList = res;
                this.loading = false;
            }, error: err => {
                this.loading = false;
                // TODO handle error
                console.log(err);
            }
        });
    }

}
