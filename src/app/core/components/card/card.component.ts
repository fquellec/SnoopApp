import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'snoop-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {

    @Input() title = '';
    @Input() bubble = false;
    @Output() hasClosedEvent = new EventEmitter();

    constructor() { }

    public onClose(): void {
        this.hasClosedEvent.emit();
    }

}
