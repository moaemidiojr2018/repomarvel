import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';
import { ComicsServce } from 'src/providers/comics.service';

@Component({
  selector: 'app-checkout-quadrinho',
  templateUrl: './checkout-quadrinho.component.html',
  styleUrls: ['./checkout-quadrinho.component.scss']
})
export class CheckoutQuadrinhoComponent implements OnInit {

  listaEstados: any[];
  listaCidades: any[];
  listaCupons: any[];
  cupom: string;
  comic: any;
  code: any;
  public id: number;

  constructor(private http: Http,
    private activatedRoute: ActivatedRoute,
    private service: ComicsServce) { }

  ngOnInit() {
    this.getEstados();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.onGetComicDetails(this.id);
  }

  onGetComicDetails(id: any) {
    this.service.onGetComicById(id).subscribe((response: any) => {
      this.comic = response.data.results;     
    });
  }

  getEstados() {
    this.http.get(`assets/data/estados.json`)
      .subscribe((estado) => {
        this.listaEstados = estado.json();
      });
  }

  getCidades(id: any) {
    this.http.get(`assets/data/Cidades.json`)
    .subscribe((cidades: any) => {
       const getCidades = cidades.json();
      this.listaCidades = _.filter(getCidades, (cidade: any) => {
        return cidade.Estado === id;
      });
    });
  }

  getCupom(min: number, max: number) {
    var codigo = Math.floor(min + Math.random() * (max + 1 - min));
    this.code = "CUPOM " + codigo; 
    return this.code;
  }

}
