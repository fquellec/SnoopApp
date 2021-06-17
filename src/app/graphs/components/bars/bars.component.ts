import { Component, Input } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { GraphTypeEnum } from './../../../core/models/graph-type.enum';
import { dummyTopicsGraph } from 'src/app/utils/testing/dummies/graphs.dummies';

@Component({
    selector: 'snoop-bars',
    templateUrl: './bars.component.html',
    styleUrls: ['./bars.component.scss']
})
export class BarsComponent {
    @Input() public data: any[] = [];
    @Input() public graph = dummyTopicsGraph;
    // to use in template
    public GraphTypeEnum = GraphTypeEnum;

    // options
    public view!: [number, number];
    public showXAxis = true;
    public showYAxis = true;
    public gradient = false;
    public showLegend = false;
    public showGridLines = false;
    public showXAxisLabel = true;
    public yAxisLabel = 'Topics';
    public showYAxisLabel = true;
    public xAxisLabel = 'Number of articles';
    public maxYAxisTickLength = 16;

    public colorScheme = {
        domain: [
            '#F97F51',
            '#1B9CFC',
            '#F8EFBA',
            '#58B19F',
            '#25CCF7',
            '#B33771',
            '#FEA47F',
            '#EAB543',
            '#55E6C1',
            '#3B3B98',
            '#FD7272',
            '#9AECDB',
            '#D6A2E8',
            '#6D214F',
            '#182C61',
            '#FC427B',
            '#BDC581',
            '#82589F',
        ]
    };
    public roundEdges = false;

    public yAxisTickFormatting = () => '';

    constructor(private deviceDetector: DeviceDetectorService) {
        if (this.deviceDetector.isMobile()) {
            this.view = [window.innerWidth * 0.85, window.innerHeight * 0.6];
            this.showYAxisLabel = false;
            this.showLegend = false;
        }
    }

    public onSelect(data: any): void {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }

    public onActivate(data: any): void {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
    }

    public onDeactivate(data: any): void {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }
}
