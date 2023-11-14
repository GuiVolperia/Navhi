import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  isAgeVerified: boolean | null = null;
  showUnderage: boolean = false;

  constructor(public router: Router, private titleService: Title, private metaService: Meta) { }

  @ViewChild('navMenu', { static: false }) navMenu!: ElementRef;

  toggleMenu() {
    this.navMenu.nativeElement.classList.toggle('active');
  }

  onAgeVerified(isVerified: boolean): void {
    this.isAgeVerified = isVerified;

    const isGooglebot = /Googlebot/.test(navigator.userAgent);

    // if (!isVerified && !isGooglebot) {
    //   this.showUnderage = true;
    // }
  }

  ngOnInit(): void {
    this.titleService.setTitle('Navhi Cervejaria');
    
    this.metaService.addTag({ name: 'description', content: 'Navhi - Home | Cervejaria Artesanal Interstellar - Conheça Nossas Cervejas Intergaláticas' });

    const isOver18 = localStorage.getItem('isOver18');
    if (isOver18) {
      this.isAgeVerified = true;
    }
  }
}
