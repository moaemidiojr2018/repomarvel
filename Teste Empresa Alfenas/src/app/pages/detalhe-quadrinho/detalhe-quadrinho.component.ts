import { ActivatedRoute } from '@angular/router';
import { ComicsServce } from './../../../providers/comics.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalhe-quadrinho',
  templateUrl: './detalhe-quadrinho.component.html',
  styleUrls: ['./detalhe-quadrinho.component.scss']
})
export class DetalheQuadrinhoComponent implements OnInit {
  [x: string]: any;

  comic: any;
  public id: number;

  constructor(private service: ComicsServce,
    private activatedRoute: ActivatedRoute) {    
      this.formulario = new FormGroup({
        id: new FormControl('', Validators.compose([])),
        title: new FormControl('', Validators.compose([])),
        thumbnail: new FormControl('', Validators.compose([])),
        description: new FormControl('', Validators.compose([])),
        modified: new FormControl('', Validators.compose([])),
        penciller: new FormControl('', Validators.compose([])),
        writer: new FormControl('', Validators.compose([])),
        price: new FormControl('', Validators.compose([]))
      });  
     }

  ngOnInit() {   
    this.id = this.activatedRoute.snapshot.params['id'];
    this.onGetComicDetails(this.id);
  }

  onGetComicDetails(id: any) {
    this.service.onGetComicById(id).subscribe((response: any) => {
      this.comic = response.data.results;     
    });
  }

  setValueDetails(comic: any) {
    this.formulario.patchValue({
      id: comic.id,
      title: comic.title,
      thumbnail: comic.thumbnail,
      description: comic.description,
      modified: comic.modified,
      penciller: comic.penciller,
      writer: comic.writer,
      price: comic.price
    });

  }
}
