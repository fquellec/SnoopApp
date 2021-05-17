import { CommonModule } from '@angular/common';
import { GraphsModule } from './../graphs/graphs.module';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { SamplePageComponent } from './components/sample-page/sample-page.component';

@NgModule({

    declarations: [SamplePageComponent],
    imports: [
        CommonModule,
        CoreModule,
        GraphsModule
    ],
    exports: [SamplePageComponent]
})
export class PagesModule { }
