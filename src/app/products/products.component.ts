import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

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
      description: 'Cerveja mais leve sem glutém',
      ingredients: 'Malte X, Lupulo Y',
      price: 30, img: 'assets/imgs/therra-rotulo.avif'
    },

    {
      id: 2,
      name: 'Osiris Session IPA',
      description: 'Nossa IPA',
      ingredients: 'Malte X, Lupulo Y',
      price: 35,
      img: 'assets/imgs/osiris-rotulo.avif'
    },
    {
      id: 3,
      name: 'Kemet Black Ipa',
      description: 'Uma Black IPA Interstellar',
      ingredients: 'Malte X, Lupulo Y',
      price: 45,
      img: 'assets/imgs/kemet-rotulo.avif'
    }
  ];

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('Navhi - Chopps');
    this.metaService.addTag({ name: 'description', content: 'Navhi - Chopps | Esta página contém uma lista dos nossos chopps interstellares.' });
  }

  productSelected(product: any) {    
    Swal.fire({
      title: 'Aviso!',
      text: 'Estamos trabalhando na construção da nossa loja aqui.',
      icon: 'warning',
      confirmButtonColor: '#ffff66',
      confirmButtonText: 'Entendido'
    });

  }

}
