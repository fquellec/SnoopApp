import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Analysis } from './../../../core/models/analysis.model';

@Component({
    selector: 'snoop-newspaper-analysis',
    templateUrl: './newspaper-analysis.component.html',
    styleUrls: ['./newspaper-analysis.component.scss']
})
export class NewspaperAnalysisComponent {

    @Input() analysis!: Analysis;
    @Output() hasClosedAnalysis = new EventEmitter();

    public onClose(): void {
        this.hasClosedAnalysis.emit();
    }
}
