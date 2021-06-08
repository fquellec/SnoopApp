import { Component, Input } from '@angular/core';

@Component({
    selector: 'ana-bubble',
    templateUrl: './bubble.component.html',
    styleUrls: ['./bubble.component.scss'],
})
export class BubbleComponent {

    @Input() title = '';
    @Input() info = '';
    @Input() bubble = true;
    @Input() principal = false;
    @Input() corner = false;
}
