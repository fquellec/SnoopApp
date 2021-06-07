import { NewspaperDetailPageComponent } from './newspapers/components/newspaper-detail-page/newspaper-detail-page.component';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'newspapers/:id', component: NewspaperDetailPageComponent
    },
    {
        path: '', component: HomePageComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
