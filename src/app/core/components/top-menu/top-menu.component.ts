import { SnoopApiService } from './../../services/snoop-api.service';
import { Newspaper } from './../../models/newspaper.model';
import { RoutingService } from './../../services/routing.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'snoop-top-menu-component',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

    public languages = ['en', 'fr'];
    public selectedLanguage = 'en';
    public newspaperList: Newspaper[] = [];
    @Input() public displaySearch = false;
    @Input() public displayMenuToggle = true;
    @Output() public hasToggledMenu = new EventEmitter();

    constructor(private routingService: RoutingService, private snoopService: SnoopApiService) { }

    public ngOnInit(): void {
        this.snoopService.getNewspapersList().subscribe({
            next: newspaperList => {
                this.newspaperList = newspaperList;
            }
        });
    }

    public changeLanguage(lang: string): void {
        this.selectedLanguage = lang;
    }

    public navigateToHomePage(): void {
        this.routingService.navigateToHomePage();
    }

}
