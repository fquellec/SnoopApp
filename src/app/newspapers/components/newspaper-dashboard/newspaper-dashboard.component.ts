import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ana-newspaper-dashboard',
    templateUrl: './newspaper-dashboard.component.html',
    styleUrls: ['./newspaper-dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NewspaperDashboardComponent {

    @Input() bubbleDisplay = true;
    @Output() hasOpenedAnalysis = new EventEmitter();
    @Input() newspaperName = '';
    @Input() info = [{ title: '', content: '' }];
    private openedAnalysis?: any;

    public openAnalysis(index: number): void {
        this.openedAnalysis = this.openedAnalysis === index ? undefined : index;
        this.bubbleDisplay = !this.bubbleDisplay;
        this.hasOpenedAnalysis.emit(index);
    }

}
