import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'snoop-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Snoop';

    constructor(
        private _renderer2: Renderer2,
        @Inject(DOCUMENT) private _document: Document
    ) { }

    public ngOnInit(): void {
        /* this.addScript('https://d3js.org/d3.v4.min.js');
        this.addScript('js/sentimentGauge.js'); */
    }

    public addScript(src: string, type?: string, ): void {
        let script = this._renderer2.createElement('script');
        script.type = type || `application/json`;
        script.src = src;

        this._renderer2.appendChild(this._document.body, script);
    }
}
