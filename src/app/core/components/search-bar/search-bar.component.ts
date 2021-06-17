import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { RoutingService } from './../../services/routing.service';
import { Newspaper } from './../../models/newspaper.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'snoop-search-bar-component',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements AfterViewInit {

    @Input() small = false;
    @Input() options: Newspaper[] = [];
    @Input() loading = true;
    @ViewChild('searchInput') searchInput!: ElementRef;
    public filteredOptions: Newspaper[] = [];
    public searchValue = '';
    public inputPlaceholder = 'Enter the name of a newspaper (e.g. Le Monde, Le Figaro)';

    constructor(private routingService: RoutingService, private loaderService: NgxSpinnerService) { }

    public ngAfterViewInit(): void {
        this.loaderService.show();
        // Creates an Observable that emits events of a specific type coming from the search input
        fromEvent<any>(this.searchInput.nativeElement, 'keyup')
            .pipe(
                map((event: any) => event.target.value),
                debounceTime(200) // Discard emitted values that take less than the specified time between output
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
        this.filteredOptions = this.options.filter(x => x.title.toLowerCase().includes(this.searchValue.toLowerCase()));
    }

    public navigateToNewspaper(newspaper: string): void {
        this.routingService.navigateToNewspaper(newspaper);
    }

    public getFilteredOptions(): Newspaper[] {
        this.filteredOptions = this.options.filter(x => this.formatSearch(x.title).includes(this.formatSearch(this.searchValue)));
        return this.filteredOptions;
    }

    public formatSearch(search: string): string {
        return search.toLowerCase().replace(/ /g, '').trim();
    }
}
