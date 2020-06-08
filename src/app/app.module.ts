import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateCardComponent } from './components/candidate-card/candidate-card.component';
import { CandidateFormComponent } from './components/candidate-form/candidate-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    CandidateCardComponent,
    CandidateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
