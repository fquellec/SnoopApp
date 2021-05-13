import { GraphsModule } from './../graphs/graphs.module';
import { CoreComponentsModule } from './../core-components/core-component.module';
import { NgModule } from '@angular/core';
import { SamplePageComponent } from './components/sample-page/sample-page.component';

@NgModule({

    declarations: [SamplePageComponent],
    imports: [CoreComponentsModule, GraphsModule],
    exports: [SamplePageComponent]
})
export class PagesModule { }