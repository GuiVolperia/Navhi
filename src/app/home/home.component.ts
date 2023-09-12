import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {        
    constructor(private titleService: Title, private metaService: Meta) { }

    redirectToWhatsApp() {
      const number = '+557598361956'
      const url = `https://wa.me/${number}`;
      window.open(url, '_blank'); // Abre o link em uma nova janela ou aba
    }


    ngOnInit(): void {
      this.titleService.setTitle('Navhi Interstellar');
      this.metaService.addTag({ name: 'description', content: 'Navhi - Home | Somos uma cervejaria que fabrica chopps de maneira artesanal' });
    }

}
