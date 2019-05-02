import { CheckoutQuadrinhoComponent } from './pages/checkout-quadrinho/checkout-quadrinho.component';
import { DetalheQuadrinhoComponent } from './pages/detalhe-quadrinho/detalhe-quadrinho.component';
import { Routes, RouterModule } from '@angular/router';
import { ListaQuadrinhosComponent } from './pages/lista-quadrinhos/lista-quadrinhos.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
// import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

// const routes: Routes =[
//   {
//     path: '',
//     redirectTo: 'quadrinhos',
//     pathMatch: 'full',
//   }, {
//     path: '',
//     component: AdminLayoutComponent,
//     children: [
//       {
//         path: '',
//         loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
//       }
//     ]
//   }, {
//     path: '**',
//     redirectTo: 'quadrinhos'
//   }
// ];

// @NgModule({
//   imports: [
//     CommonModule,
//     BrowserModule,
//     RouterModule.forRoot(routes)
//   ],
//   exports: [
//   ],
// })
// export class AppRoutingModule { }

const routes: Routes = [ 
  { path: 'detalhe-quadrinho/:id', component: DetalheQuadrinhoComponent },
  { path: 'checkout-quadrinho/:id', component: CheckoutQuadrinhoComponent },
  { path: '', component: ListaQuadrinhosComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);



