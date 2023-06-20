import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/home-page/home-page.component';

const routes: Routes = [
  { path: 'en', component: HomePageComponent },
  { path: 'ru', component: HomePageComponent },
  { path: 'cz', component: HomePageComponent },
  { path: 'de', component: HomePageComponent },
  { path: '**', redirectTo: 'en'},
  {
    path: "offer",
    loadChildren: () => import('./modules/offer/offer.module').then(m => m.OfferModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
