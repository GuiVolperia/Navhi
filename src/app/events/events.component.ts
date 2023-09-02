import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { mapTo, scan } from 'rxjs/operators';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  events = [
    {
      name: 'Evento 1',
      date: new Date('2023-09-05T08:00:00'),
      description: 'Descrição do Evento 1',
      timeDiff: '',
      flyer: '../../assets/imgs/therra-rotulo.png'
    },
    
    {
      name: 'Evento 2',
      date: new Date('2023-10-09T08:00:00'),
      description: 'Descrição do Evento 1',
      timeDiff: '',
      flyer: '../../assets/imgs/therra-rotulo.png'
    },

    {
      name: 'Evento 3',
      date: new Date('2023-12-31T08:00:00'),
      description: 'Descrição do Evento 1',
      timeDiff: '',
      flyer: '../../assets/imgs/therra-rotulo.png'
    }
    // ... você pode adicionar mais eventos aqui
  ];

  private timerSubscription!: Subscription;


  ngOnInit(): void {
    this.timerSubscription = interval(1000).subscribe(() => {
      for (const event of this.events) {
        event.timeDiff = this.calculateTimeDiff(event.date);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  calculateTimeDiff(targetDate: Date): string {
    const now = new Date();
    let diffInSeconds = Math.floor((targetDate.getTime() - now.getTime()) / 1000);

    const days = Math.floor(diffInSeconds / (3600 * 24));
    diffInSeconds -= days * 3600 * 24;

    const hours = Math.floor(diffInSeconds / 3600);
    diffInSeconds -= hours * 3600;

    const minutes = Math.floor(diffInSeconds / 60);
    const seconds = diffInSeconds - minutes * 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}
