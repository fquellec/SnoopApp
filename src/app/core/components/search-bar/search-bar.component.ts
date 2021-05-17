import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'ana-search-bar-component',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    public searchInput: string = '';
    public searchIcon = faSearch;
    constructor() { }

    ngOnInit(): void {
    }

}
