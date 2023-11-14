import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { DeviceDetectorService } from '../../services/device-detector.service';
import { Subscription } from 'rxjs';

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
      description: 'Sabor Extraterrestre, Sem Glúten',
      ingredients: 'Água Mineral Natural, Malte de Cevada e Lúpulo',
      price: 29.99,
      img: 'assets/imgs/therra-rotulo.avif',
      units: 16,
      amount: '1 Litro'
    },

    {
      id: 2,
      name: 'Osiris Session IPA',
      description: 'Notas Alienígenas',
      ingredients: 'Água Mineral Natural, Malte de Cevada e Lúpulo',
      price: 34.99,
      img: 'assets/imgs/osiris-rotulo.avif',
      units: 16,
      amount: '1 Litro'
    },
    {
      id: 3,
      name: 'Kemet Black Ipa',
      description: 'Uma Black IPA Interstellar',
      ingredients: 'Água Mineral Natural, Malte de Cevada e Lúpulo',
      price: 44.99,
      img: 'assets/imgs/kemet-rotulo.avif',
      units: 20,
      amount: '1 Litro'
    }
  ];

  isDesktop: boolean;
  private resizeSubscription: Subscription;

  constructor(private titleService: Title, private metaService: Meta, private deviceDetector: DeviceDetectorService) {
    this.isDesktop = this.deviceDetector.isDesktop();

    this.resizeSubscription = this.deviceDetector.resize$.subscribe(() => {
      this.isDesktop = this.deviceDetector.isDesktop();
    });
  }

  productSelected(product: any) {
    const number = '+5519983672710'
    const url = `https://wa.me/${number}?text=Olá,%20Quero%20Fazer%20Um%20Pedido,%20Me%20Interessei%20Pela%20"${product.name}"`;
    window.open(url, '_blank');
  }

  showImageInPopup(imageSrc: string) {
    Swal.fire({
      html: `<img src="${imageSrc}" class="swal2-image-custom" alt="A large image">`,
      showConfirmButton: false,
      background: 'rgba(0,0,0,0.8)',
      showCloseButton: true,
      width: '90%', // ou outro valor que você queira para o tamanho total do popup
      padding: '3em', // ajuste conforme necessário
    });

  }

  ngOnInit(): void {
    this.titleService.setTitle('Navhi Interstellar Beer - Cervejas');
    this.metaService.addTag({ name: 'description', content: 'Navhi Interstellar Beer - Cervejas | Cervejas Artesanais Interstellares' });
  }

  ngOnDestroy() {
    // Certifique-se de cancelar a subscrição para evitar vazamentos de memória
    this.resizeSubscription.unsubscribe();
  }
}
