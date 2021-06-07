import { Newspaper } from './../../../core/models/newspaper.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ana-newspaper-detail-page',
    templateUrl: './newspaper-detail-page.component.html',
    styleUrls: ['./newspaper-detail-page.component.scss']
})
export class NewspaperDetailPageComponent implements OnInit {

    @Input() newspaper?: Newspaper = undefined;

    constructor() { }

    ngOnInit(): void {
    }

}
