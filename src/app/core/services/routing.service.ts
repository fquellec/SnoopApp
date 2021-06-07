import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RoutingService {

    private newspaperUrl = 'newspapers';

    constructor(private router: Router) { }

    public navigateToNewspaper(newspaper: string): void {
        this.router.navigate([this.newspaperUrl, newspaper]);
    }

    public navigateToHomePage(): void {
        this.router.navigate(['']);
    }
}
