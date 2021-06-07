import { RoutingService } from './../../services/routing.service';
import { NEWSPAPER_LIST } from './../../constants/newspaperslist';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ana-search-bar-component',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements AfterViewInit {

    @ViewChild('searchInput') searchInput!: ElementRef;
    public searchValue = '';
    public searchIcon = faSearch;
    public inputPlaceholder = 'Enter the name of a newspaper (e.g. Le Monde, Le Figaro)';
    public newspaperOptions = NEWSPAPER_LIST;

    constructor(private routingService: RoutingService) { }

    public ngAfterViewInit(): void {
        // Creates an Observable that emits events of a specific type coming from the search input
        fromEvent<any>(this.searchInput.nativeElement, 'keyup')
            .pipe(
                map((event: any) => event.target.value),
                debounceTime(400) // Discard emitted values that take less than the specified time between output
            )
            .subscribe((res) => {
                this.searchChange(res);
            });
    }

    /**
     * Searchs change event handler
     * @param searchValueChanged  search input change
     */
    public searchChange(searchValueChanged: any): void {
        this.searchValue = searchValueChanged;
        this.newspaperOptions = NEWSPAPER_LIST.filter(x => x.toLowerCase().includes(this.searchValue.toLowerCase()));
    }

    public navigateToNewspaper(newspaper: string): void {
        this.routingService.navigateToNewspaper(newspaper);
    }

}
