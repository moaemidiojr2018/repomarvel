
import { Routes } from '@angular/router';
import { ListaQuadrinhosComponent } from '../../pages/lista-quadrinhos/lista-quadrinhos.component';

import { CheckoutQuadrinhoComponent } from '../../pages/checkout-quadrinho/checkout-quadrinho.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: '', component: ListaQuadrinhosComponent, pathMatch: 'full',
        
        children: [
            {
                path: 'pages/detalhe-quadrinho/:id',
                loadChildren: './pages/detalhe-quadrinho/Module/detalhe-quadrinho.module#DetalheQuadrinhoModule'
            },
            {
                path: 'checkout-quadrinho',
                loadChildren: 'checkout-quadrinho/:id', component: CheckoutQuadrinhoComponent
            }
        ]
    },
    //  { path: '**', component: NotFoundComponent }

    // { path: 'quadrinhos', component: ListaQuadrinhosComponent },
    //  { loadChildren: 'detalhe-quadrinho/:id', component: DetalheQuadrinhoComponent },
    // { loadChildren: 'checkout-quadrinho/:id', component: CheckoutQuadrinhoComponent },
];
