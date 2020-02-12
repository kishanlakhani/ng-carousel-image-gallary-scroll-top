import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carosal',
  templateUrl: './carosal.component.html',
  styleUrls: ['./carosal.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: true, showIndicators: true } }
  ]
})
export class CarosalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
