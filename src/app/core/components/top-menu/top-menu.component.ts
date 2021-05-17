import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ana-top-menu-component',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

    public languages = ['en', 'fr'];
    public selectedLanguage = 'en';
    constructor() { }

    ngOnInit(): void {
    }

    public changeLanguage(lang: string) {
        this.selectedLanguage = lang;
    }

}
