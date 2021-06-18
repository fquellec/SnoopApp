import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { RoutingService } from './services/routing.service';
import { SnoopApiService } from './services/snoop-api.service';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CardComponent } from './components/card/card.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PageComponent } from './components/page/page.component';
import { BubbleComponent } from './components/bubble/bubble.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        NgxSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        RouterModule,
    ],
    declarations: [
        SideMenuComponent,
        TopMenuComponent,
        SearchBarComponent,
        PageComponent,
        CardComponent,
        BubbleComponent,
    ],
    exports: [
        SideMenuComponent,
        TopMenuComponent,
        PageComponent,
        CardComponent,
        SearchBarComponent,
        BubbleComponent,
    ],
    providers: [
        SnoopApiService,
        RoutingService,
    ]
})
export class CoreModule { }
