import { NgModule } from '@angular/core';
import { GaugeComponent } from './components/gauge/gauge.component';
import { BarsComponent } from './components/bars/bars.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
    imports: [
        NgxEchartsModule.forRoot({
          echarts: () => import('echarts'),
        }),
      ],
    declarations: [GaugeComponent, BarsComponent],
    exports: [
        GaugeComponent,
        BarsComponent
    ],
})
export class GraphsModule { }
