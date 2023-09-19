// device-detector.service.ts

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectorService {

  private resizeSubject = new Subject<void>();
  resize$ = this.resizeSubject.asObservable();

  constructor() { 
    window.addEventListener('resize', () => this.resizeSubject.next());
  }

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  isDesktop(): boolean {
    return !this.isMobile();
  }
}
