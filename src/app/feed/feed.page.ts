import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public nomeUsuario: string = "Marcos Salgado";

  public somaValor(valorNum: number): number
  {
    var valorFinal  = valorNum;

    return valorFinal;
  }

  constructor() { }

  ngOnInit() 
  {
    //alert ("Aeee Funfou");
  }

}
