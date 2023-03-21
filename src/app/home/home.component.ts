import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageOfTheDay: any;

  constructor(private nasaApiService: NasaApiService) {}

  ngOnInit(): void {
    this.nasaApiService.getImageOfTheDay().subscribe((response) => {
      this.imageOfTheDay = response;
    });
  }
}
