import { TrendsService } from './services/trends.service';
import { GraphsModule } from './../graphs/graphs.module';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TrendsComponent } from './components/trends/trends.component';

@NgModule({
    declarations: [HomePageComponent, TrendsComponent],
    imports: [
        CommonModule,
        CoreModule,
        GraphsModule
    ],
    exports: [HomePageComponent],
    providers: [TrendsService]
})
export class HomeModule { }
