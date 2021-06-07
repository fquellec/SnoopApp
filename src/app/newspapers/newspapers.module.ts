import { GraphsModule } from './../graphs/graphs.module';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewspaperDetailPageComponent } from './components/newspaper-detail-page/newspaper-detail-page.component';


@NgModule({
    declarations: [NewspaperDetailPageComponent],
    imports: [
        CommonModule,
        CoreModule,
        GraphsModule
    ]
})
export class NewspapersModule { }
