import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';
import Swal from 'sweetalert2';
import { PRICES } from './budgets.mock';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {
  beers = [
    { id: 1, name: 'Therra Ale', label: 'assets/imgs/therra-rotulo.avif', abv: '4,9', ibu: 21, selected: false, quantity: 20 },
    { id: 2, name: 'Osiris Session IPA', label: 'assets/imgs/osiris-rotulo.avif', abv: '5.2', ibu: 36, selected: false, quantity: 20 },
    { id: 3, name: 'Kemet Black Ipa', label: 'assets/imgs/kemet-rotulo.avif', abv: '7,2', ibu: 65, selected: false, quantity: 20 }
  ];

  prices:any[] = [];

  budgetValue = 0;

  isDesktop: boolean;
  private resizeSubscription: Subscription;

  constructor(private titleService: Title, private metaService: Meta, private deviceDetector: DeviceDetectorService) { 
    this.isDesktop = this.deviceDetector.isDesktop();

    this.resizeSubscription = this.deviceDetector.resize$.subscribe(() => {
      this.isDesktop = this.deviceDetector.isDesktop();
    });
  }

  getBudgetValue(): number {
    let totalValue = 0;

    // Itera sobre cada cerveja para verificar se está selecionada e, em seguida, calcula o valor total
    this.beers.forEach(beer => {
      if (beer.selected) {
        // Encontra o valor correspondente no mock de dados
        const price = PRICES.find(b => b.id === beer.id)?.valuesLiters.find(v => v.liters === beer.quantity);
        if (price) {
          totalValue += price.saleValueDiscount;
        }
      }
    });

    // Define e retorna o valor calculado
    this.budgetValue = totalValue;
    return Number(this.budgetValue.toFixed(2));
  }

  updateBudgetValue(beer: any, event: any) {
    const litersSelected = Number(event.target.value);
    beer.quantity = litersSelected;

    // Recalcula o valor total do orçamento
    this.getBudgetValue();
  }

  sendQuotation() {
    let message = "Olá, Segue cotação realizada no site:";
    
    this.beers.forEach(beer => {
      if (beer.selected) {
        const price = this.prices.find(b => b.id === beer.id)?.valuesLiters.find((v: { liters: number; }) => v.liters === beer.quantity);
        if (price) {
          // Formata e adiciona cada cerveja selecionada à mensagem
          message += `\n${beer.name} - ${beer.quantity} litros - R$ ${price.saleValueDiscount.toFixed(2)}`;
        }
      }
    });

    const encodedMessage = encodeURIComponent(message); // Codifica a mensagem para URL
    const number = '+5519983672710'; // Número do WhatsApp
    const url = `https://wa.me/${number}?text=${encodedMessage}`;
    window.open(url, '_blank'); // Abre o WhatsApp Web com a mensagem
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
    this.prices = PRICES;
    this.titleService.setTitle('Navhi Interstellar Beer - Orçamentos');
    this.metaService.addTag({ name: 'description', content: 'Navhi Interstellar Beer - Orçamentos | Cote grandes quantidades de cerveja para fazer a sua festa coma navhi' });
  }

  toggleBeerSelection(beer: any): void {
    beer.selected = !beer.selected;
    if (!beer.selected) {
      beer.quantity = 20; 
    }
  }
}
