import { NewspaperService } from './services/newspaper.service';
import { MatIconModule } from '@angular/material/icon';
import { GraphsModule } from './../graphs/graphs.module';
import { CoreModule } from './../core/core.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewspaperDetailPageComponent } from './components/newspaper-detail-page/newspaper-detail-page.component';
import { NewspaperDashboardComponent } from './components/newspaper-dashboard/newspaper-dashboard.component';
import { NewspaperAnalysisComponent } from './components/newspaper-analysis/newspaper-analysis.component';

@NgModule({
    declarations: [NewspaperDetailPageComponent, NewspaperDashboardComponent, NewspaperAnalysisComponent],
    imports: [
        CommonModule,
        CoreModule,
        GraphsModule,
        MatIconModule,
        NgxSpinnerModule,
    ],
    exports: [NewspaperDashboardComponent],
    providers: [NewspaperService]
})
export class NewspapersModule { }
