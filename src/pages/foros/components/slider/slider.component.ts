import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @Input() images: string[] = [];
  @Input() audios: string[] = [];

  // audio: HTMLAudioElement;
  // value: number = 0;

  constructor() { }

  ngOnInit() {
    // this.audio = new Audio('https://www.w3schools.com/html/horse.ogg');
    // this.audio.volume = 1;
    // this.audio.play();
  }

  onSlideChange(event) {
    // this.value = event.value;
    // this.audio.volume = this.value / 100;
  }

}
