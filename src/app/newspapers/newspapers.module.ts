import { GraphsModule } from './../graphs/graphs.module';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewspaperDetailPageComponent } from './components/newspaper-detail-page/newspaper-detail-page.component';
import { NewspaperDashboardComponent } from './components/newspaper-dashboard/newspaper-dashboard.component';

@NgModule({
    declarations: [NewspaperDetailPageComponent, NewspaperDashboardComponent],
    imports: [
        CommonModule,
        CoreModule,
        GraphsModule
    ],
    exports: [NewspaperDashboardComponent]
})
export class NewspapersModule { }
