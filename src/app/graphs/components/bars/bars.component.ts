import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ana-bars',
    templateUrl: './bars.component.html',
    styleUrls: ['./bars.component.scss']
})
export class BarsComponent {
    @Input() graphId = '0';
    @Input() public data: any[] = [];

    constructor() {}

    options : any = {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [{
            inverse: true,
            type: 'category'
        }],
        series: [{
          name: 'Counters',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220],
          animationDelay: function(idx: number) {
            return idx * 250;
          },
          animationEasingUpdate: "linear"
        }],
        animationEasing: 'ElasticOut',
        animationDelayUpdate: 5,
    };
}