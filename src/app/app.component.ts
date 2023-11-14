import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  isAgeVerified: boolean | null = null;
  showUnderage: boolean = false;
  isAdmin: boolean = true;

  constructor(public router: Router, private titleService: Title, private metaService: Meta) { 

     // Detecta a mudança de rota
     this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isAdmin = event.url.includes('/admin');
    });

  }

  @ViewChild('navMenu', { static: false }) navMenu!: ElementRef;

  toggleMenu() {
    this.navMenu.nativeElement.classList.toggle('active');
  }

  onAgeVerified(isVerified: boolean): void {
    this.isAgeVerified = isVerified;

    const isGooglebot = /Googlebot/.test(navigator.userAgent);

    if (!isVerified && !isGooglebot) {
      this.showUnderage = true;
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle('Navhi Interstellar Beer - Cervejaria');
    
    this.metaService.addTag({ name: 'description', content: 'Navhi Interstellar Beer - Home | Cervejaria Artesanal Interstellar - Conheça Nossas Cervejas Intergaláticas' });

    const isOver18 = localStorage.getItem('isOver18');
    if (isOver18) {
      this.isAgeVerified = true;
    }
  }
}
