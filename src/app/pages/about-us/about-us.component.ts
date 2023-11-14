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
    this.titleService.setTitle('Navhi Interstellar Beer - Sobre');
    this.metaService.addTag({ name: 'description', content: 'Navhi - Sobre | História da Navhi e Propósito da Cervejaria' });
  }
}
