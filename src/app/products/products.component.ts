import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Therra', description: 'Chopp mais leve sem glutém', price: 30, img: 'assets/imgs/therra-rotulo.png' },
    { id: 2, name: 'Osiris', description: 'Nossa Ipa', price: 35, img: 'assets/imgs/osiris-rotulo.png' },
    { id: 3, name: 'Black', description: 'Cervejica Gostosa', price: 45, img: 'assets/imgs/osiris-rotulo.png'  }
    // ... add more products as needed
  ];

  constructor() { }

  ngOnInit(): void { }
}
