import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-age-verification',
  templateUrl: './age-verification.component.html',
  styleUrls: ['./age-verification.component.scss']
})
export class AgeVerificationComponent {

  @Output() ageVerified = new EventEmitter<boolean>();

  confirmAge(over18: boolean): void {

    if(over18)
      localStorage.setItem('isOver18', 'true');   

    this.ageVerified.emit(over18);
  }
}
