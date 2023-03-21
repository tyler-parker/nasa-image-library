import { Component } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchQuery!: string;
  searchResults: any;
  

  constructor(private nasaApiService: NasaApiService) {}

  search(query: string): void {
    this.nasaApiService.searchImages(query).subscribe((response) => {
      this.searchResults = response;
    });
  }
}
