import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {        
    constructor(private titleService: Title, private metaService: Meta) { }

    ngOnInit(): void {
      this.titleService.setTitle('Navhi Interstellar');
      this.metaService.addTag({ name: 'description', content: 'Navhi - Home | Somos uma cervejaria que fabrica chopps de maneira artesanal' });
    }

}
