import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('Navhi - Sobre Nós');
    this.metaService.addTag({ name: 'description', content: 'Navhi - Sobre | Um pouco da nossa história e porque decidimos começar a fabricar o chopp interstellar' });
  }
}
