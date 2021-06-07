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

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FontAwesomeModule,
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
    ]
})
export class CoreModule { }
