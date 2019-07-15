import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResult } from '../../models/search-result/search-result';
import { Professional } from '../../models/professional/professional';

const httpOptions = {
  headers: new HttpHeaders(
    { withCredentials: 'true' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  url = 'http://localhost:8080/btp/searchResult';
  public searchResult: Array<Professional>;
  public searchQuery: string;

  constructor(private http: HttpClient) { }

  getSearchResult(searchQuery: string): Observable<SearchResult> {
    return this.http.post<SearchResult>(this.url, searchQuery, httpOptions);
  }

  setSearchResult(searchResult: Array<Professional>) {
    this.searchResult = searchResult;
  }

  getData(): Array<Professional> {
    return this.searchResult;
  }

  setSearchQuery(searchQuery: string) {
    this.searchQuery = searchQuery;
  }

  getSearchQuery(): string {
    return this.searchQuery;
  }
}
