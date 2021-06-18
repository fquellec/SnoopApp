import { Component, Input } from '@angular/core';

@Component({
    selector: 'snoop-page-component',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent {
    @Input() displayNavSearch = false;
}
