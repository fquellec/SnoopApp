import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ana-newspaper-dashboard',
    templateUrl: './newspaper-dashboard.component.html',
    styleUrls: ['./newspaper-dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NewspaperDashboardComponent implements OnInit {

    @Input() newspaperName = '';

    constructor() { }

    ngOnInit(): void {
    }

}
