import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  [x: string]: any;

  listaEstados: any[];
  listaCidades: any[];
  listaCupons: any[];
  cupom: string;

  constructor(private http: Http) { }

  ngOnInit() {
    this.getEstados();
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

  getCupom(type: any) {
    this.http.get(`assets/data/cupons.json`)
    .subscribe((cupons: any) => {
       const getCupons = cupons.json();
      this.listaCupons = _.filter(getCupons, (cupom: any) => {
        return cupom.type === type;
      });
    });
    this.cupom = _.first(this.listaCupons);
  }
}
