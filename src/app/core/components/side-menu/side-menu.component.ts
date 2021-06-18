import { Component, ViewChild } from '@angular/core';
import { RoutingService } from './../../services/routing.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'snoop-side-menu-component',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {

    @ViewChild('sidenav') sidenav!: MatSidenav;

    public menuItems: { title: string, route: string }[] = [
        { title: 'Home', route: '' },
        { title: 'About', route: 'about' },
        { title: 'Methodology', route: 'methodology' },
    ];

    public mode: string;


    constructor(private deviceDetector: DeviceDetectorService, private routingService: RoutingService) {
        this.mode = this.deviceDetector.isMobile() ? 'over' : 'side';
    }

    public isOpened(): boolean {
        return this.sidenav?.opened;
    }

    public goToPage(route: string): void {
        this.sidenav.close();
        this.routingService.navigateTo(route);
    }

    public toggle(): void {
        this.sidenav.toggle();
    }
}
