import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './main-body/main-body.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    MainBodyComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainBodyComponent,
  ],
  providers: [
    
  ]
})
export class GifsModule { }
