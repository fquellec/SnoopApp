import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'ana-root',
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
        let script = this._renderer2.createElement('script');
        script.type = `application/json`;
        script.src = "https://d3js.org/d3.v4.min.js";

        this._renderer2.appendChild(this._document.body, script);
    }
}
