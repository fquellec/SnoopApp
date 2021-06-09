import * as d3 from 'd3';
import { Directive, AfterViewInit } from '@angular/core';

@Directive()
// tslint:disable-next-line: directive-class-suffix
export abstract class GraphModel implements AfterViewInit {
    public data: any[] = [];

    public graphId = '0';
    protected graphType = '';

    // style attributes
    protected margin = 50;
    protected width = 750 - (this.margin * 2);
    protected height = 400 - (this.margin * 2);

    protected svg: any;

    constructor() { }

    public ngAfterViewInit(): void {
        this.createSvg();
        this.draw();
    }

    private createSvg(): void {
        this.svg = d3.select(`figure#${this.graphType}${this.graphId}`)
            .append('svg')
            .attr('view-box', `0 0 ${this.width} ${this.height}`)
            .attr('width', this.width + (this.margin * 2))
            .attr('height', this.height + (this.margin * 2))
            .append('g')
            .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
    }

    public draw(): void { }
}
