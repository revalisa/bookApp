import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [];

  getBooks() {
    return this.books;
  }

  addBook(book: Book) {
    this.books.push(book);
    console.log('BOOK DITAMBAH:', this.books);
  }

  updateBook(updatedBook: Book) {
    this.books = this.books.map(book =>
      book.id === updatedBook.id ? updatedBook : book
    );
  }

  deleteBook(id: number) {
    this.books = this.books.filter(book => book.id !== id);
  }
}