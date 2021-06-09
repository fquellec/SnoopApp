import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Newspaper } from './../../../core/models/newspaper.model';

@Component({
    selector: 'ana-newspaper-dashboard',
    templateUrl: './newspaper-dashboard.component.html',
    styleUrls: ['./newspaper-dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NewspaperDashboardComponent {

    @Input() bubbleDisplay = true;
    @Output() hasOpenedAnalysis = new EventEmitter();
    @Input() newspaper!: Newspaper;
    private openedAnalysis?: any;

    public openAnalysis(index: number): void {
        this.openedAnalysis = this.openedAnalysis === index ? undefined : index;
        this.bubbleDisplay = !this.bubbleDisplay;
        this.hasOpenedAnalysis.emit(index);
    }

}
