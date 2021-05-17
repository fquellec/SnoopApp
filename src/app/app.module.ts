import { GraphsModule } from './graphs/graphs.module';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        CoreModule,
        PagesModule,
        GraphsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
