import { dummyTrends } from './../../../utils/testing/dummies/data.dummy';
import { Component } from '@angular/core';

@Component({
    selector: 'ana-sample-page',
    templateUrl: './sample-page.component.html',
    styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent {

    public sampleData = dummyTrends;
    constructor() { }
}
