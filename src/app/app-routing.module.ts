import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { ErrorPageComponent } from './error-page/error-page.component';



const appRoutes: Routes = [
    { path: '', component:  HomeComponent },
    { path: 'portfolio', component:  PortfolioComponent},
    { path: 'resume',  component:  ResumeComponent},
    { path: 'about',  component:  AboutComponent},
    
    //{ path: 'not-found', component: PageNotFoundComponent},
    //{ path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},

    //{ path: '**', redirectTo: '/not-found', pathMatch: 'full'}    

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    // RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}