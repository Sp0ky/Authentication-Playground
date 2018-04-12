import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './pages/book/book.component';
import { BookListComponent } from './pages/book/book-list/book-list.component';
import { BookEditComponent } from './pages/book/book-edit/book-edit.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'book', component : BookComponent },
    { path: 'book-list', component: BookListComponent },
    { path: 'book-add', component: BookEditComponent },
    { path: 'book-edit/:id', component: BookEditComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
