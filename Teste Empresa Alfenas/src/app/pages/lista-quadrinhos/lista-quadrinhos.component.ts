import { ComicsServce } from './../../../providers/comics.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lista-quadrinhos',
  templateUrl: './lista-quadrinhos.component.html',
  styleUrls: ['./lista-quadrinhos.component.scss']
})
export class ListaQuadrinhosComponent implements OnInit {

  comics: Array<any>;
  listacomics: Array<any>;

  constructor(private service: ComicsServce) { }

  ngOnInit() {
   this.onGetListComics();
  }

  onGetListComics() {
    this.service.onGettAllComics().subscribe((response: any) => {
      const getCupons = response.data.results;
      this.comics  = _.filter(getCupons, (comic: any) => {
        return comic['thumbnail'].path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';
      });
    });
  }
}
