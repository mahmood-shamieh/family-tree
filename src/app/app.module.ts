import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { PersonCard } from './person/pserson.card.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { PersonPanel } from './person/person.panel.component';
import { PersonProfile } from './person/person.profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppBar } from './bar/app.bar.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { test } from './person/test.component';
import { test1 } from './test1.component';
import {MatDividerModule} from '@angular/material/divider';
import {ContactUs} from './contctus/contactUs.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCard,
    PersonPanel,
    PersonProfile,
    AppBar,
    ContactUs,
    test,
    test1,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCardModule,
    MatExpansionModule,
    MatBottomSheetModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
