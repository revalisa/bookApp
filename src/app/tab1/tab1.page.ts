import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { TabModalPage } from '../tabmodal/tabmodal.page';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonicModule, CommonModule, TabModalPage],
})
export class Tab1Page {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private modalCtrl: ModalController
  ) {}

  ionViewWillEnter() {
    this.loadBooks();
  }

  loadBooks() {
    this.books = this.bookService.getBooks();
  }

async openModal(book: Book | null = null) {
  const modal = await this.modalCtrl.create({
    component: TabModalPage,
    componentProps: { book }
  });

  await modal.present();

  const { data } = await modal.onDidDismiss();

  console.log('DATA DARI MODAL:', data); // debug

  if (data) {
    if (book) {
      this.bookService.updateBook(data);
    } else {
      this.bookService.addBook(data);
    }

    this.loadBooks(); // refresh
  }
}

  deleteBook(id: number) {
    this.bookService.deleteBook(id);
    this.loadBooks();
  }
}