import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ana-card',
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
