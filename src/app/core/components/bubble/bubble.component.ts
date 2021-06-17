import { StatInfo } from './../../models/stat-info.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'snoop-bubble',
    templateUrl: './bubble.component.html',
    styleUrls: ['./bubble.component.scss'],
})
export class BubbleComponent {

    @Input() title = '';
    @Input() info!: StatInfo;
    @Input() bubble = false;
    @Input() principal = false;
    @Input() corner = false;
    @Input() selected = false;
}
