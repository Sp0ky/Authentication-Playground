import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book.bean';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

   book: any = {};
  // book: Book = new Book();
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookService) {
  }

  ngOnInit() {
    console.log(this.book);
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.bookService.get(id).subscribe((book: any) => {
          if (book) {
            console.log('Dans le if, id' + id);
            this.book = book;
            this.book.href = book._links.self.href;
          } else {
            console.log('Dans le else !');
            console.log(`Book with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/book-list']);
  }

  save(form: NgForm) {
    this.bookService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.bookService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
