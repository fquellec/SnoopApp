import { dummyTrends } from './../../../utils/testing/dummies/data.dummy';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ana-newspaper-analysis',
    templateUrl: './newspaper-analysis.component.html',
    styleUrls: ['./newspaper-analysis.component.scss']
})
export class NewspaperAnalysisComponent {

    @Input() info = { title: '', content: '' };
    @Output() hasClosedAnalysis = new EventEmitter();
    public data = dummyTrends;

    public onClose(): void {
        this.hasClosedAnalysis.emit();
    }
}
