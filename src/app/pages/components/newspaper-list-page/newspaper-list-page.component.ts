import { Component, OnInit } from '@angular/core';
import { Newspaper } from 'src/app/core/models/newspaper.model';
import { SnoopApiService } from 'src/app/core/services/snoop-api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'snoop-newspaper-list-page',
    templateUrl: './newspaper-list-page.component.html',
    styleUrls: ['./newspaper-list-page.component.scss']
})
export class NewspaperListPageComponent implements OnInit {
    public newspapersList: Newspaper[] = [];
    public loading = true;

    constructor(private snoopService: SnoopApiService, private loaderService: NgxSpinnerService) { }

    public ngOnInit(): void {
        this.loaderService.show();
        this.snoopService.getNewspapersList().subscribe({
            next: newspapersList => {
                this.loaderService.hide();
                this.loading = false;
                this.newspapersList = newspapersList;
            }, error: err => {
                // TODO handle error
                console.log(err);
                this.loading = false;
            }
        });
    }

}
