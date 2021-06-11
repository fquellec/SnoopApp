import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ana-bars',
    templateUrl: './bars.component.html',
    styleUrls: ['./bars.component.scss']
})
export class BarsComponent {
    @Input() graphId = '0';
    @Input() public data: any[] = [];

    view : [number, number]= [900, 500];

    single = [
        {
            "name": "Sport",
            "value": 4200
        },
        {
            "name": "Science",
            "value": 4000
        },
        {
          "name": "Entertainment",
          "value": 3000
        },
        {
          "name": "Politic",
          "value": 2800
        },
        {
          "name": "Health",
          "value": 1000
        }
        ,
        {
          "name": "Economy",
          "value": 800
        }
      ];

    // options
    showXAxis: boolean = true;
    showYAxis: boolean = true;
    gradient: boolean = false;
    showLegend: boolean = false;
    showGridLines: boolean = false;
    showXAxisLabel: boolean = true;
    yAxisLabel: string = 'Topics';
    showYAxisLabel: boolean = true;
    xAxisLabel: string = 'Number of articles';
    colorScheme = "flame";
    roundEdges = false;

    constructor() {}

    onSelect(data:any): void {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }

    onActivate(data:any): void {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
    }

    onDeactivate(data:any): void {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }
}