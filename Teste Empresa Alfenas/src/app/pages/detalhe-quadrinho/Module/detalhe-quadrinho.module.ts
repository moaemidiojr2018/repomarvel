import { DetalheQuadrinhoComponent } from './../detalhe-quadrinho.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const ROUTES: Routes = [
  { path: '', component: DetalheQuadrinhoComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [DetalheQuadrinhoComponent],
})
export class DetalheQuadrinhoModule {

}
