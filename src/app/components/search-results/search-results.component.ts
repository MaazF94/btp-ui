import { ProfessionalService } from './../../shared/services/professional/professional.service';
import { ProfessionalLandingComponent } from './../professional-landing/professional-landing.component';
import { SearchResultService } from './../../shared/services/search-result/search-result.service';
import { Component, OnInit } from '@angular/core';
import { Professional } from 'src/app/shared/models/professional/professional';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  searchResult: Array<Professional>;
  searchQuery: string;

  constructor(private searchResultService: SearchResultService, private dialog: MatDialog,
              private professionalService: ProfessionalService) { }

  ngOnInit() {
    this.searchResult = this.searchResultService.getData();
    this.searchQuery = this.searchResultService.getSearchQuery();
  }

  openProfessionalLanding(index): void {
    this.professionalService.setProfessionalFromSearch(this.searchResult[index]);
    const dialogRef = this.dialog.open(ProfessionalLandingComponent, {
      width: '1000px'
    });
  }

}
