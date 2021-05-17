import { Component, Input } from '@angular/core';
import * as d3 from 'd3';
import { GraphModel } from '../../models/graph.model';


@Component({
    selector: 'ana-gauge',
    templateUrl: './gauge.component.html',
    styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent extends GraphModel {
    @Input() public graphId: number = 0;
    @Input() public data: any[] = [];

    constructor() {
        super();
        this.graphType = 'gauge';
    }

    public draw(): void {
        this.drawBars(this.data);
    }

    private drawBars(data: any[]): void {
        // Create the X-axis band scale
        const x = d3.scaleBand()
            .range([0, this.width])
            .domain(data.map(d => d.Framework))
            .padding(0.2);

        // Draw the X-axis on the DOM
        this.svg.append("g")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

        // Create the Y-axis band scale
        const y = d3.scaleLinear()
            .domain([0, 200000])
            .range([this.height, 0]);

        // Draw the Y-axis on the DOM
        this.svg.append("g")
            .call(d3.axisLeft(y));

        // Create and fill the bars
        this.svg.selectAll("bars")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d: any) => x(d.Framework))
            .attr("y", (d: any) => y(d.Stars))
            .attr("width", x.bandwidth())
            .attr("height", (d: any) => this.height - y(d.Stars))
            .attr("fill", "#d04a35");
    }
}
