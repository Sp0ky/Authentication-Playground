import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    books: Array<any>;
    displayedColumns = ['id', 'name', 'author', 'publisher', 'publishedDate', 'Edit'];

    constructor(private bookService: BookService) { }

    ngOnInit() {
      this.bookService.getAll().subscribe(data => {
        this.books = data;
      });
    }

}

export interface Element {
  id: number;
  name: string;
  author: string;
  publisher: string;
  publishedDate: Date;
}
