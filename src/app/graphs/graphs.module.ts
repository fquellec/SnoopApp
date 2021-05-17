import { NgModule } from '@angular/core';
import { GaugeComponent } from './components/gauge/gauge.component';
import { BarsComponent } from './components/bars/bars.component';

@NgModule({

    declarations: [GaugeComponent, BarsComponent],
    exports: [
        GaugeComponent,
        BarsComponent
    ],
})
export class GraphsModule { }
