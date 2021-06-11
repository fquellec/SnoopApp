import { GraphTypeEnum } from './../../../core/models/graph-type.enum';
import { Component, Input } from '@angular/core';
import { dummyTopicsGraph } from 'src/app/utils/testing/dummies/graphs.dummies';

@Component({
    selector: 'ana-bars',
    templateUrl: './bars.component.html',
    styleUrls: ['./bars.component.scss']
})
export class BarsComponent {
    @Input() public data: any[] = [];
    @Input() public graph = dummyTopicsGraph;
    // to use in template
    public GraphTypeEnum = GraphTypeEnum;

    view = '';//[number, number] = [900, 500];

    single = [
        {
            name: 'Sport',
            value: 4200
        },
        {
            name: 'Science',
            value: 4000
        },
        {
            name: 'Entertainment',
            value: 3000
        },
        {
            name: 'Politic',
            value: 2800
        },
        {
            name: 'Health',
            value: 1000
        }
        ,
        {
            name: 'Economy',
            value: 800
        }
    ];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showGridLines = false;
    showXAxisLabel = true;
    yAxisLabel = 'Topics';
    showYAxisLabel = true;
    xAxisLabel = 'Number of articles';
    // colorScheme = 'flame';
    colorScheme = {
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
    roundEdges = false;

    constructor() { }

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
