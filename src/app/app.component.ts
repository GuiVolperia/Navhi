import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'navhi';

  @ViewChild('navMenu', {static:false}) navMenu!: ElementRef;

  toggleMenu() {
    this.navMenu.nativeElement.classList.toggle('active');
  }
}