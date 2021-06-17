import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'snoop-side-menu-component',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

    public selectedMenu = 'Dashboard';
    public titles: string[] = [
        'Dashboard',
        'About',
        'Methodology',
        'LaBite'
    ];

    constructor() { }

    ngOnInit(): void {
    }

    public changeSelectedMenu(menu: string): void {
        this.selectedMenu = menu;
    }
}
