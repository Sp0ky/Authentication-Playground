
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BookComponent } from './pages/book/book.component';
import { BookService } from './pages/book/book.service';
import { HomeComponent } from './pages/home/home.component';
import { BookListComponent } from './pages/book/book-list/book-list.component';
import { BookEditComponent } from './pages/book/book-edit/book-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    HomeComponent,
    BookListComponent,
    BookEditComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
