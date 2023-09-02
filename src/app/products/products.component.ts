import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Therra',
      description: 'Chopp mais leve sem glutém',
      ingredients: 'Malte X, Lupulo Y',
      price: 30, img: 'assets/imgs/therra-rotulo.png'
    },

    {
      id: 2,
      name: 'Osiris',
      description: 'Nosso IPA',
      ingredients: 'Malte X, Lupulo Y',
      price: 35,
      img: 'assets/imgs/osiris-rotulo.png'
    },
    {
      id: 3,
      name: 'Kemet',
      description: 'Um Black IPA Interstellar',
      ingredients: 'Malte X, Lupulo Y',
      price: 45,
      img: 'assets/imgs/kemet-rotulo.png'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
