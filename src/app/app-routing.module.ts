import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlocksComponent } from './blocks/blocks.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { PricingComponent } from './pricing/pricing.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'blocks',
    component: BlocksComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
  
})

export class AppRoutingModule { }
