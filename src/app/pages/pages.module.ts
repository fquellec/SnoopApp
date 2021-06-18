import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from './../core/core.module';
import { GraphsModule } from './../graphs/graphs.module';
import { SamplePageComponent } from './components/sample-page/sample-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { MethodologyPageComponent } from './components/methodology-page/methodology-page.component';

@NgModule({

    declarations: [SamplePageComponent, NotFoundComponent, AboutPageComponent, MethodologyPageComponent],
    imports: [
        CommonModule,
        CoreModule,
        GraphsModule,
        NgxSpinnerModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
    ],
    exports: [SamplePageComponent]
})
export class PagesModule { }
