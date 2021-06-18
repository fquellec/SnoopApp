import { MethodologyPageComponent } from './pages/components/methodology-page/methodology-page.component';
import { AboutPageComponent } from './pages/components/about-page/about-page.component';
import { NewspaperDetailPageComponent } from './newspapers/components/newspaper-detail-page/newspaper-detail-page.component';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/components/not-found/not-found.component';

const routes: Routes = [
    { path: 'newspapers/:id', component: NewspaperDetailPageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'methodology', component: MethodologyPageComponent },
    { path: '', component: HomePageComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
