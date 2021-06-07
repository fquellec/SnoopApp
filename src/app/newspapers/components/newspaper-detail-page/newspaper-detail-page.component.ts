import { Newspaper } from './../../../core/models/newspaper.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ana-newspaper-detail-page',
    templateUrl: './newspaper-detail-page.component.html',
    styleUrls: ['./newspaper-detail-page.component.scss']
})
export class NewspaperDetailPageComponent implements OnInit {

    public newspaper?: Newspaper = undefined;
    public newspaperName = '';

    constructor(private activatedRoute: ActivatedRoute) { }

    public ngOnInit(): void {
        this.activatedRoute.params.subscribe({
            next: params => {
                this.newspaperName = params.id;
            }
        });
    }

}
