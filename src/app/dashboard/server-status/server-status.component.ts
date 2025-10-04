import {
  AfterViewInit,
  Component,
  DestroyRef,
  effect,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnChanges, AfterViewInit {
  // currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  // @Input() test?: number;
  // private interval?: NodeJS.Timeout;
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);
  constructor() {
    effect(()=>{
      console.log('effect : ',this.currentStatus());
      
    })
  }
  ngOnInit() {
    console.log('run ng on init');

    // this.interval = setInterval(() => {
    const interval = setInterval(() => {
      const rnd = +Math.random().toFixed(2); // 0-0.999
      // this.test = rnd;
      // console.log(rnd);

      if (rnd < 0.5) {
        // this.currentStatus = 'online';
        this.currentStatus.set('online') ;
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown') ;
      }
    }, 4000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
  ngAfterViewInit(): void {
    console.log('run ng After View Init!');
    // console.log(this.interval);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('run ng On Changes', changes);
  }
  // ngOnDestroy() {
  //   clearInterval(this.interval);
  //   clearTimeout(this.interval);
  // }
}
