import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {        
    constructor(private titleService: Title, private metaService: Meta) { }   

    productSelected(name : string) {    
      const number = '+5519983672710'
      const url = `https://wa.me/${number}?text=Olá,%20Quero%20Fazer%20Um%20Pedido,%20Me%20Interessei%20Pela%20"${name}"`;
      window.open(url, '_blank'); 
    }

    ngOnInit(): void {
      this.titleService.setTitle('Navhi Interstellar');
      this.metaService.addTag({ name: 'description', content: 'Navhi - Home | Somos uma cervejaria que fabrica chopps de maneira artesanal' });
    }

}
