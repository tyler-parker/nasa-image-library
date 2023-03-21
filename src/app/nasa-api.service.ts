import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NasaApiService {
  private readonly API_URL = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) {}

  getImageOfTheDay(): Observable<any> {
    return this.http.get(this.API_URL, {
      params: { api_key: 'DEMO_KEY' },
    });
  }

  searchImages(query: string, count: number = 10): Observable<any> {
    const searchApiUrl = 'https://images-api.nasa.gov/search';
    return this.http.get(searchApiUrl, {
      params: {
        q: query,
        media_type: 'image',
        page: '1',
        // per_page: count.toString(),
      },
    });
  }
  
}
