import { HttpService } from './core/services/http.service';
import { NewspapersModule } from './newspapers/newspapers.module';
import { HomeModule } from './home/home.module';
import { GraphsModule } from './graphs/graphs.module';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
        HomeModule,
        NewspapersModule,
        HttpClientModule,
        NgxSpinnerModule,
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule { }
