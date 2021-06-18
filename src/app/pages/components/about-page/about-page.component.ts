import { Component } from '@angular/core';
import { Newspaper } from 'src/app/core/models/newspaper.model';

@Component({
    selector: 'snoop-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
    public newspapersList: Newspaper[] = [];
    public loading = true;

    constructor() { }
}
