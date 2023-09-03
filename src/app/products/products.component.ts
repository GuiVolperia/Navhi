import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Therra Ale',
      description: 'Chopp mais leve sem glutém',
      ingredients: 'Malte X, Lupulo Y',
      price: 30, img: 'assets/imgs/therra-rotulo.png'
    },

    {
      id: 2,
      name: 'Osiris Session IPA',
      description: 'Nosso IPA',
      ingredients: 'Malte X, Lupulo Y',
      price: 35,
      img: 'assets/imgs/osiris-rotulo.png'
    },
    {
      id: 3,
      name: 'Kemet Balck Ipa',
      description: 'Um Black IPA Interstellar',
      ingredients: 'Malte X, Lupulo Y',
      price: 45,
      img: 'assets/imgs/kemet-rotulo.png'
    }
  ];

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Navhi - Chopps');
  }
}
