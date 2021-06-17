import { RoutingService } from './../../../core/services/routing.service';
import { Component } from '@angular/core';

@Component({
    selector: 'snoop-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

    constructor(private routingService: RoutingService) { }

    public navigateToHome(): void {
        this.routingService.navigateToHomePage();
    }
}
