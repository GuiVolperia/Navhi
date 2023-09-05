import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
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


  constructor(private router: Router) { }

  @ViewChild('navMenu', { static: false }) navMenu!: ElementRef;

  toggleMenu() {
    this.navMenu.nativeElement.classList.toggle('active');
  }

  onAgeVerified(isVerified: boolean): void {
    this.isAgeVerified = isVerified;
    if (!isVerified) {
      this.showUnderage = true;
    }
  }

  ngOnInit(): void {
    const isOver18 = localStorage.getItem('isOver18');
    if (isOver18)
      this.isAgeVerified = true;
  }

}