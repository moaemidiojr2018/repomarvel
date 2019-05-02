import { DetalheQuadrinhoComponent } from './pages/detalhe-quadrinho/detalhe-quadrinho.component';
import { ListaQuadrinhosComponent } from './pages/lista-quadrinhos/lista-quadrinhos.component';
import { CheckoutQuadrinhoComponent } from './pages/checkout-quadrinho/checkout-quadrinho.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';
import { routing } from './app.routing';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    HttpModule,
    RouterModule,
    routing
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CheckoutQuadrinhoComponent,
    ListaQuadrinhosComponent,
    DetalheQuadrinhoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
