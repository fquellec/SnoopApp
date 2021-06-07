import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ana-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() title = '';
    @Input() bubble = false;

    constructor() { }

    ngOnInit(): void {
    }

}
