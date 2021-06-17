import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../core/core.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GraphsModule } from './../graphs/graphs.module';
import { SamplePageComponent } from './components/sample-page/sample-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({

    declarations: [SamplePageComponent, NotFoundComponent],
    imports: [
        CommonModule,
        CoreModule,
        GraphsModule,
        MatButtonModule,
        MatIconModule,
    ],
    exports: [SamplePageComponent]
})
export class PagesModule { }
