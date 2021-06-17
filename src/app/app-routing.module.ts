import { NewspaperDetailPageComponent } from './newspapers/components/newspaper-detail-page/newspaper-detail-page.component';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/components/not-found/not-found.component';

const routes: Routes = [
    { path: 'newspapers/:id', component: NewspaperDetailPageComponent },
    { path: '', component: HomePageComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
