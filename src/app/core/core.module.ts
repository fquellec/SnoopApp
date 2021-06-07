import { RoutingService } from './services/routing.service';
import { SnoopApiService } from './services/snoop-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NgModule } from '@angular/core';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageComponent } from './components/page/page.component';
import { CardComponent } from './components/card/card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FontAwesomeModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatIconModule,
    ],
    declarations: [
        SideMenuComponent,
        TopMenuComponent,
        SearchBarComponent,
        PageComponent,
        CardComponent,
    ],
    exports: [
        SideMenuComponent,
        TopMenuComponent,
        PageComponent,
        CardComponent,
        SearchBarComponent,
    ],
    providers: [
        SnoopApiService,
        RoutingService,
    ]
})
export class CoreModule { }
