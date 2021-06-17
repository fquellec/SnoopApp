import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Newspaper } from './../../../core/models/newspaper.model';

@Component({
    selector: 'snoop-newspaper-dashboard',
    templateUrl: './newspaper-dashboard.component.html',
    styleUrls: ['./newspaper-dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NewspaperDashboardComponent {

    public classes = [
        'corner1',
        'corner2',
        'left',
        'right',
        'corner3',
        'corner4'
    ];

    @Input() bubbleDisplay = true;
    @Output() hasOpenedAnalysis = new EventEmitter();
    @Input() newspaper!: Newspaper;
    public openedAnalysis?: any;

    public openAnalysis(index: number): void {
        this.openedAnalysis = index;
        this.bubbleDisplay = this.openedAnalysis === undefined;
        this.hasOpenedAnalysis.emit(index);
    }

}
