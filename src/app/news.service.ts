import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { News } from './models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // apiUrl = 'https://newsapi.org/v2/top-headlines?country=th&apiKey=ab0d4aca4cea481e8157d31c68eb2b23';
  // apiUrl = 'http://localhost/j2/getnews.php';
  // apiUrl = 'http://192.168.1.101/j2/getnews.php';
  // apiUrl = 'http://192.168.43.164/j2/getnews.php';
  apiUrl = 'http://multiinno.name/j2/getnews.php';

  constructor(private http: HttpClient) { }
  getNews(): Observable<News>{
    return this.http.get<News>(this.apiUrl);
  }
}
