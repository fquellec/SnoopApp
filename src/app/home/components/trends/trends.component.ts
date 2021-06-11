import { GraphTypeEnum } from './../../../core/models/graph-type.enum';
import { TrendsService } from './../../services/trends.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ana-trends',
    templateUrl: './trends.component.html',
    styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {

    public trendsData: any[] = [];
    public fetchDataError = false;

    constructor(private trendsService: TrendsService) { }

    public ngOnInit(): void {
        this.trendsService.getTrends().subscribe({
            next: data => {
                this.trendsData = data;
            }, error: () => {
                this.fetchDataError = true;
                // TODO: handle error
            }
        });
    }

}
