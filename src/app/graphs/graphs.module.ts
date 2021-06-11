import { NgModule } from '@angular/core';
import { GaugeComponent } from './components/gauge/gauge.component';
import { BarsComponent } from './components/bars/bars.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
    imports: [
        NgxChartsModule,
      ],
    declarations: [GaugeComponent, BarsComponent],
    exports: [
        GaugeComponent,
        BarsComponent
    ],
})
export class GraphsModule { }
