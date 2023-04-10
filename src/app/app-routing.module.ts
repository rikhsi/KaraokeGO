import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
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
